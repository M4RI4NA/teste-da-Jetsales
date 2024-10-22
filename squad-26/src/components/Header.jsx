import React from 'react'
import './Header.css'
import rd from '../assets/logord.png'
const Header = () => {

  
    return (
      <>
       <div className="paddingconf">
    <h1 className="fontex"> CONFIGURAÇÃO DA EXTENSÃO PARA CRM</h1>
    <h3 className="fontix">
      Conecte sua extensão ao CRM usando um token de autenticação.
    </h3>
  </div>
  <br />
  <div>
    <img className="circ" src={rd} />
    <h1 className="rd">RD Station</h1>
    <br />
    <h1 className="rd"> Token de Autenticação:</h1>
    <input type="text" className="token" placeholder="Ex: #12345" />
    <br />
    <button className="salvar">Salvar Configuração</button>
  </div>
  
      </>
    )
  }
  
export default Header

