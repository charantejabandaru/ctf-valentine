import TopBar from '../topbar/topbar';
import './promise.css';
import Days from '../days/days';
import DataService from '../services/dataservice';
import { useState,useEffect } from 'react';
import cmr from '../../resources/cmr.jpg';
import { useNavigate } from 'react-router-dom';

function Promise(){

    const navigate = useNavigate();

    const [message, setMessage]=useState(sessionStorage.getItem("promise"));
    useEffect(()=>{
        navigate('/promise');

    },[message,navigate]);

    var input=document.getElementById("hint4");
    if (input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                var submitBtn = document.getElementById("submit-btn4");
                
                if (submitBtn) {
                    submitBtn.click();
                }
            }
        });
    }

    async function action(){
        let url='/mythology/'+document.getElementById("hint4").value;
        await DataService.get(url)
        .then((res)=>{
            if(res.data){
                setMessage(true);
                sessionStorage.setItem("promise",true);
            }
            else{
                setMessage(false);
                sessionStorage.removeItem("promise");
            }
        })
        .catch((error)=>console.log(error));

    }
    return (
        <div className='background'>
                <Days text={"Happy Promise Day"}/>
                <div className='image-container'>
                <div className='input-container'>
                        <input type='password' id="hint4" placeholder="Enter the hint here" className='input-tag'></input>
                        <button className='button-tag' id='submit-btn4' onClick={action}>Next</button>
                    </div>
                    {message &&
                        <img className='image-body' src={cmr}></img>
                    }
                </div>
        </div>
    );
}

export default Promise;