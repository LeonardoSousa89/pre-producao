import React from 'react'
import './home.css'

export default function Cards(props) {
    return(
        <>
          
                <img
                className="ComponentCardpropsImg"
                src={props.url} /> 
                <h4 className="cardDescriptionComponent">{props.description}</h4> 
                <a className="anchor" href="https://www.timol.com.br/home.aspx" target="blank">
                        <div className="componentCardConteiner">{props.promotion}</div>
                </a>
        </>
    )
}