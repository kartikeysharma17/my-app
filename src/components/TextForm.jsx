import React, { useState } from 'react'
export default function TextForm(props) {
  const [text, setText] = useState('');
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleDownClick = () => {
    let anotherText = text.toLowerCase();
    setText(anotherText);
    props.showAlert("Converted to lowercase","success");

  }
  const handleclearClick = () => {
    let thirdText = '';
    setText(thirdText);
    props.showAlert("Text is cleared","success");
  }
  const handlecopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied","success");
 }
   const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text}  onChange={handleOnChange} placeholder='Enter your text here' id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-danger mx-1" onClick={handleUpClick} >convert to uppercase</button>
        <button className="btn btn-info mx-1" onClick={handleDownClick}>convert to lowercase</button>
        <button className="btn btn-warning mx-1" onClick={handleclearClick} >clear text</button>
        <button className="btn btn-success mx-1" onClick={handlecopyClick} >copy text</button>



      </div>
      <div className="container my-3" >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

      </div>
    </>
  )
}
