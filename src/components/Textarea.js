import React, { useState } from 'react'

let btnName1 = 'Convert To Upper Case';

export default function Twextarea(props) {

    const [text, setText] = useState('')

    const changeToUppercase = () => {
        if (btnName1 === 'Convert To Upper Case') {
            setText(text.toUpperCase())
            btnName1 = 'Convert To lower Case'
        } else if (btnName1 === 'Convert To lower Case') {
            setText(text.toLowerCase())
            btnName1 = 'Convert To Upper Case'
        }
    }

    const clearAllData = () => {
        setText("")
    }

    return (
        <>
            <div className='container text-center pt-5'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" value={text} onChange={(e) => { setText(e.target.value) }} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button onClick={changeToUppercase} className='btn btn-outline-dark text-light bg-dark my-3'>{btnName1} </button>
                <button onClick={clearAllData} className='btn btn-outline-dark text-light bg-dark my-3 mx-5'>Clear data </button>
            </div>
            <div className='container text-center pt-5'>
                <h3>here is {text.length} characters and {text.split(" ").length - 1} words</h3>
                <h1>Preview</h1>
                <p style={{ width: "70%" , margin: "0px auto"}}>{text}</p>
            </div>
        </>
    )
}
