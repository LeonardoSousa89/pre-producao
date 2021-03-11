import React, {Component} from 'react'
import './home.css'

/**desinstalar depois */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust,faIcons } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/fontawesome-svg-core'
/**desinstalar depois */

import {FaInstagram, FaFacebookSquare, FaLinkedin, FaPhone} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'


import Slider from './slide'

import Squeeze from '../../assets/squeeze_timol.jpeg'
import Cards from './card'

import Footer from '../footer/footer'




export default class Header extends Component{

    


    render(){
        return(
            <div>
                {/** computadores,tablets,tvs,notebooks */}
               <div className="homeLargeDeviceComponent">
                  <Slider />

                 {/** 
                  * <div className="headerAnimation">
                        <h4>animação</h4>
                    </div>
                 */} 
                  
                  <div className="cardPromotion">
                        <div className="card1">
                            <Cards 
                                url={Squeeze}
                                description="Toph +"

                            />
                        </div>
                        <div className="card2">
                            <Cards 
                                    url={Squeeze}
                                    description="Sylocimol-mini"
                                />
                        </div>
                        <div className="card3">
                            <Cards 
                                    url={Squeeze}
                                    description="combo-sylocimol"
                                />
                        </div>
                        <div className="card4">
                            <Cards 
                                    url={Squeeze}
                                    description="product"
                                />
                        </div>

                    </div>
                </div>

                        <div className="footerHome">
                                <div className="socialComponentFooterHome">
                                    <h5>Acessem nossas redes <strong>Sociais</strong></h5>

                                   <a href="https://www.instagram.com" target="blank">
                                        <FaInstagram />
                                   </a>

                                    <a href="https://www.facebook.com" target="blank">
                                        <FaFacebookSquare />
                                    </a>

                                    <a href="https://www.linkedin.com" target="blank">
                                        <FaLinkedin />
                                    </a>
                                </div>

                                <div className="contatoComponentFooterHome">
                                        <h3 className="title">
                                            contato
                                        </h3>

                                        <i><FaPhone className="phoneComponentHome"/><strong className="content">(71) 99198-8733</strong></i>
                                        <i><GrMail  className="mailComponentHome"/><strong  className="content">maravilhasdoseculoxx@gmail.com</strong></i>                                                            
                               
                                </div>
                        </div>

                {/** celulares,smart-watch */}
               <div className="homeLittleDeviceComponent">
                   <Slider />

                            
                            
                            {/**inserir o card em display flex aqui */}

                      
                      
                      <div className="footerHomeLittleDeviceComponent">
                                <div className="socialLittleDeviceComponentFooterHome">
                                    <h5>Acessem nossas redes <strong>Sociais</strong></h5>

                                   <a href="https://www.instagram.com" target="blank">
                                        <FaInstagram />
                                   </a>

                                    <a href="https://www.facebook.com" target="blank">
                                        <FaFacebookSquare />
                                    </a>

                                    <a href="https://www.linkedin.com" target="blank">
                                        <FaLinkedin />
                                    </a>
                                </div>

                                <div className="contatoLittleDeviceComponentFooterHome">
                                        <h3 className="titleLittleDevicesComponent">
                                            contato
                                        </h3>

                                        <i><FaPhone className="phoneLittleDeviceComponentHome"/><strong className="content">(71) 99198-8733</strong></i>
                                        <i><GrMail  className="mailLittleDeviceComponentHome"/><strong  className="content">javandjsantos@gmail.com</strong></i>                                                            
                               
                                </div>
                        </div>
                   

               </div>  

                <Footer 
                    copy="&copy; Maravilhas do século e todos os seus direitos reservados." />
            </div>
        )
    }
}

