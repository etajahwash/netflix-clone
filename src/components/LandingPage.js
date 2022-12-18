import React from 'react'
import '../styling/LandingPage.css'
import bg from '../img/netflixbg2.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'
import { Helmet } from 'react-helmet'

export default function LandingPage({isSignedIn, setIsSignedIn}) {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ name, setName ] = useState('')
  const [ error, setError ] = useState('')
  const { signUp } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(name === '') {
      alert('name is required')
    } else {
      try {
      await signUp(email, password)
      localStorage.setItem('isSignedIn', JSON.stringify(!isSignedIn));
      setIsSignedIn(!isSignedIn)
      navigate('/login-redirect')
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
    }
  }

  return (
    <div className='landingContainer' style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat'
    }}>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <title>Netflix</title>
        </Helmet>
        <div className='landingOutline'>
        <form onSubmit={handleSubmit}> 
          <div className='landingInner'>
            <h1 className='landingTitle'>Ready to start watching?</h1>
            <div className='landingLI'>
                <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error ? (
              <p>{error}</p>
            ) : null}
            <button className='landingContinueButton'>Continue</button>
          </div>
          <div className='landingOuter'>
            <p className='landingMember'>Already a member?</p>
            <Link to='/login'>
            <button className='landingLoginButton'>Login</button>
            </Link>
          </div>
        </form>
      </div>      
      </div>
  )
}
