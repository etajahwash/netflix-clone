import "../styling/LoginRedirect.css";
import { useNavigate } from "react-router-dom";
import scobg from "../img/netflixbg2.jpg";
import { useEffect } from "react";

export default function LoginRedirect({setIsSignedIn}) {
  const navigate = useNavigate();

  useEffect(() => {
    setIsSignedIn(true) 
    setTimeout(() => {
    navigate('/home')
    setIsSignedIn(true) 
  }, "3000");
  })
  return (
    <div
      className="checkedOutContainer"
      style={{
        backgroundImage: `url(${scobg})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="checkedOutWrapper">
        <div className="checkedOutOverlay">
          <h1>You're Logged In!</h1>
          <h4>You are being redirected<span className="coFirst">.</span>
          <span className="coSecond">.</span>
          <span className="coThird">.</span></h4>
        </div>
      </div>
    </div>
  );
}
