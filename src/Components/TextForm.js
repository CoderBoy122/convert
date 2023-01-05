import React, { useState } from 'react';
// import {cpoyToClipboard} from 'react';


// console.log(useState('Enter text here2'))

export default function TextForm(props) {
 const handelUpClick = ()=> {
  console.log("Uppercase was Clicked" + text);
  let newText = text.toUpperCase();
  setText(newText);

 }

 const handelClearText = ()=> {
  console.log("Uppercase was Clicked" + text);
  let newText = '';
  setText(newText);

 }





 const  handelloClick  = ()=> {
  console.log("Uppercase was Clicked" + text);
  let newText = text.toLowerCase();
  setText(newText);}


 const handelOnCnamge= (event)=> {
  console.log("Target Achived");
  setText(event.target.value);
 }

//  const handleCopy = ()=>{
//   console.log("I m a copy");
//   let text = document.getElementById("mybox");
//   text.select();
//   navigator.clipboard.writeText(text.Value);
//   // setText(text.cpoyToClipboard);
//  }


 const handleExtraSpace = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
 }


  const [text, setText] = useState('');
  
// wrong way
// text = "new text"; 
// correct way
// setText =("new text") 

  return (
    <>
    <div>

<div className="mb-3 container" style={{color: props.mode=== 'dark'?'white': 'black'}} >

    <h1>{props.heading} </h1>
  <label for="My-Bpx" className="form-label">Your Thaughts</label>
  <textarea className="form-control" value= {text} onChange={handelOnCnamge} style={{backgroundColor: props.mode=== 'dark'?'grey': 'white', color:  props.mode=== 'dark'?'white': 'black' }} id="mybox" rows="10"></textarea>
</div>
   <button className="btn btn-dark mx-1" onClick={handelUpClick}>Convert To Uppercase</button>
   <button className="btn btn-dark mx-1" onClick={handelloClick}>Convert To Lowercase</button>
   <button className="btn btn-dark mx-1" onClick={handelClearText}>Clear Text</button>
   {/* <button className="btn btn-dark mx-1" onClick={handleCopy}>Copy Text</button> */}
   <button className="btn btn-dark mx-1 my-2" onClick={handleExtraSpace}>Extra Spaces</button>


    </div>

    <div className="container my-3"  style={{color: props.mode=== 'dark'?'white': 'black'}}>
      <h2>Your Text summery</h2>
      <p>{text.split(" ").length} words, {text.length} charecters</p>
      <p>{0.008 * text.split(" ").length} Minute</p>
      <h2>Priview</h2>
      <p>{text.length>0?text:"Enter your text into texbox to preview something"}</p>
    </div>
    </>
  );
}
