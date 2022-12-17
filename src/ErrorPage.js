import { useRouteError } from "react-router-dom";
import './styling/ErrorPage.css'
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="errorSection">
      <div className="errorContents">
      <i><h1 className="oops">Oops!</h1></i>
        <i><h3 className="errorText">This page doesn't exist</h3></i>
      </div><br/>
      <Link to='/'>
      <button className="errorButton">Return Home</button>
      </Link>
    </div>
  );
}