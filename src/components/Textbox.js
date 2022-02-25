
import React, { useState } from 'react'

export default function Textbox(props) {

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
        if (text.length === 0) {
            props.showalert("Please Enter Text!", "warning");
        }
        else {

           
        }

    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
        if (text.length === 0) {
            props.showalert("Please Enter Text!", "warning");
        }
        else {
            
        }
    }
    const handleclearClick = () => {
        let newtext = "";
        settext(newtext);
      


    }
    const handlefirstupClick = () => {
        let newtext = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        settext(newtext);
       
    }
    const handlecopyClick = () => {
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to clipbord!!", "success");

    }
    const handleOnChange = (event) => {
        settext(event.target.value);
    }


    const [text, settext] = useState("");
    return (
        <>
            

            <div className={`container my-3 text-${props.mode === 'dark' ? "light" : 'dark'}`}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea  className="form-control" id="mybox" rows="8" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'dark' ? "white" : 'black' }} onChange={handleOnChange} placeholder="Enter text here..."></textarea>
                </div>
                <button type="button" onClick={handleUpClick} className={`btn btn-${props.mode === 'dark' ? "light" : 'dark'} mx-1 my-1`}>Convert to Uppercase</button>
                <button type="button" onClick={handleLoClick} className={`btn btn-${props.mode === 'dark' ? "light" : 'dark'} mx-1 my-1`}>Convert to Lowercase</button>
                <button type="button" onClick={handlefirstupClick} className={`btn btn-${props.mode === 'dark' ? "light" : 'dark'} mx-1 my-1`}>Sentence</button>
                <button type="button" onClick={handlecopyClick} className={`btn btn-${props.mode === 'dark' ? "light" : 'dark'} mx-1 my-1`}>Copy text</button>
                <button disabled={text.length===0} type="button" onClick={handleclearClick} className={`btn btn-${props.mode === 'dark' ? "light" : 'dark'} mx-1 my-1`}>Clear Text</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'dark' ? "light" : 'dark'}`}>
                <h1>Text summury</h1>   
                <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <h2>preview</h2>
                <p>{text}</p>
            </div>
            
        </>
    )
}
