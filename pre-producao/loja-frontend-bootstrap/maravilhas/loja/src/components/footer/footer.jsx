import React from 'react'
import './footer.css'

export default function Footer(props){
    return(
                <div className="copy">
                    <strong>{props.copy}</strong>
                </div>
    )
}