import TopBar from '../topbar/topbar';
import './kiss.css';
import Days from '../days/days';
import DataService from '../services/dataservice';
import { useState,useEffect } from 'react';
import kissday from '../../resources/kissday.jpg';
import image from '../../resources/image.jpg';
import { useNavigate } from 'react-router-dom';

function Kiss(){

    const navigate = useNavigate();
    console.log(localStorage.getItem("kiss"));
    const [message, setMessage]=useState(localStorage.getItem("kiss"));
    const [msg, setMsg]=useState(localStorage.getItem("input"));

    useEffect(()=>{
        navigate('/kiss');

    },[message,navigate,msg]);

    var input=document.getElementById("hint6");
    if (input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                var submitBtn = document.getElementById("submit-btn6");
                
                if (submitBtn) {
                    submitBtn.click();
                }
            }
        });
    }

    async function action(){
        let url='/logic/'+document.getElementById("hint6").value;
        await DataService.get(url)
        .then((res)=>{
            if(res.data){
                setMessage(true);
                localStorage.setItem("kiss",true);
            }
            else{
                setMessage(false);
                localStorage.removeItem("kiss");
            }
        })
        .catch((error)=>console.log(error));

        let url1='/input/'+document.getElementById("hint6").value;
        await DataService.get(url1)
        .then((res)=>{
            if(res.data){
                setMsg(true);
                localStorage.setItem("input",true);
            }
            else{
                setMsg(false);
                localStorage.removeItem("input");
            }
        })
        .catch((error)=>console.log(error));
    }
    return (
        <div className='background'>
                <Days text={"Happy Kiss Day"}/>
                <div className='image-container'>
                    <div className='input-container'>
                        <input type='password' id="hint6" placeholder="Enter the hint here" className='input-tag'></input>
                        <button className='button-tag' id='submit-btn6' onClick={action}>Next</button>
                    </div>
                    {message &&
                        <img className='image-body' src={kissday}></img>
                    }
                    {msg  &&
                        <img className='image-body' src={image}></img>
                    }
                </div>
        </div>
    );
}

export default Kiss;