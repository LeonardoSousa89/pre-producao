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
                    
                    <div className="login">
                    <Navbar  className="navbar" collapseOnSelect expand="lg" bg="primary" variant="dark">
                        <Navbar.Brand href="/auth-administration" className="maravilhas-little">Maravilhas do <strong>Século&copy;</strong></Navbar.Brand>
                        <Navbar.Brand  className="adm"> <strong>Administração</strong></Navbar.Brand>
                    </Navbar>
                
                    <div className="card-login">
                        <strong className="login-text">Login</strong>
                        <input className="login-input"></input>
                        <input className="login-input"></input>
                        <button className="button" onClick={()=> this.setState({auth:true})}>logar</button>
                        <hr/>
                    </div>

                    </div>


                ):( 
                    

                        <div className="tabela">
                        <Navbar  className="navbar" collapseOnSelect expand="lg" bg="primary" variant="dark">
                            <Navbar.Brand href="/auth-administration" className="maravilhas-little">Maravilhas do <strong>Século&copy;</strong></Navbar.Brand>
                            <Navbar.Brand  className="adm"> <strong>Administração</strong></Navbar.Brand>
                            <Navbar.Brand  className="logout" onClick={()=> this.setState({auth:false})}><strong>sair</strong></Navbar.Brand>
                        </Navbar>
                        </div>
            )
          }
            </div>
        )
    }
}