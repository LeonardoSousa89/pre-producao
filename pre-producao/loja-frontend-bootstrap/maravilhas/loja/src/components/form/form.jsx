import React, {Component} from 'react'
import './form.css'

import { Form,
         Col,
         Button,
         Alert } from 'react-bootstrap'

//import SimpleReactValidator from 'simple-react-validator'
//import validator from 'email-validator'

import Footer from '../footer/footer'
import firebase from '../Db/db'

import Team from'../../assets/team-hand.jpg'
import Pdf from'../../assets/pdf.png'
import Pen from'../../assets/pencil.jpg'

export default class Formulary extends Component{
    constructor(props){
        super(props)

        this.state = {
                    nome:'',
                    email:'',
                    msg:'',
                    contentPdf : false,
                    contentArea:false,
                    url:''
                    }

                    this.enviar = this.enviar.bind(this)
                    this.limpar = this.limpar.bind(this)
            }
   
    

    enviar = (e) =>{
        let email = this.state.email   
       /**  falta validar o email  */
     if(
        email === null || !email)
     {
        this.setState({
            contentArea:true,
        })
     }   
     else 
     {
        let clientes =  firebase.database()
        .ref('clientes')
        let chave = clientes.push().key

        clientes.push(chave).set({
            nome:this.state.nome,
            email:this.state.email,
            msg:this.state.msg,
        })
        this.setState({
            contentPdf:true
        })

        this.limpar()
        e.preventDefault()
     }
    }



