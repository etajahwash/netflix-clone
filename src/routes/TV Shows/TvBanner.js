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
        <h1 className='heading'>TV Shows</h1>
        <div className='bannerContents'>
            <h1 className='bannerTitle'>{movie?.title}</h1>
            <div className='bannerDescription'>
            <p>{moreInfo === false ? truncate(`${movie?.overview}`, 120) : movie?.overview}</p>
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
        <ReactPlayer url={movie?.videoUrl} playing='true' width='100vw' height='97vh' />
        </div>
        ) : null}
        <div className='fadeBottom'/>
        </div>

        </header>
    )
}