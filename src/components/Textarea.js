import React, { useState } from 'react'

let btnName1 = 'Upper Case';

export default function Twextarea(props) {

    const [text, setText] = useState('')

    const changeToUppercase = () => {
        if (btnName1 === 'Upper Case') {
            setText(text.toUpperCase())
            btnName1 = 'Lower Case'
        } else if (btnName1 === 'Lower Case') {
            setText(text.toLowerCase())
            btnName1 = 'Upper Case'
        }
    }

    const changeToCapetalize = () => {

        // let check=text.match(/\b(\w)/g).map(value  => value[0].toUpperCase()+value.slice(1)).join(' ')

        const check = text.split(' ').map(value  => value[0].toUpperCase()+value.slice(1)).join(' ')
        setText(check)
        // const arr = "moiz khanzada i am developer";
        // const value = arr.split(" ").map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
        // console.log(value);
        

        // for (var i = 0; i<check.length; i++) {
        //     check[i].toUpperCase()
            console.log(check);
        // }

        // console.log();
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
                <button style={{ width: "20%" }} onClick={changeToUppercase} className='btn btn-outline-dark text-light bg-dark my-3'>{btnName1} </button>
                <button style={{ width: "20%" }} onClick={changeToCapetalize} className='btn btn-outline-dark text-light bg-dark my-3 mx-5'>Capatilize </button>
                <button style={{ width: "20%" }} onClick={clearAllData} className='btn btn-outline-dark text-light bg-dark my-3 mx-5'>Clear data </button>
            </div>
            <div className='container text-center pt-5'>
                <h3>here is {text.length} characters and {text.split(" ").length - 1} words.</h3>
                <h3>{text.split(" ").length - 1} word take's {0.008 * 60 * (text.split(" ").length - 1)} second</h3>
                <h1>Preview</h1>
                <p style={{ width: "70%", margin: "0px auto" }} className="my-3 text-right">{text}</p>
            </div>
        </>
    )
}
