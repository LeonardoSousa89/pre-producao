import React from 'react'
import './home.css'

export default function Cards(props) {
    return(
        <>
            <img
            className="ComponentCardpropsImg"
            src={props.url} /> 
            <h4>{props.description}</h4> 
        </>
    )
}