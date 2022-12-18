import React from 'react'
import '../styling/Login.css'
import bg from '../img/netflixbg.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'
import { Helmet } from 'react-helmet';

export default function LoginPage({isSignedIn, setIsSignedIn}) {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')
  const { logIn } = UserAuth()
  // const [cart,setCart] = useState(localStorage.getItem("key") || [])

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSignedIn(true)
    localStorage.setItem('isSignedIn', JSON.stringify(!isSignedIn));
    setIsSignedIn(!isSignedIn)



      // if(isSignedIn === true) {
      try {
        await logIn(email, password)
        navigate('/login-redirect')
      } catch (error) {
        console.log(error)
        setError(error.message)
      }
    // } else{
    //   console.log(error)
    //   setError(error.message)
    // }

  }
  return (
    <div className='loginContainer' style={{
      backgroundImage: `url(${bg})`
    }}>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <title>Netflix</title>
        </Helmet>

      <div className='loginOutline'>
        <form onSubmit={handleSubmit}>
          <div className='loginInner'>
            <h1 className='loginTitle'>Login</h1>
            <div className='loginLI'>
                <input  onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' />
                <input className='loginPassword'  onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
            </div>
            <button className='loginContinueButton'>Continue</button>
            {error ? (
              <p>{error}</p>
            ) : null}
          </div>
          <Link to='/' className='loginBack'>
            <ArrowBackIosIcon fontSize='small' />
            <h6>BACK</h6>
          </Link>
        </form>
      </div>
      </div>
  )
}
