import React from 'react'
import './about.css'

export default function ClientPost(props){
    return(
        <>
            <img 
            className="profilepost"
            src={props.profileClient} />
            <h4 className="clientname">{props.clientName}</h4>
            <p className="clientargs">{props.clientArgs}</p>
        </>
    )
} 