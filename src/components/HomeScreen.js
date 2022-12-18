import '../styling/HomeScreen.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Row from './Row'
import requests from '../Request'
import { Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'


export default function HomeScreen({isSignedIn}) {

    return (
        <div className="homeScreen">
            <Helmet>
                <title>Home - Netflix</title>
            </Helmet>
            {isSignedIn === true ? (
            <div key={100}>
            <Navbar />

            <Banner />

            <Row
            title='Netflix Originals'
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row title='Trending Now'
            fetchUrl={requests.fetchTrending}
            />
            <Row title='Top Rated'
            fetchUrl={requests.fetchTopRated}
            />
            <Row title='Animation'
            fetchUrl={requests.fetchAnimeShows}
            />
            <Row title='Comedies'
            fetchUrl={requests.fetchComedyMovies}
            />
            <Row title='Action & Adventure'
            fetchUrl={requests.fetchActionMovies}
            />
            <Row title='Romance'
            fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title='Horror'
            fetchUrl={requests.fetchHorrorMovies}
            />
            <Row title='Sci-Fi & Fantasy'
            fetchUrl={requests.fetchFantasy}
            />
            </div>) : <Navigate to='/' />}
        </div>
    )
}