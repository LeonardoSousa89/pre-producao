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
import Sylocimol from '../../assets/sylocimol_mini.png'
import Toph from '../../assets/toph.jpg'
import Combo from '../../assets/combo.jpg'

import Cards from './card'

import Footer from '../footer/footer'




export default class Header extends Component{
  
    render(){
        return(
            <div>
               
               <div className="homeLargeDeviceComponent">
                  <Slider />
                  
                  <div className="cardPromotion">
                        <div className="card1">
                            <Cards 
                                url={Toph}
                                description="Toph +"
                                promotion="&ldquo;O Top H+ Infra Red  
                                           contém a Dolomita, um mineral rico em magnésio
                                           e cálcio que, em contato com a água, faz a liberação 
                                           desses minerais.&ldquo;"
                            />
                        </div>
                        <div className="card2">
                            <Cards 
                                    url={Sylocimol}
                                    description="Sylocimol-Mini"
                                    promotion="&ldquo;
                                                O mini sylocimol Infra Red Long,
                                                é fabricado com material resinado
                                                e imãs especiais que promovem a quebra da 
                                                resistência molecular da água.
                                               &rdquo;"
                                />
                        </div>
                        <div className="card3">
                            <Cards 
                                    url={Combo}
                                    description="Combo-Sylocimol"
                                    promotion="&ldquo;
                                               Em uma versão portátil e econômica
                                               a Timol traz dois de seus principais
                                               produtos miniaturizados:
                                               
                                               O Mini Sylocimol Infrared e o Mini
                                               Top H+ Infrared.
                                               &rdquo;"
                                />
                        </div>
                        <div className="card4">
                            <Cards 
                                    url={Squeeze}
                                    description="Squeeze"
                                    promotion="&ldquo;
                                              Squeeze de Polipropileno,
                                              material seguro para acondicionar alimentos.
                                              Quando aquecido não solta compostos químicos,
                                              como o antimônio e o bisfenol A, prejudiciais a saúde
                                              &rdquo;"
                                />
                        </div>

                    </div>
                </div>

                        <div className="footerHome">
                                <div className="socialComponentFooterHome">
                                    <h5>Acessem nossas redes <strong>Sociais!</strong></h5>

                                   <a href="https://instagram.com/javan_jsantos?igshid=1gzotvlrnvdr6" target="blank">
                                        <FaInstagram />
                                   </a>

                                    <a href=" https://www.facebook.com/javan.santos.5" target="blank">
                                        <FaFacebookSquare />
                                    </a>

                                    <a href="https://www.linkedin.com/in/javan-santos-9b2594209/" target="blank">
                                        <FaLinkedin />
                                    </a>
                                </div>

                                <div className="contatoComponentFooterHome">
                                        <h3 className="title">
                                            contato
                                        </h3>

                                        <i><FaPhone className="phoneComponentHome"/><strong className="content">(71) 99198-8733</strong></i>
                                        <i><GrMail  className="mailComponentHome"/><strong  className="content">maravilhasdoseculoxx@gmail.com</strong></i>                                                            
                                        <i><GrMail  className="mailComponentHome"/><strong  className="content">javandjsantos@gmail.com</strong></i> 
                               
                                </div>
                        </div>

               
               <div className="homeLittleDeviceComponent">
                   <Slider />

                            
                            
                            <div className="cardPromotionLittleDeviceComponent">
                                    <div className="card1LittleDeviceComponent">
                                    <Cards 
                                        url={Toph}
                                        description="Toph +"
                                        promotion="&ldquo;O Top H+ Infra Red  
                                                contém a Dolomita, um mineral rico em magnésio
                                                e cálcio que, em contato com a água, faz a liberação 
                                                desses minerais.&ldquo;"
                                    />
                                </div>
                                <div className="card2LittleDeviceComponent">
                                <Cards 
                                        url={Sylocimol}
                                        description="Sylocimol-Mini"
                                        promotion="&ldquo;
                                                    O mini sylocimol Infra Red Long,
                                                    é fabricado com material resinado
                                                    e imãs especiais que promovem a quebra da 
                                                    resistência molecular da água.
                                                &rdquo;"
                                    />
                            </div>
                            <div className="card3LittleDeviceComponent">
                            <Cards 
                                    url={Combo}
                                    description="Combo-Sylocimol"
                                    promotion="&ldquo;
                                               Em uma versão portátil e econômica
                                               a Timol traz dois de seus principais
                                               produtos miniaturizados:
                                               
                                               O Mini Sylocimol Infrared e o Mini
                                               Top H+ Infrared.
                                               &rdquo;"
                                />
                        </div>   
                        <div className="card4LittleDeviceComponent">
                            <Cards 
                                    url={Squeeze}
                                    description="Squeeze"
                                    promotion="&ldquo;
                                              Squeeze de Polipropileno,
                                              material seguro para acondicionar alimentos.
                                              Quando aquecido não solta compostos químicos,
                                              como o antimônio e o bisfenol A, prejudiciais a saúde
                                              &rdquo;"
                                />
                        </div>
                        </div>
                                <br/>
                                <br/>
                      
                      <div className="footerHomeLittleDeviceComponent">
                                <div className="socialLittleDeviceComponentFooterHome">
                                    <h5>Acessem nossas redes <strong>Sociais!</strong></h5>

                                   <a href="https://instagram.com/javan_jsantos?igshid=1gzotvlrnvdr6" target="blank">
                                        <FaInstagram />
                                   </a>

                                    <a href="https://instagram.com/javan_jsantos?igshid=1gzotvlrnvdr6" target="blank">
                                        <FaFacebookSquare />
                                    </a>

                                    <a href="https://www.linkedin.com/in/javan-santos-9b2594209/" target="blank">
                                        <FaLinkedin />
                                    </a>
                                </div>

                                <br/>
                                <br/>
                                <br/>

                                <div className="contatoLittleDeviceComponentFooterHome">
                                        <h4 className="titleLittleDevicesComponent">
                                            contato
                                            <hr />
                                        </h4>

                                        <i><FaPhone className="phoneLittleDeviceComponentHome"/><strong className="content">(71) 99198-8733</strong></i>
                                        <i><GrMail  className="mailLittleDeviceComponentHome"/><strong  className="content">maravilhasdoseculoxx@gmail.com</strong></i>    
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

