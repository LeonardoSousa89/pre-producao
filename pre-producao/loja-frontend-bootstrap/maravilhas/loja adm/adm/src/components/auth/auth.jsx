import React ,{Component} from 'react'
import './auth.css'

import firebase from '../Db/db'

import {Navbar, Nav} from 'react-bootstrap'

export default class Auth extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          chave:'',
          senha:'',
          tabela:[],
          auth: false
        }
    
        this.login = this.login.bind(this)
        this.sair  = this.sair.bind(this)
      }
    
      login = () =>{
    
      }
    
      sair = () =>{
    
      }

    render(){
        return(
            <div className="auth">
            {
              this.state.auth === false ? 
              (
                <div>
                    <Navbar  className="navbar" collapseOnSelect expand="lg" bg="primary" variant="dark">
                        <Navbar.Brand href="/auth-administration" className="maravilhas-little">Maravilhas do <strong>Século&copy;</strong></Navbar.Brand>
                        <Navbar.Brand  className="adm"> <strong>Administração</strong></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </Navbar>
                
                     <h1>Login</h1>
                </div>
              ):(
                <div>
                    <Navbar  className="navbar" collapseOnSelect expand="lg" bg="primary" variant="dark">
                        <Navbar.Brand href="/auth-administration" className="maravilhas-little">Maravilhas do <strong>Século&copy;</strong></Navbar.Brand>
                        <Navbar.Brand  className="adm"> <strong>Administração</strong></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link className="sair" onClick={() => this.setState({auth:false})}>sair</Nav.Link>   
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                        
                    <h1>Tabela</h1>
                </div>
              )
            }
          </div>
        )
    }
}