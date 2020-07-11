import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'

export default function ClientList() {

  const history = useHistory()

  const handleClick = event => {
    event.preventDefault()
    history.push('/cadastro-cliente')
  }

  const handleKeyUp = () => {
    const tds = [...document.getElementsByTagName("td")]
    const inputs = [...document.getElementsByTagName('input')]
      .filter(input => input.value)
    
      inputs.forEach(input => {
        tds
          .filter(td => td.classList[0] ===input.id)
          .forEach(td => {
            const text = (td.textContent || td.innerText).toUpperCase()
            text.indexOf(input.value.toUpperCase()) >= 0
            ? td.parentElement.style.display = ''
            : td.parentElement.style.display = 'none'
        })
    })
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
                  <input id="name" onKeyUp={handleKeyUp} />
                </div>
                <div className="field">
                  <label htmlFor="cpf">CPF</label>
                  <input id="cpf" onKeyUp={handleKeyUp} />
                </div>
                <div className="field">
                  <label htmlFor="cardNumber">Número do Cartão</label>
                  <input id="cardNumber" onKeyUp={handleKeyUp} />
                </div>
                <div className="field">
                  <label htmlFor="status">Status</label>
                  <input id="status" onKeyUp={handleKeyUp} />
                </div>
              </div>
              </div>
              <div className="align-right">
                <button className="btn-info no-margin-right" onClick={handleClick}>Novo</button>
              </div>
        </form>
      </div>
      {/* <div class="table"> */}
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data Nascimento</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Data de Vencimento</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="name">jose</td>
              <td className="birthDate">maria</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">maria jose</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">maria jose</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">maria jose</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">maria cintia</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">cintia maria</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">jfalkfçdj</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">jfalkfçdj</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">jfalkfçdj</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">jfalkfçdj</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">jfalkfçdj</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">jfalkfçdj</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">jfalkfçdj</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">jfalkfçdj</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">jfalkfçdj</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">jfalkfçdj</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
            <tr>
              <td className="name">jfalkfçdj</td>
              <td className="birthDate">jfalkfçdj</td>
              <td className="cpf">jfalkfçdj</td>
              <td className="phone">jfalkfçdj</td>
              <td className="expireData">jfalkfçdj</td>
              <td className="status">jfalkfçdj</td>
              <td className="action">jfalkfçdj</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="7">
                <ul class="pagination">
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                </ul>
              </td>
            </tr>
          </tfoot>
        </table>
      {/* </div> */}
    </>
  )
}