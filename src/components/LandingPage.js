import React from 'react'
import '../styling/LandingPage.css'
import bg from '../img/netflixbg2.jpg'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'
import { auth } from '../firebase'

export default function LandingPage({isSignedIn, setIsSignedIn}) {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ name, setName ] = useState('')
  const [ error, setError ] = useState('')
  const { user, signUp } = UserAuth()
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
      navigate('/home')
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
      {/* {prop.isSignedIn === true ? ( */}
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
