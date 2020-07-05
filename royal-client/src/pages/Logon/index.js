
import React from 'react'

import './styles.css'

export default function Logon() {
  return (
    <>
      <div className="card">
        <form>
          <div className="field">
            <label for="name">Nome</label>
            <input id="name" />
          </div>
          <div className="field">
            <label for="password">Senha</label>
            <input id="password" type="password"/>
          </div>
          <div>
            <button className="btn-info">Entrar</button>
          </div>
        </form>
      </div>
    </>
  )
}