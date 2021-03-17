import React ,{Component} from 'react'
import './auth.css'

import firebase from '../Db/db'
import {Navbar, Nav, Card} from 'react-bootstrap'

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
          logonFailed: false,
          informative:false
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
  

    render(){
        return(
            <div className="auth">
                 {                  //alterar para false após teminar a tabela
                    this.state.auth === true ?
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

                                <p className="boas-vindas">
                                    <h3>Sejam Bem-Vindos!</h3>
                                    <br/>
                                    Para ajudá - los em sua atividades,
                                    organizei links<br/>
                                    para mantê-los informados a respeito de legislação,<br/>
                                    manual do banco de dados e artigos de narketing <br/>que contribuirão
                                    com o sucesso de seu trabalho!
                                    <br/>
                                    <br />
                                    <hr/>
                                    Para acessar o acervo de informações basta clicar no icone de Info.
                                    </p>

                                {
                                        this.state.informative === false ?
                                        (

                                            <div className="info">
                                                <i  className="info-box"
                                                    onClick={()=>this.setState({
                                                        informative:true
                                                    })}
                                                >info</i>
                                            </div>
                                        ):(

                                            <div className="info-list">
                                                <i className="info-listed"
                                                    onClick={()=>this.setState({
                                                        informative:false
                                                    })}
                                                > &lt; 
                                                </i>
                                                <ul className="listed-links">
                                                        <ul className="link">
                                                            <a href="https://www.gov.br/defesa/pt-br/acesso-a-informacao/lei-geral-de-protecao-de-dados-pessoais-lgpd"
                                                               target="blank">
                                                                LGPD</a></ul>
                                                        <ul className="link">
                                                            <a href="https://firebase.google.com/docs?hl=pt-br"
                                                               target="blank">
                                                                Firebase doc
                                                                </a></ul>
                                                        <ul className="link">
                                                            <a href="https://blog.hotmart.com/pt-br/o-que-e-marketing-digital/"
                                                               target="blank">
                                                                Marketing Digital
                                                                </a></ul>
                                                        <ul className="link">
                                                            <a href="https://www.udemy.com/home/my-courses/learning/"
                                                               target="blank">
                                                                Cursos
                                                                </a></ul>
                                                    </ul>
                                            </div>

                                        )
                                }

                                <div className="area-administrativa">
                                    <h4 className="titulo-tabela">Tabela</h4>
                                </div>


                        </div>
                )
            }


            {

                this.state.logonFailed === false ?
                (

                        []

                ):(

                        <div className="failed">
                           <Card body
                           className="cardError"
                           >Erro ao logar! por favor verifique sua chave de administrador e a senha!</Card>
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