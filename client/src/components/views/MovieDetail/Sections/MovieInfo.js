import { Descriptions } from "antd";
import React, { useEffect } from "react";

function MovieInfo(props) {
  const { movie } = props;
  const numberWithCommas = (x) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  useEffect(() => {
    /* console.log(numberWithCommas(12421523525));
    console.log(props);
    console.log(movie); */
  }, [movie]);
  return (
    <Descriptions bordered style={{ wordBreak: "keep-all" }}>
      <Descriptions.Item label="원제" style={{ wordBreak: "keep-all" }}>
        {movie.original_title}
      </Descriptions.Item>
      <Descriptions.Item
        label="개봉일 / 개봉예정일"
        style={{ wordBreak: "keep-all" }}
      >
        {movie.release_date}
      </Descriptions.Item>
      <Descriptions.Item label="첫주 매출" style={{ wordBreak: "keep-all" }}>
        {movie.revenue
          ? numberWithCommas(`${movie.revenue}`) + "$"
          : "집계 안됨"}
      </Descriptions.Item>
      <Descriptions.Item label="러닝타임" style={{ wordBreak: "keep-all" }}>
        {movie.runtime}분
      </Descriptions.Item>
      <Descriptions.Item label="장르" style={{ wordBreak: "keep-all" }}>
        {movie.genres && movie.genres.map((genre) => `${genre.name} `)}
      </Descriptions.Item>
      <Descriptions.Item label="제작 국가" style={{ wordBreak: "keep-all" }}>
        {movie.production_countries &&
          movie.production_countries.map((country) => `${country.name} `)}
      </Descriptions.Item>
      <Descriptions.Item label="언어" style={{ wordBreak: "keep-all" }}>
        {movie.spoken_languages &&
          movie.spoken_languages.map((language) => `${language.name} `)}
      </Descriptions.Item>
      <Descriptions.Item label="상태" style={{ wordBreak: "keep-all" }}>
        {movie.status == "Released" ? "개봉" : "미개봉(혹은 확인 불가)"}
      </Descriptions.Item>
      <Descriptions.Item label="제작비" style={{ wordBreak: "keep-all" }}>
        {movie.budget ? numberWithCommas(`${movie.budget}`) + "$" : "집계 안됨"}
      </Descriptions.Item>
    </Descriptions>
  );
}

export default MovieInfo;
