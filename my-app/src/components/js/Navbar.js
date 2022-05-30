import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
                <a className="navbar-brand" href="/">{props.title}</a>
            {/*https://reactjs.org/docs/components-and-props.html  you check about the porps in this lin */} 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"> {props.text} </a>
                        </li>
                    </ul>
                    <div class="custom-control custom-switch ml-3">
                        <input type="checkbox" class="custom-control-input" id="customSwitches"/>
                            <label class="custom-control-label" for="customSwitches"></label>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes ={ 
    title: PropTypes.string.isRequired, // is required mean you have enter any value 
    text: PropTypes.string    
    // https://reactjs.org/docs/components-and-props.htmlhttps://reactjs.org/docs/components-and-props.htmlhttps://reactjs.org/docs/components-and-props.html
    // you can check more about protypes on above link 
}
Navbar.defaultProps ={
    title: "enter title here",
    text:" enter any page about blog "
}