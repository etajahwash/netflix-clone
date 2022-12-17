import '../../styling/Movies.css'
import Row from '../../components/Row'
import requests from '../../Request'
import MoviesBanner from './MoviesBanner'
import { Navigate } from 'react-router-dom'

export default function Movies({isSignedIn}) {
    return (
        <div className="moviesSection">
            {isSignedIn === true ? (
            <>
            <MoviesBanner />
            <Row title='Only on Netflix'
            fetchUrl={requests.fetchOON}
            />
            <Row title='Action-Packed Films'
            fetchUrl={requests.fetchNetflixAction}
            />
            <Row title='Romances for the Heart'
            fetchUrl={requests.fetchNetflixRomance}
            />
            <Row title='Westerns'
            fetchUrl={requests.fetchWesternMovies}
            />
            <Row title='Horror Movies'
            fetchUrl={requests.fetchNetflixHorror}
            />
            <Row title='Comedies'
            fetchUrl={requests.fetchNetflixComedy}
            />
            </>) : <Navigate to='/' />}
        </div>
    )
}