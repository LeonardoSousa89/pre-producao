import React, {Component} from 'react'
import './header.css'

import {Nav, Navbar} from 'react-bootstrap'

export default class Header extends Component{
    render(){
        return(
            <div>

                <div className="largeDeviceComponent">

                    <Nav   className="maravilha" 
                            bg="primary" 
                            variant="dark"
                            >
                            <Nav.Item>
                                <Nav.Link href="/"
                                    className="title-header"
                                >
                                Maravilhas do <strong>Século&copy;</strong> 
                                    
                                </Nav.Link>
                            </Nav.Item>
                   </Nav>



                <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link className="home" href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="about" href="/about">Sobre</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="form" href="/form">Formulário</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="loja" href="https://www.timol.com.br/direto_fabrica.aspx?ref=3080" target="blank">
                                Loja
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                </div>

                <div className="littleDeviceComponent">
                <Navbar  className="navbar" collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Navbar.Brand href="/" className="maravilhas-little">Maravilhas do <strong>Século&copy;</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link className="home-little" href="/">Home</Nav.Link>
                            <Nav.Link className="about-little" href="/about">Sobre</Nav.Link>
                            <Nav.Link className="form-little" href="/form">Formulário</Nav.Link>
                            <Nav.Link className="loja-little" href="https://www.timol.com.br/direto_fabrica.aspx?ref=3080" target="blank">Loja</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
                </div>
            </div>
        )
    }
}