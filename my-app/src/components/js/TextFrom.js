import React, { useState } from 'react';
// rfc 

export default function TextFrom(props) {
    const [text, setText] = useState("");

    const handleUpClick = () =>{
        // console.log("UPPERCASE IS CONVERTED" );
        let newText = text.toUpperCase();
        setText(newText );
    }
    const handleLoClick =() => {

        let newsText = text.toLowerCase();
        setText(newsText);
    }
    const handleUnderClick =() => {

        let underlineText = text.style.textDecoration = "underline";
        setText(underlineText);
    }
    const handleOnChange = (event) =>{
        // console.log("UPPERCASE IS CONVERTED" );
        setText(event.target.value);
    }

    return (
        <>
        <div className='container mt-5'>
            <h1>{props.h1}</h1>
            <div className='md-3'>
                <textarea className='from-control'  id="myBox" value={text} onChange={handleOnChange} cols="120" rows="5">
                </textarea>
                <button className='btn btn-primary' onClick={handleUpClick} > CONVERT INTO UPPERCASE</button>
                <button className='btn btn-primary mx-3' onClick={handleLoClick} > CONVERT INTO UPPERCASE</button>
                <button className='btn btn-primary mx-3' onClick={handleUnderClick} > TEXT UNDER LINE</button>
            </div>
        </div>
        <div className="container">
            <h1> you text summary</h1>
            <p>{text.split("").length} word and length(text.length) characters </p>
            <p>{0.008 *text.split("").length} characters</p>
            <h2> Preview</h2>
            <h3> {text}</h3>
        </div>
        </>
    )
}
