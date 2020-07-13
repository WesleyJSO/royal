
import React, { useState, useEffect } from 'react'
// import Select from 'react-select'
import Select from '../../components/Select'
import { Client } from '../../Entities/index'
import service from '../../services'

import './styles.css'

export default function Sales(props) {

  const clientService = service(`service`)
  const planService = service(`plan`)

  const [client, setClient] = useState(new Client())

  const [isCNPJ, setIsCNPJ] = useState(false)

  const [plans, setPlans] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const responseClient = await clientService.get(props.match.params.clientId)
      setClient(responseClient.data[0])
      
      const responsePlans = await planService.get()
      setPlans(responsePlans.data)
    }
    fetchData()
  }, [clientService, planService, props.match.params.clientId])

  const handleCgcpfChange = async event => {
    const length = event.target.value.length
    const value = event.target.value
    let response = {}
    if((isCNPJ && length === 14) || (!isCNPJ && length === 11)) {
      response = await clientService.get(value)
    }
    response.data ? setClient(response.data[0]) : setClient({ ...new Client(), cgccpf: value })
  }

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

  return (
    <>
      <h1>Vendas</h1>
      <div className="card">
        <form>
          <div className="border">
            <div className="header">Cadastrar nova venda</div>
            <div className="form-group">
              <div className="field">
                <div style={{ margin: `5px 0px` }}> 
                  <label onClick={handleLableClick}>CPF </label>
                  <label className="interactive-label" onClick={handleLableClick}>CNPJ</label>
                </div>
                <input 
                  id="cgccpf" 
                  value={client.cgccpf}
                  onChange={handleCgcpfChange}
                />
                <small><label id="mask-cgccpf" style={{ display: isCNPJ ? `none` : `` }} htmlFor="cgccpf">Pesquisa por CPF</label></small>
                <small><label id="mask-cnpj" style={{ display: isCNPJ ? `` : `none` }} htmlFor="cgccpf">Pesquisa por CNPJ</label></small>
              </div>
              <div className="field">
                <label htmlFor="name">Nome do Cliete</label>
                <input 
                  id="name" 
                  disabled={true}
                  value={client.name}
                />
              </div>
              <div className="field">
                <label htmlFor="planType">Plano</label>
                <Select items={plans} />
              </div>
            </div>
            <div className="form-group">
              <div className="field">
                <label htmlFor="note">Observação</label>
                <textarea 
                  id="note" 
                  rows="4" 
                  cols="200" 
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}