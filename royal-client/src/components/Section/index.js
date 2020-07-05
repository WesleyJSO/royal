import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import './styles.css'

export default function Section() {

  const [loggedIn] = useState(false)

  return (
    <section>
      <nav>
        {!loggedIn && (
          <NavLink exact className="link" activeClassName="link link-active" to="/painel-geral">Painel Geral</NavLink>
        )}
        <NavLink className="link" activeClassName="link link-active" to="/clientes">Clientes</NavLink>
        <NavLink className="link" activeClassName="link link-active" to="/vendas">Vendas</NavLink>
        <NavLink className="link" activeClassName="link link-active" to="/recebimentos">Recebimentos</NavLink>
        <NavLink className="link" activeClassName="link link-active" to="/relatorios">Relatórios</NavLink>
        {loggedIn && (
          <NavLink className="link" activeClassName="link link-active" to="/sair">Sair</NavLink>
        )}
      </nav>
    </section>
  )
}