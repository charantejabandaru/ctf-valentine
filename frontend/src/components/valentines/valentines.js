import './valentines.css';
import dotenv from 'react-dotenv';
import { useState,useEffect } from "react";
import flag from '../../resources/flag.jpg';

function Valentines() {

    const [message, setMessage]=useState(sessionStorage.getItem("flag"));
    const [display,setDisplay]=useState(false);
    const [count, setCount]=useState(1);
     useEffect(()=>{},[message,display]);

    var input=document.getElementById("flag");
    if (input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                var submitBtn = document.getElementById("submit-btn");
                
                if (submitBtn) {
                    submitBtn.click();
                }
            }
        });
    }

    function action(){
        if(document.getElementById("flag").value==process.env.REACT_APP_FLAG){
            setMessage(true);
            sessionStorage.setItem("flag",true);
        }
        else{
            setMessage(false);
            setDisplay(true);
            sessionStorage.removeItem("flag");
        }
    }

    function alertBox(){
        setDisplay(false);
    }
    return (
        <div className="valentine-container">
            <div className="navbar">
                <input type='password' id="flag" className="input-tag" placeholder="search here"></input>
                <button style={{padding:0, width:60, height:30, margin:10}} id='submit-btn' onClick={action}>Search</button>
            </div>
            {display &&
                <div className="alert-container">
                    <div className="alert-box">
                        <h3>The input doesn't match</h3>
                        <button className="btn" onClick={alertBox}>OK</button>
                    </div>
                </div>
            }
            {message &&
                    <img className='image-body' src={flag}></img>
            }
        </div>
    );
}

export default Valentines;
