import React, { useState, useEffect } from 'react'
import service from '../../services'

import './styles.css'

export default function Client(props) {
  
  const clientService = service(`client`)

  const [client, setClient] = useState({})
  
  useEffect(function() {
    const fetchData = async () => {
      const response = await clientService.get(props.match.params.id)
      setClient(response.data[0])
    }
    fetchData()
  }, [clientService, props.match.params.id])

  return (
    <>
     <h1>Cadasto de Cliente</h1>
     <div className="card">
       <form>
        <div className="border">
          <div className="header">Dados Pessoais</div>
          <div className="form-group">
            <div className="field">
              <label htmlFor="cgccpf">CPF</label>
              <input 
                id="cgccpf" 
                value={client.cgccpf} 
              />
            </div>
            <div className="field">
              <label htmlFor="name">Nome</label>
              <input 
                id="name" 
                value={client.name} 
              />
            </div>
            <div className="field">
              <label htmlFor="birthdate">Data de Nascimento</label>
              <input 
                id="birthdate" 
                value={client.birthdate} 
              />
            </div>
          </div>

          <div className="form-group">
            <div className="field">
              <label htmlFor="gender">Genero</label>
              <input 
                id="gender" 
                value={client.gender}    
              />
            </div>
            <div className="field">
              <label htmlFor="martianStatus">Estado Civil</label>
              <input 
                id="martianStatus" 
                value={client.martianstatus}    
              />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input 
                id="email" 
                value={client.email}    
              />
            </div>
          </div>
        </div>

        <div className="border">
          <div className="header">Contato</div>
          <div className="form-group">
            <div className="field">
              <label htmlFor="cellphone">Celular</label>
              <input 
                id="cellphone" 
                value={client.cellphone}
              />
            </div>
            <div className="field">
              <label htmlFor="phonenumber">Telefone</label>
              <input 
                id="phonenumber" 
                value={client.phonenumber}
              />
            </div>
            <div className="field">
              <label htmlFor="comercialphone">Telefone Comercial</label>
              <input 
                id="comercialphone" 
                value={client.comercialphone}
              />
            </div>
            <div className="field">
              <label htmlFor="contactphone">Telefone de Contato</label>
              <input 
                id="contactphone" 
                value={client.contactphone}
              />
            </div>
          </div>
        </div>

        <div className="border">
          <div className="header">Endereço</div>
          <div className="form-group">
            <div className="field">
              <label htmlFor="cep">CEP</label>
              <input 
                id="cep" 
                value={client.cep}
              />
            </div>
            <div className="field">
              <label htmlFor="address">Endereço</label>
              <input 
                id="address" 
                value={client.address}
              />
            </div>
            <div className="field">
              <label htmlFor="addressnumber">Número</label>
              <input 
                id="addressnumber" 
                value={client.addressnumber}
              />
            </div>        
            <div className="field">
              <label htmlFor="complement">Complemento</label>
              <input 
                id="complement" 
                value={client.complement}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="field">
              <label htmlFor="neighborhood">Bairro</label>
              <input 
                id="neighborhood" 
                value={client.neighborhood}
              />
            </div>
            <div className="field">
              <label htmlFor="state">Estado</label>
              <input 
                id="state" 
                value={client.state}
              />
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <input 
                id="city" 
                value={client.city}
              />
            </div>
            <div className="field">
              <label htmlFor="recomendation">Indicação</label>
              <input 
                id="recomendation" 
                value={client.recomendation}
              />
            </div>
          </div>
        </div>

        <div className="border">
          <div className="header">Cliente Pessoa Jurídica</div>
          <div className="form-group">
            <div className="field">
              <label htmlFor="cnpj">CNPJ</label>
              <input 
                id="cnpj" 
                value={client.cnpj}
              />
            </div>
            <div className="field">
              <label htmlFor="companyname">Nome Fantasia</label>
              <input 
                id="companyname" 
                value={client.companyname}
              />
            </div>
            <div className="field">
              <label htmlFor="socialname">Razão Social</label>
              <input 
                id="socialname" 
                value={client.socialname}
              />
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