import '../../styling/Banner.css'
import playButton from '../../img/playButton.png'
import infoButton from '../../img/infoButton.png'
import movieBannerData from '../../MovieBannerData'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export default function MoviesBanner() {

const [movie, setMovie] = useState([]);
const [show, setShow] = useState(false);
const [moreInfo, setMoreInfo] = useState(false)


    useEffect(() => {
        function fetchData() {
            const request = movieBannerData;
            setMovie(
                request[
                    Math.floor(Math.random() * request.length)
                ]
            );
            return request;
        }

        fetchData()
    }, []);

    // console.log(movie)

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
        <h1 className='heading'>Movies</h1>
        <div className='bannerContents'>
            <div className={(!moreInfo && movie?.title === 'Happiest Season') || (window.innerWidth < 600 && !moreInfo && movie?.title === 'Everything Everywhere All At Once') || (window.innerWidth < 600 && !moreInfo && movie?.title === 'Badhaai Do') ? 'moreInfoBg' : (window.innerWidth < 600 && movie?.title === 'Everything Everywhere All At Once') || (window.innerWidth < 600 && movie?.title === 'Badhaai Do') || (movie?.title === 'Happiest Season') ? 'tvBannerLong' : null}>
            <h1 className={window.innerWidth < 600 && movie?.title === 'Everything Everywhere All At Once' ? 'shorterBannerTitle' : 'bannerTitle'}>{movie?.title === undefined ? '' : movie?.title}</h1>
            <div className='bannerDescription'>
            <p>{movie?.title === undefined ? '' : moreInfo === false && movie?.overview.length < 120 ? truncate(`${movie?.overview}`, 75) : moreInfo === false ? truncate(`${movie?.overview}`, 120) : movie?.overview}</p>
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
        <ReactPlayer url={movie?.videoUrl} playing='true' width='100vw' height={window.innerWidth > 1000 ? '82vh' : window.innerWidth > 700 ? '80vh' : window.innerWidth < 700 ? '78vh' : null} />
        </div>
        ) : null}
        <div className='fadeBottom'/>
        </div>

        </header>
    )
}