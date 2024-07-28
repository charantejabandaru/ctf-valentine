import './days.css';
import video from '../../resources/video.mp4';

function Days(props){
    return (
        <div className='background'>
            <video autoPlay loop muted playsInline className='back-video'>
                <source src={video} type='video/mp4'></source>
            </video>
            <header>
                <h1>Celebrate this Valentine's Day with Love</h1>
            </header>
            <nav>
                <strong>{props.text}</strong>
            </nav>
        </div>
    );
}

export default Days;