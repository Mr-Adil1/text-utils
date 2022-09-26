import React, { useState } from "react";
const TextForm = (props) => {
  // convert to uppercase
  const ConvUP = (e) => {
    let newtxt = text.toUpperCase();
    setText(newtxt);
    if (text) {
      props.showAlert("Converted to uppercase!", "success");
    } else {
      props.showAlert("You have to write som text!", "danger");
    }
  };
  // convert to Lowercase
  const Convlo = (e) => {
    let newtxt = text.toLowerCase();
    setText(newtxt);
    if (text) {
      props.showAlert("Converted to LowerCase!", "success");
    } else {
      props.showAlert("You have to write som text!", "danger");
    }
  };
  // toggle case
  const togglecase = () => {
    let low = text.toLowerCase();
    if (text === low) {
      setText(text.toUpperCase());
    } else {
      setText(text.toLowerCase());
    }
  };
  //Capitalize
  const Capitalize = () => {
    let capital = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
    let word = text.split(" ").map(capital);
    let newtxt = word.join(" ");
    setText(newtxt);
    if(text){
    props.showAlert("Successfully Capitalize", "success");
    }else{
      props.showAlert("You have to write som text!", "danger");
    }
  };
  //remove extra spaces
  const remspace = () => {
    const newtext = text.split(/[  ]+/).join(" ");
    setText(newtext);
    if(text){
    props.showAlert("Removed extra spaces", "success");
    }else{
      props.showAlert("You have to write som text!", "danger");
    }
  };
  //clear
  const clear = () => {
    setText("");
    if(text){
    props.showAlert("Cleared", "success");
    }else{
      props.showAlert("You have to write som text!", "danger");
    }
  };
  //Copy
  const copy = () => {
    navigator.clipboard.writeText(text);
    if(text){
      props.showAlert("Copied", "success");
    }else{
      props.showAlert("You have to write som text!", "danger");
    }
  };
  //add to list
  // const [list, setlist] = useState()
  // const addlist = () => {
  //     setlist(text)
  // }
  // func for typing in textarea
  const Changefun = (event) => {
    console.log("onchange was colled");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("hello its change");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h5>{props.heading}</h5>
          <textarea
            className="form-control"
            onChange={Changefun}
            id="mybox"
            value={text}
            rows="8"
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button className="btn btn-dark btn-sm mx-2 mt-3" onClick={ConvUP}>
          Upper case
        </button>
        <button className="btn btn-dark btn-sm mx-2 mt-3" onClick={Convlo}>
          Lower case
        </button>
        <button className="btn btn-dark btn-sm mx-2 mt-3" onClick={togglecase}>
          Toggle Case
        </button>
        <button className="btn btn-dark btn-sm mx-2 mt-3" onClick={Capitalize}>
          Capitalize
        </button>
        <button className="btn btn-dark btn-sm mx-2 mt-3" onClick={remspace}>
          Remove extra space
        </button>
        <button className="btn btn-dark btn-sm mx-2 mt-3" onClick={clear}>
          Clear
        </button>
        <button className="btn btn-dark btn-sm mx-2 mt-3" onClick={copy}>
          Copy
        </button>
        {/* <button className="btn btn-dark btn-sm mx-2 mt-3" onClick={addlist}>
          Add to list
        </button> */}
      </div>
      <div className={`container my-4`}>
        <div className="row">
          <div className="col-6">
            <h5>your text summary</h5>
            <p>
              <b>{text.split("").length}</b> : Words and <b>{text.length}</b> :
              charactors
            </p>
            <b>{0.008 * text.split("").length} : Time to rede</b>
          </div>
          <div className="Preview col-6">
            <h3>Preview</h3>
            <p className="border border-secondary rounded overflow-scroll p-2">
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextForm;
