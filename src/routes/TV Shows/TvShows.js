import '../../styling/TvShows.css'
import requests from '../../Request'
import Row from '../../components/Row'
import TvBanner from './TvBanner'
import { Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function TvShows({isSignedIn, setIsSignedIn}) {
    return (
        <div className="tvSection">
            <Helmet>
                <title>TV Shows - Netflix</title>
            </Helmet>
            {isSignedIn === true ? (
            <>
            <TvBanner />
            <Row title='Bingeworthy Tv Dramas'
            fetchUrl={requests.fetchTvDramas}
            />
            <Row title='Shows for the Whole Family'
            fetchUrl={requests.fetchFamilyTv}
            />
            <Row title='Popular on Netflix'
            fetchUrl={requests.fetchNetflixTv}
            />
            <Row title='Crime TV Shows'
            fetchUrl={requests.fetchCrimeTv}
            />
            <Row title='Soap TV'
            fetchUrl={requests.fetchSoapTv}
            />
            <Row title='Anime'
            fetchUrl={requests.fetchAnimeTv}
            />
            <Row title='Fantasy TV'
            fetchUrl={requests.fetchFantasyTv}
            />
             </>) : <Navigate to='/' />}
        </div>
    )
}