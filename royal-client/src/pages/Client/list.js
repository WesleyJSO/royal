import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services'

import './styles.css'

export default function ClientList() {

  const history = useHistory()
  
  const [disabled, setDisabled] = useState(true)

  const [clients, setClients] = useState([])
  const [name, setName] = useState(``)
  const [cgccpf, setCgccpf] = useState(``)
  const [cardnumber, setCardnumber] = useState(``)
  const [status, setStatus] = useState(``)

  const handleNameChange = event => setName(event.target.value)
  const handleCpfChange = event => setCgccpf(event.target.value)
  const handleCardnumberChange = event => setCardnumber(event.target.value)
  const handleStatusChange = event => setStatus(event.target.value)

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`client`)
      setClients(response.data)
    }
    fetchData()
  })

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
                  <label htmlFor="name">Nome</label>
                  <input 
                    id="name" 
                    value={name} 
                    onChange={handleNameChange} 
                    onKeyUp={handleKeyUp} 
                  />
                </div>
                <div className="field">
                  <label htmlFor="cgccpf">CPF</label>
                  <input 
                    id="cgccpf" 
                    value={cgccpf}
                    onChange={handleCpfChange}
                    onKeyUp={handleKeyUp}
                  />
                </div>
                <div className="field">
                  <label htmlFor="cardnumber">Número do Cartão</label>
                  <input 
                    id="cardnumber" 
                    value={cardnumber}
                    onChange={handleCardnumberChange}
                    onKeyUp={handleKeyUp}
                  />
                </div>
                <div className="field">
                  <label htmlFor="status">Status</label>
                  <input 
                    id="status" 
                    value={status}
                    onChange={handleStatusChange}
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
              <th>CPF</th>
              <th>Telefone</th>
              <th>Data de Vencimento</th>
              <th>Status</th>
              <th style={{padding: `0px 50px`}}>Ações</th>
            </tr>
          </thead>
          <tbody>
              { clients.map(client => {
                  return (
                    <tr key={client.id} tr-key={client.id} onDoubleClick={handleTableDoubleClick}>
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