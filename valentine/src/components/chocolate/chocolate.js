import TopBar from '../topbar/topbar';
import './chocolate.css';
import Days from '../days/days';
import DataService from '../services/dataservice';
import { useState,useEffect } from 'react';
import chocolateday from '../../resources/chocolateday.jpg';
import { useNavigate } from 'react-router-dom';

function Chocolate(){

    const navigate = useNavigate();

    const [message, setMessage]=useState(sessionStorage.getItem("chocolate"));
    useEffect(()=>{
        navigate('/chocolate');

    },[message,navigate]);
    
    var input=document.getElementById("hint2");
    if (input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                var submitBtn = document.getElementById("submit-btn2");
                
                if (submitBtn) {
                    submitBtn.click();
                }
            }
        });
    }

    async function action(){
        let url='/translate/'+document.getElementById("hint2").value;
        await DataService.get(url)
        .then((res)=>{
            if(res.data){
                setMessage(true);
                sessionStorage.setItem("chocolate",true);
            }
            else{
                setMessage(false);
                sessionStorage.removeItem("chocolate");
            }
        })
        .catch((error)=>console.log(error));

    }
    return (
        <div className='background'>
                <Days text={"Happy Chocolate Day"}/>
                <div className='image-container'>
                    <div className='input-container'>
                        <input type='password' id="hint2" placeholder="Enter the hint here" className='input-tag'></input>
                        <button className='button-tag' id='submit-btn2' onClick={action}>Next</button>
                    </div>
                    {message &&
                        <img className='image-body' src={chocolateday}></img>
                    }
            </div>
        </div>
    );
}

export default Chocolate;