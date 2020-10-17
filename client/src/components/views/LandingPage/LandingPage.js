import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "./Sections/MainImage";
import GridCards from "../commons/GridCards";
import { Row } from "antd";

function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${
    currentPage + 1
  }`;

  useEffect(() => {
    fetchMovies(endpoint);
  }, []);

  const loadMoreItems = () => {
    fetchMovies(endpoint);
  };

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        setMovies([...Movies, ...response.results]);
        setMainMovieImage(response.results[0]);
        setCurrentPage(response.page);
      });
    fetch(`${API_URL}movie/577922?api_key=${API_KEY}&language=ko-KR`)
      .then((response) => response.json())
      .then((response) => {
        setMainMovieImage(response);
      });
  };

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {/* main image */}
      {MainMovieImage && (
        <MainImage
          image={`${IMAGE_BASE_URL}original/${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.title}
          text={MainMovieImage.overview}
        />
      )}
      <div style={{ width: "75%", margin: "1rem auto" }}>
        <h2>Movies by latest</h2>
        <hr />
        {/* Movie Grid Cards */}
        <Row
          gutter={[16, 16]}
          justify="space-around"
          align="middle"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {Movies &&
            Movies.map((movie, index) => (
              <GridCards
                landingPage
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}w500/${movie.poster_path}`
                    : null
                }
                movieId={movie.id}
                movieName={movie.original_title}
                key={index}
              />
            ))}
        </Row>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={loadMoreItems}>Load More</button>
      </div>
    </div>
  );
}

export default LandingPage;
