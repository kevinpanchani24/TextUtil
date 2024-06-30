import React, { useState } from 'react'



export default function (props) {


    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case","Success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lower case","Success");

    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("text are clear","Success");

    }


    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);

    }

    // for this you need to import useState
    const [text, setText] = useState("");
    


    return (
        <>
            <div className='container' style={{ color: props.mode==='dark'?'white':'black'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
               
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>clear text</button>


            </div>
            <div className='container my-2' style={{ color: props.mode==='dark'?'white':'black'}}>
                <h1> your text summry</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"enter something to preview it here"}</p>
            </div>
            
        </> 
    )
}
