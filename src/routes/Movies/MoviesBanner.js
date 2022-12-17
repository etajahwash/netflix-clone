import '../../styling/Banner.css'
import playButton from '../../img/playButton.png'
import infoButton from '../../img/infoButton.png'
import movieBannerData from '../../MovieBannerData'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export default function MoviesBanner() {

const [movie, setMovie] = useState([]);
const [show, setShow] = useState(false);

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

    console.log(movie)

    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    function playTrailer() {
        setShow(true)
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
            <h1 className='bannerTitle'>{movie?.title}</h1>
            <div className='bannerDescription'>
                <p>{truncate(`${movie?.overview}`, 150)}</p>
            </div>
            <div className='bannerButtonsSection'>
                <button onClick={playTrailer} className='playButton bannerButtons'>
                    <img src={playButton} className='playImg' alt='play button'/>
                    <span className='playText'>Play</span>
                </button>
                <button className='infoButton bannerButtons'>
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