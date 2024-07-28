import { color } from 'd3';
import './topbar.css';
import { useNavigate } from 'react-router-dom';

function TopBar(){
    const navigate=useNavigate();
    return (
        <>
        <div class="topbar-background"></div>
        <div className="topbar">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXUUx2R0YcaHTWtTgE65R_hB6X_WJdZfYkw&usqp=CAU"></img>
            <div className='days_container'>
                <label className='days' onClick={()=>navigate('/')}>Home</label>
                <label className='days' onClick={()=>navigate('/rose')}>Rose</label>
                <label className='days' onClick={()=>{navigate('/propose')}}>Propose</label>
                <label className='days' onClick={()=>navigate('/chocolate')}>Chocolate</label>
                <label className='days' onClick={()=>navigate('/teddy')}>Teddy</label>
                <label className='days' onClick={()=>navigate('/promise')}>Promise</label>
                <label className='days' onClick={()=>navigate('/hug')}>Hug</label>
                <label className='days' onClick={()=>navigate('/kiss')}>Kiss</label>
                <label className='days' onClick={()=>navigate('/valentines')}>Valentine</label>
            </div>
        </div>
        </>
    );
}

export default TopBar;