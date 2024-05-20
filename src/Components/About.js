import React from 'react'

export default function About(props) {

let myStyle ={

         color : props.mode === 'dark' ? 'white' : 'black',
         backgroundColor : props.mode === 'dark'? 'black' : 'white'

}
   
  return (
    <>
         <div className="container" >
         <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                   <strong> Anslyze your Text </strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count,charcter count.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body" >
                    TextUtils is a free chracter counter tool that provides instant character count & word count statistics for given text.TextUtils report the number of words and characters.Thus it is suitable for writing text with word character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                   <strong> Browser Compatible </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body">
                    This word counter software works in any browser such as chrome,firefox,Inernet Explorer, Safari,Opera. It suits to count character in facebook, blog , books, excel document, pdf document, essay etc.
                </div>
                </div>
            </div>
            </div>

         </div>
        
    </>
  )
}
