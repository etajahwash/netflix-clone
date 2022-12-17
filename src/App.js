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
import CheckoutSuccess from "./components/CheckoutSuccess";
import { AuthContextProvider } from "./context/AuthContext";
import { useState } from "react";
import "./styling/app.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [isSignedIn, setIsSignedIn] = useState(
    JSON.parse(localStorage.getItem('isSignedIn')) || false
  )

  const [ plan, setPlan ] = useState(
    JSON.parse(localStorage.getItem('plan'))
  )

  return (
    <div key={1000} style={{overflowX: 'hidden'}}>
      <AuthContextProvider key={1001}>
        <div key={1002} className="app">
          <Router key={1003}>
            <Routes key={1004}>
              <Route key={1005} path='/' element={<LandingPage isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />} />
              <Route key={1006} path='/login' element={<Login isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>} />
              <Route key={1007} path='*' element={<ErrorPage />} />
              <Route key={1008} path='/tv-shows' element={<><Navbar /> <TvShows isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} /></>} />
              <Route key={1009} path='/movies' element={<><Navbar /> <Movies isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} /></>} />
              <Route key={1010} path='/new-&-popular' element={<><Navbar /> <NewPopular isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} /></>} />
              <Route key={1011} path='/profile' element={<><Navbar /> <Profile isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} plan={plan} setPlan={setPlan} /></>} />
              <Route key={1012} path='/home' element={<><Navbar /> <HomeScreen isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} /></>} />
              <Route key={1014} path='/login-redirect' element={<CheckoutSuccess />} />
            </Routes>
          </Router>
        </div>
      </AuthContextProvider>
    </div>
  );
}

export default App;
