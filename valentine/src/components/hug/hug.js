import TopBar from '../topbar/topbar';
import './hug.css';
import Days from '../days/days';
import DataService from '../services/dataservice';
import { useEffect,useState } from 'react';
import hugday from '../../resources/hugday.jpg';
import { useNavigate } from 'react-router-dom';

function Hug(){

    const navigate = useNavigate();
    const [message, setMessage]=useState(sessionStorage.getItem("hug"));
    useEffect(()=>{
        navigate('/hug');

    },[message,navigate]);

    var input=document.getElementById("hint5");
    if (input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                var submitBtn = document.getElementById("submit-btn5");
                
                if (submitBtn) {
                    submitBtn.click();
                }
            }
        });
    }
    
    async function action(){
        let url='/dialogue/'+document.getElementById("hint5").value;
        await DataService.get(url)
        .then((res)=>{
            if(res.data){
                setMessage(true);
                sessionStorage.setItem("hug",true);
            }
            else{
                setMessage(false);
                sessionStorage.removeItem("hug");
            }
        })
        .catch((error)=>console.log(error));

    }

    return (
        <div className='background'>
                
                <Days text={"Happy Hug Day"}/>
                <div className='image-container'>
                <div className='input-container'>
                        <input type='password' id="hint5" placeholder="Enter the hint here" className='input-tag'></input>
                        <button className='button-tag' id='submit-btn5' onClick={action}>Next</button>
                    </div>
                    {message &&
                        <img className='image-body' src={hugday}></img>
                    }
                </div>
        </div>
    );
}

export default Hug;