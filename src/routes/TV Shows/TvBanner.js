import '../../styling/Banner.css'
import playButton from '../../img/playButton.png'
import infoButton from '../../img/infoButton.png'
import tvBannerData from '../../tvBannerData'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export default function Banner() {

const [movie, setMovie] = useState([]);
const [show, setShow] = useState(false);
const [moreInfo, setMoreInfo] = useState(false)


    useEffect(() => {
        function fetchData() {
            const request = tvBannerData;
            setMovie(
                request[
                    Math.floor(Math.random() * request.length)
                ]
            );
            return request;
        }

        fetchData()
    }, []);

    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    function playTrailer() {
        setShow(true)
    }

    function showMoreInfo() {
        setMoreInfo(!moreInfo)
    }
    return (
        <header className='bannerSection' style={{
            backgroundImage: `url(${movie?.img})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
        }}>
        <div className='bannerContentSection'>
        <h1 className={window.innerWidth > 600 && movie?.title === 'Gap The Series' ? 'headingBlack' : 'heading'}>TV Shows</h1>
        <div className='bannerContents'>
            <div className={(!moreInfo && movie?.title === 'Bridgerton') || (!moreInfo && movie?.title === 'Gap The Series') || (!moreInfo && movie?.title === 'The Cleaning Lady') ? 'moreInfoBg' : (movie?.title === 'Gap The Series') || (movie?.title === 'The Cleaning Lady') || (movie?.title === 'Bridgerton') ? 'tvBannerLong' : null}>
            <h1 className={movie?.title === 'The Haunting of Bly Manor' ? 'shorterBannerTitle' : 'bannerTitle'}>{movie?.title === undefined ? '' : movie?.title}</h1>
            <div className='bannerDescription'>
            <p className={window.innerWidth < 700 ? 'tvParaUp' : null}>
                {movie?.title === undefined ? '' : moreInfo === false && movie?.overview.length < 120 ? truncate(`${movie?.overview}`, 75) : moreInfo === false ? truncate(`${movie?.overview}`, 120) : movie?.overview}
            </p>
            </div>
            </div>
            <div className='bannerButtonsSection'>
                <button onClick={playTrailer} className='playButton bannerButtons'>
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
        <div className='videoPlayer'>
        <ReactPlayer url={movie?.videoUrl} playing='true' width='100vw' height={window.innerWidth > 1000 ? '82vh' : window.innerWidth > 700 ? '84vh' : window.innerWidth > 450 ? '83vh' : window.innerWidth < 450 ? '78vh' : null} />
        </div>
        ) : null}
        <div className='fadeBottom'/>
        </div>

        </header>
    )
}