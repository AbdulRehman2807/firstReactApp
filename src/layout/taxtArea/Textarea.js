import React, { useState } from "react";

let btnName1 = "Upper Case";

export default function Twextarea(props) {
  const [text, setText] = useState("");

  const changeToUppercase = () => {
    if (btnName1 === "Upper Case") {
      setText(text.toUpperCase());
      btnName1 = "Lower Case";
    } else if (btnName1 === "Lower Case") {
      setText(text.toLowerCase());
      btnName1 = "Upper Case";
    }
  };
  const changeToCapetalize = () => {
    if (text === text.toLowerCase()) {
      if (text) {
        const check = text
          .split(" ")
          .map((value) => value[0].toUpperCase() + value.slice(1))
          .join(" ");
        setText(check);
      } else {
        alert("chek");
      }
    } else {
      const check = text
        .split(" ")
        .map((value) => value[0] + value.slice(1).toLowerCase())
        .join(" ");
      setText(check);
    }
  };
  const clearAllData = () => {
    setText("");
  };
  const removeExtraSpace = () => {
    const space = text.replace(/\s+/g," ")
    setText(space);
  };

  return (
    <>
      <div className="container text-center pt-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            required
            className="form-control"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          style={{ width: "20%" }}
          onClick={changeToUppercase}
          className="btn btn-outline-dark text-light bg-dark my-3"
        >
          {btnName1}{" "}
        </button>
        <button
          disabled={text.length === 0}
          style={{ width: "20%" }}
          onClick={changeToCapetalize}
          className="btn btn-outline-dark text-light bg-dark my-3 mx-5"
        >
          Capatilize{" "}
        </button>
        <button
          disabled={text.length === 0}
          style={{ width: "20%" }}
          onClick={clearAllData}
          className="btn btn-outline-dark text-light bg-dark my-3 "
        >
          Clear Data
        </button>
        <button
          disabled={text.length === 0}
          style={{ width: "20%" }}
          onClick={removeExtraSpace}
          className="btn btn-outline-dark text-light bg-dark my-3 mx-5"
        >
          Remove Extra Space
        </button>
      </div>
      <div className="container text-center pt-5">
        <h3>
          Here is {text.length} characters and{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words.
        </h3>
        <h3>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          word take's {(0.008 * 60 * text.length).toFixed(2)} second
        </h3>
        <h1>{ text.length !== 0 ?"Preview":"Nothing To Preview"}</h1>
        <p
          style={{ width: "70%", margin: "0px auto" }}
          className="my-3 text-right"
        >
          {text}
        </p>
      </div>
    </>
  );
}
