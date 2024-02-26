import TopBar from '../topbar/topbar';
import './teddy.css';
import Days from '../days/days';
import DataService from '../services/dataservice';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import teddyday from '../../resources/teddyday.jpg';

function Teddy(){

    const navigate = useNavigate();

    const [message, setMessage]=useState(sessionStorage.getItem("teddy"));
    useEffect(()=>{
        navigate('/teddy');
    },[message,navigate]);

    var input=document.getElementById("hint3");
    if (input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                var submitBtn = document.getElementById("submit-btn3");
                
                if (submitBtn) {
                    submitBtn.click();
                }
            }
        });
    }

    async function action(){
        let url='/code/'+document.getElementById("hint3").value;
        await DataService.get(url)
        .then((res)=>{
            if(res.data){
                setMessage(true);
                sessionStorage.setItem("teddy",true);
            }
            else{
                setMessage(false);
                sessionStorage.removeItem("teddy");
            }
        })
        .catch((error)=>console.log(error));

    }
    return (
        <div className='background'>
                <Days text={"Happy Teddy Day"}/>
                <div className='image-container'>
                <div className='input-container'>
                        <input type='password' id="hint3" placeholder="Enter the hint here" className='input-tag'></input>
                        <button className='button-tag' id='submit-btn3' onClick={action}>Next</button>
                    </div>
                    {message &&
                        <img className='image-body' src={teddyday}></img>
                    }
            </div>
        </div>
    );
}

export default Teddy;