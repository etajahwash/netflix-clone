import '../../styling/Profile.css'
import miniLogo from '../../img/miniLogo.png'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet'

export default function Profile({isSignedIn, setIsSignedIn, plan, setPlan}) {
    const { logOut } = UserAuth() 
    const navigate = useNavigate()
    const [ isSubscribed, setIsSubscribed ] = useState(
        JSON.parse(localStorage.getItem('isSubscribed'))
    )

    const handleSubscription = () => {
        localStorage.setItem('isSubscribed', JSON.stringify(!isSubscribed));
        setIsSubscribed(!isSubscribed)
        if(isSubscribed === true) {
            setPlan(old => old = '')
            toast.error(`You have unsubscribed`, {
                position: 'bottom-left',
                autoClose: 3500,
                theme: 'colored'
             });
        } 
        else if (isSubscribed === false) {
            setPlan(old => old = 'Basic')
            toast.success(`You have re-subscribed.`, {
                position: 'bottom-left',
                autoClose: 3500,
                theme: 'colored'
             });
        }
    }

    const handleLogout = async () => {
        localStorage.setItem('isSignedIn', JSON.stringify(!isSignedIn));
        setIsSignedIn(!isSignedIn)

        try {
            await logOut()
            navigate('/')
        } catch (error) {
          console.log(error)  
        }
    }


    const basicSelection = (e) => {
        setPlan(e.target.innerText);
        setIsSubscribed(true)
        toast.success(`You have subscribed to the Basic plan.`, {
                    position: 'bottom-left',
                    autoClose: 3500,
                    theme: 'colored'
                 });
    }

    const basicSelectionText = () => {
        setPlan('Basic');
        setIsSubscribed(true)
        toast.success(`You have subscribed to the Basic plan.`, {
                    position: 'bottom-left',
                    autoClose: 3500,
                    theme: 'colored'
                 });
    }

    const standardSelection = (e) => {
        setPlan(e.target.innerText);
        setIsSubscribed(true)
        toast.success(`You have subscribed to the Standard plan.`, {
                    position: 'bottom-left',
                    autoClose: 3500,
                    theme: 'colored'
                 });
    }

    const standardSelectionText = () => {
        setPlan('Standard');
        setIsSubscribed(true)
        toast.success(`You have subscribed to the Standard plan.`, {
                    position: 'bottom-left',
                    autoClose: 3500,
                    theme: 'colored'
                 });
    }

    const premiumSelection = (e) => {
        setPlan(e.target.innerText);
        setIsSubscribed(true)
        toast.success(`You have subscribed to the Premium plan.`, {
                    position: 'bottom-left',
                    autoClose: 3500,
                    theme: 'colored'
                 });
    }

    const premiumSelectionText = () => {
        setPlan('Premium');
        setIsSubscribed(true)
        toast.success(`You have subscribed to the Premium plan.`, {
                    position: 'bottom-left',
                    autoClose: 3500,
                    theme: 'colored'
                 });
    }

    
    return (
        <div className='profileSection'>
            <Helmet>
                <title>Profile - Netflix</title>
            </Helmet>
            {isSignedIn === true ? (
            <>
            <div className='profileSB'>
            <div className='upper'>
                <h1>Account</h1>
                <div className='memberSinceSection'>
                <img src={miniLogo} className='miniLogo' alt='mini icon img' />
                <h4 className='msText'>Member Since 2023</h4>
                </div>
            </div>
            <div className='profileLogout'>
                <button onClick={handleLogout} className='profileLogoutButton'>Log Out</button>
                <ToastContainer />
            </div>
            </div>
            <hr/>
            <div className='mid'>
                <div className='midOne'>
                    <h2>MEMBERSHIP & BILLING</h2>
                    <button onClick={handleSubscription}>{ plan === 'Premium' || plan === 'Standard' || plan === 'Basic' ? 'Cancel Membership' : 'Subscribe Below'}</button>
                </div>
                <div className='midTwo'>
                    <p className='profileEmail'>Email: **********</p>
                    <p>Password: *******</p>
                </div>
            </div>
            <hr/>
            <div className='lower'>
                {!isSubscribed ? (
                <p className='billing'>Your free trial will end within 14 days.</p>
                )
                : (
                    <div className='justSomeSpace'></div>
                )}
                <div className='lowerOne'>
                    <h3>Plans</h3>
                    <p>(Current Plan: <span className='planType'>{plan}</span>)</p>
                </div>
                <hr className='underPlans'/>
                <div className='plansSection'>
                    <Link className='selectionContainers'>
                        <div onClick={basicSelection} className='basic'>
                            <h4 >Basic</h4>
                            <hr className='basicHr'/>
                        </div>
                        <p className='basicText' onClick={basicSelectionText}>Good video quality in SD (480p). Watch on any phone, tablet, computer or TV. $9.99/month</p>
                    </Link>
                    <Link className='selectionContainers'>
                        <div  onClick={standardSelection} className='basic'>
                            <h4>Standard</h4>
                            <hr className='basicHr'/>
                        </div>
                        <p className='basicText' onClick={standardSelectionText}>Great video quality in Full HD (1080p). Watch on any phone, tablet, computer or TV. $15.49/month</p>
                    </Link>
                    <Link className='selectionContainers'>
                        <div onClick={premiumSelection} className='basic'>
                            <h4 >Premium</h4>
                            <hr className='basicHr'/>
                        </div>
                        <p className='basicText' onClick={premiumSelectionText}>Our best video quality in Ultra HD (4K) and HDR. Watch on any phone, tablet, computer or TV. $19.99/month</p>
                    </Link>
                    <p className='pTop'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities.
                    Not all content is available in all resolutions. See our <a href='https://help.netflix.com/legal/termsofuse'><span className='tou'>Terms of Use</span></a> for more details.</p>
                    <p>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.</p>
                </div>
            </div>
            </>) : <Navigate to='/' />}
        </div>
    )
}