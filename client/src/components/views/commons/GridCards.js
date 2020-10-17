import React from "react";
import { Col } from "antd";
import no_picture from "../../../media/no_picture.jpg";

function GridCards(props) {
  if (props.landingPage) {
    return (
      <Col lg={6} md={8} sm={12} xs={24}>
        <div style={{ position: "relative" }}>
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{
                width: "100%",
                height: "auto",
              }}
              src={props.image}
              alt={props.movieName}
            />
          </a>
        </div>
      </Col>
    );
  } else {
    return (
      <Col xl={4} lg={6} md={8} sm={12} xs={12}>
        <div style={{ position: "relative", height: "100%" }}>
          {props.image ? (
            <img
              style={{
                width: "100%",
                height: "auto",
                position: "relative",
                zIndex: "1",
              }}
              src={props.image}
              alt={props.characterName}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                zIndex: "1",
                backgroundColor: "#ababab",
                position: "relative",
              }}
            >
              <img
                src={no_picture}
                alt="no_picture"
                style={{
                  width: "100%",
                  height: "auto",
                  zIndex: "1",
                  verticalAlign: "middle",
                }}
              />
            </div>
          )}
          <span
            style={{
              display: "block",
              position: "absolute",
              backgroundColor: "rgba( 0, 0, 0, 0.5 )",
              width: "100%",
              height: "20%",
              zIndex: "2",
              bottom: "0",
              color: "white",
              textAlign: "center",
              fontSize: "1.1rem",
              lineHeight: "250%",
            }}
          >
            {props.characterName}
          </span>
        </div>
      </Col>
    );
  }
}

export default GridCards;
