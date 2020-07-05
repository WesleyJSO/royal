import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'

export default function Client() {

  return (
    <>
     <h1>Cadasto de Cliente</h1>
     <div className="card">
       <form>
        <div className="border">
          <div className="header">Dados Pessoais</div>
          <div className="form-group">
            <div className="field">
              <label for="cpf">CPF</label>
              <input id="cpf" />
            </div>
            <div className="field">
              <label for="name">Nome</label>
              <input id="name" />
            </div>
            <div className="field">
              <label for="birthDate">Data de Nascimento</label>
              <input id="birthDate" />
            </div>
          </div>

          <div className="form-group">
            <div className="field">
              <label for="gender">Genero</label>
              <input id="gender" />
            </div>
            <div className="field">
              <label for="martianStatus">Estado Civil</label>
              <input id="martianStatus" />
            </div>
            <div className="field">
              <label for="email">E-mail</label>
              <input id="email" />
            </div>
          </div>
        </div>

        <div className="border">
          <div className="header">Contato</div>
          <div className="form-group">
            <div className="field">
              <label for="cellphone">Celular</label>
              <input id="cellphone" />
            </div>
            <div className="field">
              <label for="phone">Telefone</label>
              <input id="phone" />
            </div>
            <div className="field">
              <label for="comercialPhone">Telefone Comercial</label>
              <input id="comercialPhone" />
            </div>
            <div className="field">
              <label for="contactPhone">Telefone de Contato</label>
              <input id="contactPhone" />
            </div>
          </div>
        </div>

        <div className="border">
          <div className="header">Endereço</div>
          <div className="form-group">
            <div className="field">
              <label for="cep">CEP</label>
              <input id="cep" />
            </div>
            <div className="field">
              <label for="address">Endereço</label>
              <input id="address" />
            </div>
            <div className="field">
              <label for="addressNumber">Número</label>
              <input id="addressNumber" />
            </div>        
            <div className="field">
              <label for="complement">Complemento</label>
              <input id="complement" />
            </div>
          </div>

          <div className="form-group">
            <div className="field">
              <label for="neighborhood">Bairro</label>
              <input id="neighborhood" />
            </div>
            <div className="field">
              <label for="state">Estado</label>
              <input id="state" />
            </div>
            <div className="field">
              <label for="city">Cidade</label>
              <input id="city" />
            </div>
            <div className="field">
              <label for="recomendation">Indicação</label>
              <input id="recomendation" />
            </div>
          </div>
        </div>

        <div className="border">
          <div className="header">Cliente Pessoa Jurídica</div>
          <div className="form-group">
            <div className="field">
              <label for="cnpj">CNPJ</label>
              <input id="cnpj" />
            </div>
            <div className="field">
              <label for="companyName">Nome Fantasia</label>
              <input id="companyName" />
            </div>
            <div className="field">
              <label for="socialName">Razão Social</label>
              <input id="socialName" />
            </div>
          </div>
        </div>
        
        <div className="align-right">
          <button className="btn-info no-margin-right">Salvar</button>
        </div>

       </form>
     </div>
    </>
  )
}