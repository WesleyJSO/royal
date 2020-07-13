import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import service from '../../services'

import './styles.css'
import { Client } from '../../Entities'

export default function ClientList() {

  const history = useHistory()

  const clientService = service(`client`)
  
  const [isCNPJ, setIsCNPJ] = useState(false)

  const [disabled, setDisabled] = useState(true)

  const [client, setClient] = useState(new Client())
  const [clients, setClients] = useState([])

  const handleClientChange = event => setClient({ ...client, [event.target.id]: event.target.value })

  const handleCgcpfChange = async event => {
    handleClientChange(event)
    const length = event.target.value.length
    const cgccpf = event.target.value
    let response = {}
    if((isCNPJ && length === 14) || (!isCNPJ && length === 11)) {
      response = await clientService.get(cgccpf)
    }
    response.data ? setClient(response.data[0]) : setClient({ ...new Client(), cgccpf })
  } 
  useEffect(() => {
    const fetchData = async () => {
      const response = await clientService.get()
      setClients(response)
    }
    fetchData()
  }, [clientService])
  const handleLableClick = event => {
    event.target.classList.remove(`interactive-label`)
    if(event.target.textContent === `CNPJ`) {
      document.getElementById(`mask-cnpj`).style.display = ``
      document.getElementById(`mask-cgccpf`).style.display = `none`
      event.target.previousSibling.classList.add(`interactive-label`)
      setIsCNPJ(true)
    } else {
      document.getElementById(`mask-cgccpf`).style.display = ``
      document.getElementById(`mask-cnpj`).style.display = `none`
      event.target.nextSibling.classList.add(`interactive-label`)
      setIsCNPJ(false)
    }
  }
  const handleTableClick = event => {
    const clientId = parseInt(event.target.parentElement.getAttribute(`tr-key`))
    const client = clients.filter(client => client.id === clientId)[0]
    setClient(client)
  }
  const handleTableDoubleClick = event => {
    event.preventDefault()
    history.push(`/cadastro-cliente/${event.target.parentElement.getAttribute(`tr-key`)}`)
  }
  const handleButtonClick = event => {
    event.preventDefault()
    history.push(`/cadastro-cliente`)
  }
  const handleNewSaleClick = event => {
    event.preventDefault()
    history.push(`/cadastro-venda/${event.target.parentElement.parentElement.getAttribute(`tr-key`)}`)
  }
  const handleKeyUp = event => {
    const tds = [...document.getElementsByTagName(`td`)]
    const inputs = [...document.getElementsByTagName(`input`)].filter(input => input.value)
    if(inputs.length === 0) {
      tds.forEach(td => td.parentElement.style.display = ``)
    } else {
      inputs.forEach(input => tds.filter(td => td.classList[0] === input.id)
          .forEach(td => td.textContent.toUpperCase().indexOf(input.value.toUpperCase()) >= 0
            ? td.parentElement.style.display = ``
            : td.parentElement.style.display = `none`
        )
      )
    }
    const trs = [...document.querySelectorAll(`tbody tr`)]
    trs.length === trs.filter(tr => tr.style.display === `none`).length
      ? setDisabled(false)
      : setDisabled(true)
  }

  return (
    <>
      <h1>Clientes</h1>
      <div className="card" style={{width: '87%'}}>
        <form>
          <div className="border">
            <div className="header">Busca</div>
              <div className="form-group">
                <div className="field">
                  <div style={{ margin: `5px 0px` }}> 
                    <label onClick={handleLableClick}>CPF </label>
                    <label className="interactive-label" onClick={handleLableClick}>CNPJ</label>
                  </div>
                  <input 
                    id="cgccpf" 
                    value={client.cgccpf}
                    onChange={e => { handleClientChange(e); handleCgcpfChange(e) }}
                    onKeyUp={handleKeyUp}
                  />
                  <small>
                    <label id="mask-cgccpf" style={{ display: isCNPJ ? `none` : `` }} htmlFor="cgccpf">Pesquisa por CPF</label>
                  </small>
                  <small>
                    <label id="mask-cnpj" style={{ display: isCNPJ ? `` : `none` }} htmlFor="cgccpf">Pesquisa por CNPJ</label>
                  </small>
                </div>
                <div className="field">
                  <label htmlFor="name">Nome</label>
                  <input 
                    id="name" 
                    value={client.name} 
                    onChange={handleClientChange} 
                    onKeyUp={handleKeyUp} 
                  />
                </div>
                <div className="field">
                  <label htmlFor="cardnumber">Número do Cartão</label>
                  <input 
                    id="cardnumber" 
                    value={client.cardnumber}
                    onChange={handleClientChange}
                    onKeyUp={handleKeyUp}
                  />
                </div>
                <div className="field">
                  <label htmlFor="status">Status</label>
                  <input 
                    id="status" 
                    value={client.status || ``}
                    onChange={handleClientChange}
                    onKeyUp={handleKeyUp}
                  />
                </div>
              </div>
              </div>
              <div className="align-right">
                <button 
                  className="btn-info no-margin-right" 
                  disabled={disabled}
                  onClick={handleButtonClick}>
                    Novo
                </button>
              </div>
        </form>
      </div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data Nascimento</th>
              <th>CPF / CNPJ</th>
              <th>Telefone</th>
              <th>Data de Vencimento</th>
              <th>Status</th>
              <th style={{padding: `0px 50px`}}>Ações</th>
            </tr>
          </thead>
          <tbody>
              { clients.map(client => {
                  return (
                    <tr 
                      key={client.id} 
                      tr-key={client.id} 
                      onClick={handleTableClick}
                      onDoubleClick={handleTableDoubleClick}
                    >
                      <td className="name">{client.name}</td>
                      <td className="birthdate">{client.birthdate}</td>
                      <td className="cgccpf">{client.cgccpf}</td>
                      <td className="phonenumber">{client.phonenumber}</td>
                      <td className="expiredate">{client.expiredate}</td>
                      <td className="status">{client.status}</td>
                      <td className="action">
                        <button 
                          type="button" 
                          className="btn-info" 
                          style={{width: 120, boxShadow: `none` }}
                          onClick={handleNewSaleClick}>Nova Venda</button>
                      </td>
                    </tr>
                  )
                }) 
              }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="7">
                <ul className="pagination">
                  <li><a href="/">1</a></li>
                  <li><a href="/">2</a></li>
                  <li><a href="/">3</a></li>
                  <li><a href="/">4</a></li>
                  <li><a href="/">5</a></li>
                </ul>
              </td>
            </tr>
          </tfoot>
        </table>
    </>
  )
}