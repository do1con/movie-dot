import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import MovieInfo from "./Sections/MovieInfo";
import GridCards from "../commons/GridCards";
import { Row } from "antd";
import Favorite from "./Sections/Favorite";

function MovieDetail(props) {
  const movieId = props.match.params.movieId;
  const endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`;
  const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko-KR`;

  const [Movie, setMovie] = useState([]);
  const [Casts, setCasts] = useState([]);

  useEffect(() => {
    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
      });
    fetch(endpointCrew)
      .then((response) => response.json())
      .then((response) => {
        setCasts(response.cast);
      });
  }, []);

  return (
    <div>
      {/* Header */}

      <MainImage
        image={`${IMAGE_BASE_URL}original/${Movie.backdrop_path}`}
        title={Movie.title}
        text={Movie.overview}
      />
      {/* Body */}
      <div style={{ width: "75%", margin: "1rem auto" }}>
        {/* Movie Info */}
        <MovieInfo movie={Movie} />
        <br />
        {/* Actors Grid */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Favorite
            movieInfo={Movie}
            movieId={movieId}
            userFrom={localStorage.getItem("userId")}
          />
        </div>
        <h2
          style={{
            textAlign: "center",
            padding: "10px",
            fontSize: "2rem",
          }}
        >
          출연진
        </h2>
        <hr style={{ marginBottom: "14px" }} />

        <Row
          gutter={[16, 16]}
          justify="space-around"
          align="middle"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {Casts &&
            Casts.map((cast, index) => (
              <GridCards
                image={
                  cast.profile_path
                    ? `${IMAGE_BASE_URL}w500/${cast.profile_path}`
                    : null
                }
                characterName={cast.name}
                key={index}
              />
            ))}
        </Row>
      </div>
    </div>
  );
}

export default MovieDetail;
