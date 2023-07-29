import '../styling/Banner.css'
import playButton from '../img/playButton.png'
import infoButton from '../img/infoButton.png'
import bannerData from '../bannerData'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export default function Banner() {

const [movie, setMovie] = useState([]);
const [show, setShow] = useState(false);
const [moreInfo, setMoreInfo] = useState(false)

    function showMoreInfo() {
        setMoreInfo(!moreInfo)
    }


    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    function playTrailer() {
        setShow(true)
    }

    useEffect(() => {
        function fetchData() {
            const request = bannerData;
            setMovie(
                request[
                    Math.floor(Math.random() * request.length)
                ]
            );
            return request;
        }

        fetchData()
    }, []);
    
    return (
        <header className='bannerSection' style={{
            backgroundImage: `url(${movie?.img})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
        }}>
        <div className='bannerContentSection'>
        <div className='bannerContents'>
            <h1 className={ movie?.title === 'Inuyasha' ? 'blackText' : movie?.title === 'Castlevania' ? 'redText' : 'bannerTitle'}>{movie?.title}</h1>
            <div className={movie?.title === 'Inuyasha' ? 'blacktextDesc' : movie?.title === 'Castlevania' ? 'redTextDesc' : 'bannerDescription'}>
                <p>{moreInfo === false ? truncate(`${movie?.overview}`, 120) : movie?.overview}</p>
            </div>
            <div className='bannerButtonsSection'>
                <button className='playButton bannerButtons' onClick={playTrailer}>
                    <img src={playButton} className='playImg' alt='play button'/>
                    <span className='playText'>Play</span>
                </button>
                <button className='infoButton bannerButtons' onClick={showMoreInfo}>
                    <img src={infoButton} className='infoImg' alt='info button'/>
                    <span className='infoText'>More Info</span>
                </button>
            </div>
        </div>

        {show === true ? (
        <div className={'videoPlayer'}>
        <ReactPlayer url={movie?.videoUrl} playing='true' width='100vw' height={window.innerWidth > 1000 ? '82vh' : window.innerWidth > 799 ? '93vh' : '105vh'} />
        </div>
        ) : null}

        <div className='fadeBottom'/>
        </div>

        </header>
    )
}