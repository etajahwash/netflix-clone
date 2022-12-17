import { useEffect, useRef, useState } from "react";
import axios from "../axios";
import "../styling/Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

export default function Row(props) {
  const [movieRow, setMovieRow] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [slideNumber, setSlideNumber] = useState(0);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovieRow(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name, { tmbdId: movie.id })
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const styles = {
    largeIcon: {
      width: "30px",
      height: "123px",
    },
    smallIcon: {
      width: "30px",
      height: "fit-content",
      marginTop: '5rem'
    },
  };

  const listRef = useRef();

  const sliderClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 25;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${208 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 13) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-208 + distance}px)`;
    }
  };

//   console.log(movieRow[0])
  return (
    <div className="rowSection">
      <h5 className={props.isLargeRow ? "bigRowTitle" : "rowTitle"}>
        {props.title}
      </h5>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          style={props.isLargeRow ? styles.largeIcon : styles.smallIcon}
          onClick={() => sliderClick("left")}
        />
        <div className="row" ref={listRef}>
          {movieRow?.map(
            (movie) =>
              ((props.isLargeRow && movie.poster_path) ||
                (!props.isLargeRow && movie.backdrop_path)) && (
                <div key={movie.id}>
                  <div className={props.isLargeRow ? 'imgSectionLarge' : 'imgSectionSmall'}>
                    <div
                      style={{
                        backgroundImage: `url(${base_url}${
                            props.isLargeRow
                              ? movie.poster_path
                              : movie.backdrop_path
                          })`
                        }}
                      className={props.isLargeRow ? "bigCardImg" : "cardImg "}
                      key={movie.id}
                      alt="card img"
                      onClick={() => handleClick(movie)}
                    >
                        <div className={props.isLargeRow ? 'bottomText' : 'bottomTextSmall'}>{movie.name || movie.title}</div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          style={props.isLargeRow ? styles.largeIcon : styles.smallIcon}
          onClick={() => sliderClick("right")}
        />
      </div>
      <div className="rowHover">
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}
