import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Popover } from "antd";
import "./favorite.css";
import { IMAGE_BASE_URL } from "../../Config";

function FavoritePage() {
  const [Favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavoredMovie();
  }, []);

  const fetchFavoredMovie = () => {
    Axios.post("/api/favorite/getFavoriteMovie", {
      userFrom: localStorage.getItem("userId"),
    }).then((response) => {
      if (response.data.success) {
        setFavorites(response.data.favorites);
        console.log(response.data);
      } else {
        alert("영화 정보를 가져오는데 실패했습니다.");
      }
    });
  };

  const onClickDelete = (movieId, userFrom) => {
    const variables = {
      movieId,
      userFrom,
    };
    Axios.post("/api/favorite/removeFromFavorite", variables).then(
      (response) => {
        if (response.data.success) {
          fetchFavoredMovie();
        } else {
          alert("좋아요 리스트에서 지우는데 실패했습니다.");
        }
      }
    );
  };

  const renderCards = Favorites.map((favorite, index) => {
    const content = (
      <div>
        {favorite.moviePost ? (
          <img
            src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`}
            alt={favorite.movieTitle}
          />
        ) : (
          "포스터가 없습니다."
        )}
      </div>
    );
    return (
      <tr key={index}>
        <Popover content={content} title={`${favorite.movieTitle}`}>
          <td>{favorite.movieTitle}</td>
        </Popover>
        <td>{favorite.movieRuntime} 분</td>
        <td>
          <Button
            onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}
          >
            좋아요 해제
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <h2>좋아요를 표시한 영화</h2>
      <hr />
      <table>
        <thead>
          <th>영화 제목</th>
          <th>런타임</th>
          <th>좋아요 해제</th>
        </thead>
        <tbody>{renderCards}</tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
