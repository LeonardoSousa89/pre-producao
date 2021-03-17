import React ,{Component} from 'react'
import './auth.css'

import firebase from '../Db/db'
import {Navbar, Nav, Alert} from 'react-bootstrap'

import Rotate from '../../assets/rotate.gif'

export default class Auth extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          chave:'',
          senha:'',
          tabela:[],
          auth: false,
          rotate:false,
          logonFailed: false
        }
    
        this.login = this.login.bind(this)
        this.submeter = this.submeter.bind(this)
      }


      submeter = (e) =>{
         let admin = e.target.value
         let name  = e.target.name  

         this.setState({
             [name]:admin
         })
      }
    

      login = (e) =>{
         firebase.database()
                 .ref('auth')
                 .child('admin-1')
                 .on('value',(snapshot)=>{
                 let chaveBkd = snapshot.val().chave
                 let senhaBkd = snapshot.val().senha

                 let chave = this.state.chave
                 let senha = this.state.senha

                 if(chave === chaveBkd && senha === senhaBkd){
                    this.setState({
                        auth:true
                    })
                 }else{
                    console.log('Erro: chave e senha inválidos')
                    this.setState({
                        logonFailed:true
                    })
                 }
            })

            this.limpar()
            e.preventDefault()
      }
    
      limpar = () =>{
        this.setState({
            chave:'',
            senha:''
        })
      }
  
    //localhost:3000/auth-administration  

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

                                <input className="login-input"
                                        placeholder="insira sua chave"
                                        name="chave"
                                        type="password"
                                        value={this.state.chave}
                                        onChange={this.submeter}
                                        onMouseEnter={()=>this.setState({
                                            logonFailed:false
                                        })}></input>

                                <input className="login-input"
                                        placeholder="insira sua senha"
                                        name="senha"
                                        type="password"
                                        value={this.state.senha}
                                        onChange={this.submeter}
                                        onMouseEnter={()=>this.setState({
                                            logonFailed:false
                                        })}></input>

                                <button className="button" onClick={this.login}>logar</button>
                                <hr/>
                            </div>

                        </div>

                ):( 
                    
                        <div className="tabela">
                                <Navbar  className="navbar" collapseOnSelect expand="lg" bg="primary" variant="dark">
                                    <Navbar.Brand href="/auth-administration" className="maravilhas-little">Maravilhas do <strong>Século&copy;</strong></Navbar.Brand>
                                    <Navbar.Brand  className="adm"> <strong>Administração</strong></Navbar.Brand>
                                    <Navbar.Brand  className="logout" onClick={()=> this.setState({auth:false})}><strong>sair</strong></Navbar.Brand>
                                    <Nav.Link className="logout" onClick={()=> this.setState({auth:false})}>
                                    sair
                                    </Nav.Link>
                                </Navbar>
                        </div>
                )
            }


            {

                this.state.logonFailed === false ?
                (

                        []

                ):(

                        <div className="failed">
                            {/*
                            
                            [
                            'danger',
                            ].map((variant, idx) => (
                            <Alert key={idx} variant={variant}>
                                This is a {variant} alert—check it out!
                            </Alert>
                            ))
                            
                            */}

                        </div>

                )

            }


            <div className="rotatePhone">
                <h5>por favor, rotacione o seu aparelho!</h5>

                <img src={Rotate}/>
            </div>


            </div>
        )
    }
}


{/**

    falta criar a tabela e renderiza-lá e pôr a 
    caixa de erro ao logar!

*/}