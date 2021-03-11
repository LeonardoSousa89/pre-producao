import React, {Component,useState} from 'react'
import './form.css'

export default class Form extends Component{

   


    render(){
        return(
            <div>
               <div className="formLargeDeviceComponent">
                    <h1>large</h1>
               </div>

               <div className="formLittleDeviceComponent">
                    <h1>little</h1>
               </div>      
            </div>
        )
    }
}


 