    limpar = () =>{
        this.setState({
            nome:'',
            email:'',
            msg:''
        })
    }

/*
link do google drive compartilhável:
https://drive.google.com/file/d/1Ej8BQW_DWS8xdJ4YBWWZC4AAk8NbVgNX/view?usp=sharing
*/
    render(){
        return(
            <div>
               <div className="formLargeDeviceComponent">

                <div className="formPosterComponent">
                    <img 
                        className="posterComponent"
                        src={Team} />
                </div>

                <div className="cardContractComponent">
                    <div className="contractComponent">
                            <div className="formContractDescription">
                                <strong>
                                    &ldquo; Nesta seção esperamos 
                                    a participação de vocês nossos,
                                    queridos clientes e visitantes,
                                    para contribuir com sua opinião a 
                                    respeito de nosso conteúdo!
                                    &rdquo;
                                    <hr className="division"/>
                                    <p className="noteSmall">Vocês também 
                                    ganham um <i>pdf&copy;</i> educativo
                                    a respeito de nosso conteúdo! 
                                    <br />
                                    <br />
                                    <br />
                                    basta cadastrar 
                                    o seu email!
                                    </p>
                                </strong>
                            </div>
                            <img src={Pen}
                            className="penContract" />
                    </div>
                </div>

                  

                   <div className="formComponent">
                        <h4>Formulário</h4>
                        <Form>

                        <Form.Control 
                            type="text"
                            placeholder="Insira seu nome."
                            value={this.state.nome}
                            onChange={(nome) =>
                                this.setState({nome:nome.target.value})}
                            onMouseEnter={() => this.setState({ contentArea:false})}
                            />
                            <br/>

                            <Form.Group 
                                controlId="formBasicEmail">
                                <Form.Control 
                                type="email"
                                placeholder="Insira um Email."
                                value={this.state.email}
                                onChange={(email) => this.setState({email:email.target.value})}
                                onMouseEnter={() => this.setState({ contentArea:false})}
                                 />
                                <Form.Text 
                                className="text-muted">
                                </Form.Text>
                            </Form.Group>



                        <Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Control
                                         size="lg"
                                         type="text"
                                         placeholder="Deixe seu comentário aqui."
                                         value={this.state.msg}
                                         onChange={(msg) => this.setState({msg:msg.target.value})}
                                         onMouseEnter={() => this.setState({ contentArea:false})}
                                         />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        
                        <div clssName="button">
                            <Button 
                                className="first"
                                variant="primary"
                                onClick={this.enviar}>Enviar</Button>

                            <Button 
                                className="second"
                                variant="warning"
                                onClick={this.limpar}>Limpar</Button>
                        </div>
                        </Form>
                    </div>


                {
                        

                        this.state.contentArea === false ? 
                        (
                                []


                            ):(

                            [
                              'danger',
                            ].map((variant, idx) => (
                              <Alert className="alt"
                                     key={idx} 
                                     variant={variant}>
                                  Erro: por favor insira um email válido! 
                              </Alert>
                            ))
                        )
                }

                   
                {
                         this.state.contentPdf === false ?
                         (

                                []

                         ):(

                                <div className="pdfComponent">
                                <a   href="https://drive.google.com/file/d/1Ej8BQW_DWS8xdJ4YBWWZC4AAk8NbVgNX/view?usp=sharing" 
                                    target="blank"
                                    onClick={() => this.setState({
                                        contentPdf:false
                                    })}>
                                    <img  
                                        className="pdf"
                                        src={Pdf} />
                                </a>
                                </div>

                         )
                }
                    

               </div>




               <div className="formAdaptableDeviceComponent">
                    

                    <div className="formPosterComponent">
                    <img 
                        className="posterComponent"
                        src={Team} />
                </div>

                <div className="cardContractComponent">
                    <div className="contractComponent">
                            <div className="formContractDescription">
                                <strong>
                                    &ldquo; Nesta seção esperamos 
                                    a participação de vocês nossos,
                                    queridos clientes e visitantes,
                                    para contribuir com sua opinião a 
                                    respeito de nosso conteúdo!
                                    &rdquo;
                                    <hr className="division"/>
                                    <p className="noteSmall">Vocês também 
                                    ganham um <i>pdf&copy;</i> educativo
                                    a respeito de nosso conteúdo!
                                    <br />
                                    <br />
                                    <br />
                                    basta cadastrar 
                                    o seu email!
                                    </p>
                                </strong>
                            </div>
                            <img src={Pen}
                            className="penContract" />
                    </div>
                </div>

                  

                   <div className="formComponent">
                        <h4>Formulário</h4>
                        <Form>

                        <Form.Control 
                            type="text"
                            placeholder="Insira seu nome."
                            value={this.state.nome}
                            onChange={(nome) =>
                                this.setState({nome:nome.target.value})}
                            onMouseEnter={() => this.setState({ contentArea:false})}
                            />
                            <br/>

                            <Form.Group 
                                controlId="formBasicEmail">
                                <Form.Control 
                                type="email"
                                placeholder="Insira um Email."
                                value={this.state.email}
                                onChange={(email) => this.setState({email:email.target.value})}
                                onMouseEnter={() => this.setState({ contentArea:false})}
                                 />
                                <Form.Text 
                                className="text-muted">
                                </Form.Text>
                            </Form.Group>



                        <Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Control
                                         size="lg"
                                         type="text"
                                         placeholder="Deixe seu comentário aqui."
                                         value={this.state.msg}
                                         onChange={(msg) => this.setState({msg:msg.target.value})}
                                         onMouseEnter={() => this.setState({ contentArea:false})}
                                         />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        
                        <div clssName="button">
                            <Button 
                                className="first"
                                variant="primary"
                                onClick={this.enviar}>Enviar</Button>

                            <Button 
                                className="second"
                                variant="warning"
                                onClick={this.limpar}>Limpar</Button>
                        </div>
                        </Form>
                    </div>


                {
                        

                        this.state.contentArea === false ? 
                        (
                                []


                            ):(

                            [
                              'danger',
                            ].map((variant, idx) => (
                              <Alert className="alt"
                                     key={idx} 
                                     variant={variant}>
                                  Erro: por favor insira um email válido! 
                              </Alert>
                            ))
                        )
                }

                   
                {
                         this.state.contentPdf === false ?
                         (

                                []

                         ):(

                                <div className="pdfComponent">
                                <a   href="https://drive.google.com/file/d/1Ej8BQW_DWS8xdJ4YBWWZC4AAk8NbVgNX/view?usp=sharing" 
                                    target="blank"
                                    onClick={() => this.setState({
                                        contentPdf:false
                                    })}>
                                    <img  
                                        className="pdf"
                                        src={Pdf} />
                                </a>
                                </div>

                         )
                }


               </div>

                    <Footer copy="&copy; Maravilhas do século e 
                            todos os seus direitos reservados."/>
            </div>
        )
    }
}


 