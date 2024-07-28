import TopBar from '../topbar/topbar';
import './rose.css';
import Days from '../days/days';
import roseday from '../../resources/roseday.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Rose(){

    const navigate = useNavigate();

    useEffect(() => {
     navigate('/rose');
    }, [navigate]);

    return (
        <div className='background'>
                <Days text={"Happy Rose Day"}/>
                <div className='image-container'>
                    <img className='image-body' src={roseday}></img>
            </div>
        </div>
    );
}

export default Rose;