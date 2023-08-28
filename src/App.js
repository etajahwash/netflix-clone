import React from "react";
import HomeScreen from "./components/HomeScreen";
import TvShows from "./routes/TV Shows/TvShows";
import ErrorPage from "./ErrorPage";
import Navbar from "./components/Navbar";
import Profile from "./routes/Profile/Profile";
import Movies from "./routes/Movies/Movies";
import NewPopular from "./routes/NewPopular/NewPopular";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import LoginRedirect from "./components/LoginRedirect";
import { AuthContextProvider } from "./context/AuthContext";
import { useState } from "react";
import "./styling/app.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


function App() {
  const [isSignedIn, setIsSignedIn] = useState(
    JSON.parse(localStorage.getItem('isSignedIn')) || false
  )

  const [ plan, setPlan ] = useState(
    JSON.parse(localStorage.getItem('plan'))
  )

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<LandingPage isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
        <Route path='/login' element={<Login isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>} />
        <Route path='*' element={<ErrorPage />} isSignedIn={isSignedIn} />
        <Route path='/tv-shows' element={<><Navbar /> <TvShows isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} /></>} />
        <Route path='/movies' element={<><Navbar /> <Movies isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} /></>} />
        <Route path='/new-&-popular' element={<><Navbar /> <NewPopular isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} /></>} />
        <Route path='/profile' element={<><Navbar /> <Profile isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} plan={plan} setPlan={setPlan} /></>} />
        <Route path='/home' element={<><Navbar /> <HomeScreen isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} /></>} />
        <Route path='/login-redirect' element={<LoginRedirect isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
      </>
    )
  );

  return (
    <div style={{overflowX: 'hidden'}}>
      <AuthContextProvider>
        <div className="app">
          <RouterProvider
            router = {router}
          />
        </div>
      </AuthContextProvider>
    </div>
  );
}

export default App;
