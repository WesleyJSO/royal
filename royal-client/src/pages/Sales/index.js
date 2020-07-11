
import React from 'react'
import Select from 'react-select'

import './styles.css'

export default function Sales() {
  return (
    <>
      <h1>Vendas</h1>
      <div className="card">
        <form>
          <div className="border">
            <div className="header">Cadastrar nova venda</div>
            <div className="form-group">
              <div className="field">
                <label htmlFor="cpf">CPF</label>
                <input id="cpf" />
              </div>
              <div className="field">
                <label htmlFor="name">Nome do Cliete</label>
                <input id="name" />
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
                <textarea id="note" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}