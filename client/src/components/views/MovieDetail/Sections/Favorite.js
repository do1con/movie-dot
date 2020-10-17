import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "antd";

function Favorite(props) {
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.movieInfo.title;
  const moviePost = props.movieInfo.backdrop_path;
  const movieRuntime = props.movieInfo.runtime;

  const [FavoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);

  const variables = {
    userFrom,
    movieId,
    movieTitle,
    moviePost,
    movieRuntime,
  };

  useEffect(() => {
    console.log("props", props);
    console.log("variables", variables);
  });

  const onClickFavorite = () => {
    if (Favorited) {
      Axios.post("/api/favorite/removeFromFavorite", variables).then(
        (response) => {
          if (response.data.success) {
            setFavoriteNumber(FavoriteNumber - 1);
            setFavorited(!Favorited);
          } else {
            alert("좋아요 리스트에서 제거하는 것을 실패했습니다.");
          }
        }
      );
    } else {
      Axios.post("/api/favorite/addToFavorite", variables).then((response) => {
        console.log("지금 추가합니다.", variables);
        if (response.data.success) {
          setFavoriteNumber(FavoriteNumber + 1);
          setFavorited(!Favorited);
        } else {
          alert("좋아요 리스트에서 추가하는 것을 실패했습니다.");
        }
      });
    }
  };

  useEffect(() => {
    Axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      console.log("favoriteNumber", response.data);
      setFavoriteNumber(response.data.favoriteNumber);
      if (response.data.success) {
      } else {
        alert("숫자 정보를 가져오는데 실패 했습니다.");
      }
    });

    Axios.post("/api/favorite/favorited", variables).then((response) => {
      console.log("favorited", response.data);
      setFavorited(response.data.favorited);
      if (response.data.success) {
      } else {
        alert("정보를 가져오는데 실패 했습니다.");
      }
    });
  }, []);

  return (
    <div>
      이 영화를 좋아하는 사람들 : {FavoriteNumber}
      <Button
        type={Favorited ? "" : "primary"}
        style={{ marginLeft: "10px" }}
        onClick={onClickFavorite}
      >
        {Favorited ? "좋아요 해제" : "좋아요!"}
      </Button>
    </div>
  );
}

export default Favorite;
