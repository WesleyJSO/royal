import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import Section from '../components/Section'
import Logon from '../pages/Logon'
import Sales from '../pages/Sales'
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
          <Switch>
            <div className="main-page">
              <Route path="/painel-geral" component={Home} />
              <Route path="/" exact component={Logon} />
              <Route path="/Sales" component={Sales} />

              <Route path="/clientes" component={ClientList} />
              <Route path="/cadastro-cliente" component={Client} />
            </div>
          </Switch>
        </div>
      </Router>
    </>
  ) 
}