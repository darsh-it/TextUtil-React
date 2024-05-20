import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    //setText('New Text')// to update value of text

    const handleUpClick = ()=>{
        // console.log('Upercase was clicked');
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleUpSecondClick = ()=>{
        
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowertext","success")
    }
    const handleUpThirdClick = ()=>{
        let newText = '';
        setText(newText)
    }
    const handleUpFifthClick = ()=>{
        let newText = text.replace(/\s{2,}/g, ' ').trim();
        setText(newText)
    }

    const handleUpFourthClick = () =>{
   
        navigator.clipboard.writeText(text);
      
        props.showAlert(`Copied text : ${text}`,"success")
    }

    const handleOnChange = (event)=>{
        // console.log('on change');
        setText(event.target.value)
    }

  return (
    <>
    <div className='container'>
          <div className="mb-3">
          <h1> <label htmlFor="myBox" className='Form-label'>{props.heading}</label></h1>
           <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
           <button className="btn btn-primary mx-2 my-1" disabled = {text.length === 0} onClick={handleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-primary mx-2 my-1" disabled = {text.length === 0} onClick={handleUpSecondClick}>Convert to Lowercase</button>
           <button className="btn btn-primary mx-2 my-1" disabled = {text.length === 0} onClick={handleUpFifthClick}>Remove extra space</button>
           <button className="btn btn-primary mx-2 my-1" disabled = {text.length === 0} onClick={handleUpFourthClick}>Copy the text</button>
           <button className="btn btn-primary mx-2 my-1" disabled = {text.length === 0} onClick={handleUpThirdClick}>Clear</button>
          </div>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((a)=> a.length !== 0).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").filter((a)=>a.length!==0).length} minutes Read </p>
        <h1>Preview</h1>
        <p>{text.length >0 ?text:'Nothing to Preview'}</p>
    </div>
    </>
  )
}
