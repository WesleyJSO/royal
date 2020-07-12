
import React, { useState, useEffect } from 'react'
import Select from 'react-select'

import './styles.css'
import api from '../../services'

export default function Sales(props) {

  const [client, setClient] = useState({})

  const [isCNPJ, setIsCNPJ] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`client?id=${props.match.params.clientId}`)
      setClient(response.data[0])
    }
    fetchData()
  }, [props])

  const handlerChangeCpf = async event => {
    const length = event.target.value.length
    const value = event.target.value
    let response = {}
    debugger
    if((isCNPJ && length === 14) || (!isCNPJ && length === 11)) {
      response = await api.get(`client?cgccpf=${value}`)
    }
    response.data
      ? setClient(response.data[0])
      : setClient({ ...client, cgccpf: value })
  }

  const handleLableClick = event => {
    event.target.classList.remove(`interactive-label`)
    if(event.target.textContent === `CNPJ`) {
      event.target.previousSibling.classList.add(`interactive-label`)
      setIsCNPJ(true)
    } else {
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
                <div> 
                  <label onClick={handleLableClick}>CPF </label>
                  <label className="interactive-label" onClick={handleLableClick}>CNPJ</label>
                </div>
                <input 
                  id="cgccpf" 
                  value={client.cgccpf}
                  onChange={handlerChangeCpf}
                />
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
                <Select 
                  className="select-option"
                  options={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' },
                  ]}
                />
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