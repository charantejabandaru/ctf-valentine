import './propose.css';
import Days from '../days/days';
import DataService from '../services/dataservice';
import { useState, useEffect } from 'react';
import proposeday from '../../resources/proposeday.jpg';
import { useNavigate } from 'react-router-dom';
import { local } from 'd3';

function Propose(){

    const navigate = useNavigate();

    const [message, setMessage]=useState(sessionStorage.getItem("propose"));
    useEffect(()=>{
        navigate('/propose');
    },[message,navigate]);
    
    var input=document.getElementById("hint1");
    if (input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                var submitBtn = document.getElementById("submit-btn1");
                
                if (submitBtn) {
                    submitBtn.click();
                }
            }
        });
    }


    async function action(){
        let url='/stegno/'+document.getElementById("hint1").value;
        await DataService.get(url)
        .then((res)=>{
            if(res.data){
                setMessage(true);
                sessionStorage.setItem("propose",true);
            }
            else{
                setMessage(false);
                sessionStorage.removeItem("propose");
            }
        })
        .catch((error)=>console.log(error));

    }
    return (
        <div className='background'>
                
                <Days text={"Happy Propose Day"}/>
                <div className='image-container'>
                    <div className='input-container'>
                        <input type='password' id="hint1" placeholder="Enter the hint here" className='input-tag'></input>
                        <button className='button-tag' id='submit-btn1' onClick={action}>Next</button>
                    </div>
                    {message &&
                        <img className='image-body' src={proposeday}></img>
                    }
                    
            </div>
        </div>
    );
}

export default Propose;