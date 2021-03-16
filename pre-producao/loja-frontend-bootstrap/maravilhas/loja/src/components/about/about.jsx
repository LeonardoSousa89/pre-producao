import React, {Component} from 'react'
import './about.css'

import Footer from '../footer/footer'
import Post from './clientPost'

import Avatar from '../../assets/profile.jpg'
import Client from '../../assets/client.png'

export default class About extends Component{
    render(){
        return(
            <div>
                <div className="largeDeviceAboutComponent">
                    <div className="banner">
                            <div className="insideBanner">
                                <div className="area1">
                                    <stong>
                                        Nós somos uma empresa dedicada
                                        a proporcioná-los uma melhor,
                                        experiência em qualidade de vida!
                                        <br />
                                        O grupo <i>Timol&reg;</i>,
                                        veio para nos fornecer o melhor 
                                        de um produto necessário a nossa existência,
                                        a água.
                                    </stong>
                                </div>
                                <div className="area2">
                                        <h5 className="quem">&ldquo;Quem?&rdquo;</h5> 
                                        <h5 className="somos">&ldquo;Somos&rdquo;</h5>
                                </div>
                                <div className="area3">
                                    As soluções que te disponibilizamos,
                                    lhes trará mais satisfação e nutrição,
                                    em um elemento extremamente importante para a nossa
                                    vida, como seres-vivos.
                                </div>
                            </div>
                    </div>

                    <div className="titleClientsPost">
                            <h5>Apresentação</h5>
                      </div> 

                    <div className="apresentacao">
                                <img src={Avatar} 
                                className="avatar" />

                                <div className="euComponent">
                                    <h3> Olá eu sou <em>Javan Santos</em>. Vendedor dos produtos 
                                         do grupo <i>Timol&reg;</i> e principal representante
                                         do <strong>maravilhas do século&copy;</strong>, possuo pouco mais de 10
                                         anos de experiência com os produtos
                                         desta companhia e decidi ampliar este acervo
                                         tão rico que este grupo vem nos beneficiando
                                         a partir de suas pesquisas e resultados a respeito
                                         do uso de tais items.
                                    </h3>
                                </div>
                    </div>
                    <div className="missaoConteiner">
                            <ul className="missao">
                                <strong>missão:</strong>
                                Promover um produto que contribua com: uma boa saúde, satisfação e qualidade de vida! 
                            </ul>
                            <ul className="visao">
                                <strong>visão:</strong> 
                                contribuir para a construção de uma cultura mais saudável em nossos lares! 
                            </ul>
                            <ul className="valores">
                                <strong>valores:</strong> 
                                Ética, Qualidade e agilidade em nossos serviços! 
                            </ul>
                    </div>

                       <div className="titleClientsPost">
                            <h5>Alguns breves depoimentos de nossos clientes</h5>
                      </div> 

                    <div className="cardClientes">
                        <div className="firstClient">
                            <Post 
                                profileClient={Client}
                                clientName="Jacira"
                                clientArgs="
                                            &ldquo;Eu tive muitos beneficios 
                                            a partir da água modificada 
                                            magnéticamente mais citarei apenas duas situações:
                                            O primeiro foi a solução de um problema de 
                                            enchaqueca que eu possuia e min levou por vezes 
                                            a emergência. E o segundo eu sofria de
                                            prisão de ventre, que com o consumo constante destes
                                            produtos min ajudou a reverter meu quadro e devolver 
                                            minha saúde, com o consumo do Toph+ e o sylocimol
                                            e eu os recomendo fortemente!&rdquo;"  
                            />
                        </div>
                        <div className="secondClient">
                            <Post 
                                    profileClient={Client}
                                    clientName="Rita"
                                    clientArgs="
                                            &ldquo;Oi Javan eu gostaria de relatar os
                                            beneficios trazidos a min e alguns membros da minha familia, então
                                            eu citarei aqui alguns. Eu trabalhava com digitação 
                                            e acabei desenvolovendo a L.E.R e também eu possuia
                                            formigamento e dores nas pernas e após o consumo da água
                                            do silocymol eu consegui levar uma vida normal, minha filha
                                            teve problemas com prisão de ventre e somente com o consumo
                                            ela melhorou e viu os beneficios para a sua saúde!&rdquo;"
                                />
                        </div>
                    </div>
                </div>

                <div className="littleDeviceAboutComponent">
                <div className="bannerLittleDeviceComponent">
                            <div className="insideBannerLitteDeviceComponent">
                                <div className="area1Little">
                                    <stong>
                                        Nós somos uma empresa dedicada
                                        a proporcioná-los uma melhor,
                                        experiência em qualidade de vida!
                                        <br />
                                        O grupo <i>Timol&reg;</i>,
                                        veio para nos fornecer o melhor 
                                        de um produto necessário a nossa existência,
                                        a água.
                                    </stong>
                                </div>

                                <div className="area2Little">
                                        <h5 className="quemLittle">&ldquo;Quem?&rdquo;</h5> 
                                        <h5 className="somosLittle">&ldquo;Somos&rdquo;</h5>
                                </div>
                            </div>
                    </div>

                    <div className="titleClientsPost">
                            <h5>Apresentação</h5>
                      </div>


                     <div className="apresentacaoLittle">
                            <img src={Avatar} 
                            className="avatarLittle" />

                    <div className="euComponentLittle">
                            <h3> Olá eu sou <em>Javan Santos</em>. Vendedor dos produtos 
                                         do grupo <i>Timol&reg;</i> e principal representante
                                         do <strong>maravilhas do século&copy;</strong>, possuo pouco mais de 10
                                         anos de experiência com os produtos
                                         desta companhia e decidi ampliar este acervo
                                         tão rico que este grupo vem nos beneficiando
                                         a partir de suas pesquisas e resultados a respeito
                                         do uso de tais items.
                            </h3>
                    </div>
                    </div> 

                    <div className="missaoConteiner">
                            <ul className="missao">
                                <strong>missão:</strong>
                                Promover um produto que contribua com: uma boa saúde, satisfação e qualidade de vida! 
                            </ul>
                            <ul className="visao">
                                <strong>visão:</strong> 
                                contribuir para a construção de uma cultura mais saudável em nossos lares! 
                            </ul>
                            <ul className="valores">
                                <strong>valores:</strong> 
                                Ética, Qualidade e agilidade em nossos serviços! 
                            </ul>
                    </div>

                    <div className="titleClientsPost">
                            <h5>Alguns breves depoimentos de nossos clientes</h5>
                      </div> 

                    <div className="cardClientes">
                        <div className="firstClientLittle">
                            <Post 
                                profileClient={Client}
                                clientName="Jacira"
                                clientArgs="
                                            &ldquo;Eu tive muitos beneficios 
                                            a partir da água modificada 
                                            magnéticamente mais citarei apenas duas situações:
                                            O primeiro foi a solução de um problema de 
                                            enchaqueca que eu possuia e min levou por vezes 
                                            a emergência. E o segundo eu sofria de
                                            prisão de ventre, que com o consumo constante destes
                                            produtos min ajudou a reverter meu quadro e devolver 
                                            minha saúde, com o consumo do Toph+ e o sylocimol
                                            e eu os recomendo fortemente!&rdquo;"  
                            />
                        </div>
                        <div className="secondClientLittle">
                            <Post 
                                    profileClient={Client}
                                    clientName="Rita"
                                    clientArgs="
                                            &ldquo;Oi Javan eu gostaria de relatar os
                                            beneficios trazidos a min e alguns membros da minha familia, então
                                            eu citarei aqui alguns. Eu trabalhava com digitação 
                                            e acabei desenvolovendo a L.E.R e também eu possuia
                                            formigamento e dores nas pernas e após o consumo da água
                                            do silocymol eu consegui levar uma vida normal, minha filha
                                            teve problemas com prisão de ventre e somente com o consumo
                                            ela melhorou e viu os beneficios para a sua saúde!&rdquo;"
                                />
                        </div>
                    </div>

                </div>

                <Footer 
                  copy="&copy;
                  Maravilhas do século e todos os seus direitos reservados."
                />
            </div>
        )
    }
}
