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
            <div className={(window.innerWidth < 600 && !moreInfo && movie?.title === 'SPY x FAMILY') || (window.innerWidth < 600 && !moreInfo && movie?.title === 'Inuyasha') || (window.innerWidth < 600 && !moreInfo && movie?.title === 'The Promised Neverland') ? 'moreInfoBg' : (window.innerWidth < 600 && movie?.title === 'Inuyasha') || (window.innerWidth < 600 && movie?.title === 'SPY x FAMILY') || (window.innerWidth < 600 && movie?.title ==='The Promised Neverland') ? 'bannerBgs' : (window.innerWidth < 600 && !moreInfo && movie?.title === 'Inuyasha') || (window.innerWidth < 600 && !moreInfo && movie?.title === 'SPY x FAMILY') || (window.innerWidth < 600 && !moreInfo && movie?.title ==='The Promised Neverland') ? 'moreInfoBg' : (window.innerWidth < 600 && movie?.title === 'Inuyasha') || (window.innerWidth < 600 && movie?.title === 'Spy x Family') || (window.innerWidth < 600 && movie?.title ==='The Promised Neverland') ? 'bannerBgs' : (window.innerWidth > 600 && movie?.title === 'Inuyasha') || (window.innerWidth > 600 && movie?.title === 'Castlevania') ? 'bannerBgsL' : null}>
            <h1 className={(window.innerWidth < 700 && movie?.title === 'The Promised Neverland') ? 'shorterBannerTitle' : 'bannerTitle'}>{movie?.title === undefined ? '' : movie?.title}</h1>
            <div className='bannerDescription'>
                <p>
                    {movie?.title === undefined ? '' : moreInfo === false && movie?.title === 'Castlevania' ? truncate(`${movie?.overview}`, 80) : moreInfo === false ? truncate(`${movie?.overview}`, 117) : movie?.overview}
                </p>
            </div>
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
        <ReactPlayer url={movie?.videoUrl} playing='true' width='100vw' height={window.innerWidth > 1000 ? '82vh' : window.innerWidth > 700 ? '80vh' : window.innerWidth < 700 ? '78vh' : null} />
        </div>
        ) : null}

        <div className='fadeBottom'/>
        </div>

        </header>
    )
}