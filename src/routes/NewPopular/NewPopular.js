import '../../styling/NewPopular.css'
import Row from '../../components/Row'
import requests from '../../Request'
import { Navigate } from 'react-router-dom'

export default function NewPopular({isSignedIn}) {
    return (
        <div className='newSection'>
            {isSignedIn === true ? (
            <>
            <Row title='Upcoming Films'
            fetchUrl={requests?.fetchUpcomingMovies}
            isLargeRow
            />
            <Row title='New & Popular'
            fetchUrl={requests?.fetchTrending}
            isLargeRow
            />
            </>) : <Navigate to='/' />}
        </div>
    )
}