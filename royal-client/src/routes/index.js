import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import Section from '../components/Section'
import Logon from '../pages/Logon'
import Sales from '../pages/Sales'
import SalesList from '../pages/Sales/list'
import Client from '../pages/Client'
import ClientList from '../pages/Client/list'
import Home from '../pages/Home'

import './styles.css'

export default function Routes() {
  return (
    <>
      <Header />
      <Router>
        <div className="page">
          <Section />
          <div className="main-page">
            <Switch>
              <Route path="/" exact component={Logon} />
              <Route path="/painel-geral" component={Home} />
              <Route path="/vendas" component={SalesList} />
              <Route path="/cadastro-venda/:clientId" component={Sales} />

              <Route path="/clientes" component={ClientList} />
              <Route path="/cadastro-cliente/:id" component={Client} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  ) 
}