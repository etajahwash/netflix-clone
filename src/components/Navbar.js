import { useState, useEffect } from 'react'
import '../styling/Navbar.css'
import Logo from '../img/logo.svg'
import Avatar from '../img/avatar.png'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { SwipeableDrawer } from '@mui/material';
import {
    Box,
    Divider,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
  } from "@mui/material";

export default function Navbar() {
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate()

    function navbarTransition() {
        if(window.scrollY > 30) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    function navTv() {
        setIsActive(false);
        navigate("/tv-shows");
      }
    
      function navMovies() {
        setIsActive(false);
        navigate("/movies");
      }

      function navHome() {
        setIsActive(false);
        navigate("/home");
      }
    
      function navNandP() {
        setIsActive(false);
        navigate("/new-&-popular");
      }
    
      function aboutProfile() {
        setIsActive(false);
          navigate("/profile");
        }

    useEffect(() => {
        window.addEventListener('scroll', navbarTransition);
        return () => window.removeEventListener('scroll', navbarTransition);
    }, [])

    return (
        <div className={`navbar ${show && 'navbarScroll'}`}>
        <div className='navbarContent'>
            <div className='whenShrunk'>
            <a href={'/home'}><img src={Logo} className='logo' alt='logo' href={'/'}/></a>
            </div>
            <div className='leftSide'>
                <a href={'/home'}><img src={Logo} className='logo' alt='logo' href={'/'}/></a>
                <ul className='theUl'>
                    <li><a href={'/home'}>Home</a></li>
                    <li><a href={'/tv-shows'}>TV Shows</a></li>
                    <li><a href={'/movies'}>Movies</a></li>
                    <li><a href={'/new-&-popular'}>New & Popular</a></li>
                </ul>
            </div>
            <div className='rightSide'>
                <a href='/profile'><img src={Avatar} className='avatar' alt='avatar'/></a>
            </div>
            <div className="dropDownMenu">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setIsActive(true)}
                >
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    anchor="right"
                    color="palevioletred"
                    open={isActive}
                    onClose={() => setIsActive(false)}
                    onOpen={() => {}}
                >
                    <div
                    style={{
                        backgroundColor: "black",
                        height: "100vh",
                        width: "10rem",
                        color: 'white',
                    }}
                    >
                    <Box textAlign="center" p={2}>
                        <a href={'/home'}><img src={Logo} className='logo' alt='logo' href={'/'}/></a>
                    </Box>
                    <Divider />
                    <List>
                        <ListItemButton onClick={navHome}>
                        <ListItemText primary={"Home"} />
                        </ListItemButton>
                        <ListItemButton onClick={navMovies}>
                        <ListItemText primary={"Movies"} />
                        </ListItemButton>
                        <ListItemButton onClick={navTv}>
                        <ListItemText primary={"TV Shows"} />
                        </ListItemButton>
                        <ListItemButton onClick={navNandP}>
                        <ListItemText primary={"New & Popular"} />
                        </ListItemButton>
                        <ListItemButton onClick={aboutProfile}>
                        <ListItemText primary={"Profile"} />
                        </ListItemButton>
                    </List>
                    </div>
                </SwipeableDrawer>
                </div>
            </div>
        </div>
    )
}