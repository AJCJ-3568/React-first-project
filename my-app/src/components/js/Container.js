
import React  from 'react'
import "../css/Container.css"
import CJ from "../Image/CjWebsite.png"
// import { useState } from "react"


export default function Container(props) {
    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col">
                    <h1 className="container-header">
                    {props.ContainerH}
                    </h1>
                    <br />
                    <br />
                    <p className='container-p'>
                    {props.ContainerP} 
                    </p>
                </div>
                <div className='row'>
                    <div className='col-10'>
                        <img className= 'container-img img'  src={CJ} alt="cj " />
                    </div>
                </div>
            </div>
        </div>
        )
}
 

