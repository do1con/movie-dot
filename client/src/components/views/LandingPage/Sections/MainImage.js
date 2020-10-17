import React from "react";
import { FaRegIdBadge } from "react-icons/fa";
import LinesEllipsis from "react-lines-ellipsis";

function MainImage(props) {
  return (
    <div
      style={{
        backgroundImage: `url('${props.image}')`,
        height: "350px",
        backgroundSize: "cover",
        backgroundPosition: "center, center",
        width: "100%",
        position: "relative",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        marginTop: "-16px",
      }}
    >
      <div style={{ width: "75%", margin: "1rem auto" }}>
        <div
          style={{
            position: "absolute",
            maxWidth: "500px",
            bottom: "2rem",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "3.6rem",
              textShadow: "0px 0px 6.5px black",
            }}
          >
            {" "}
            {props.title}{" "}
          </h2>
          {props.text && (
            <LinesEllipsis
              text={props.text}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
              style={{
                color: "white",
                fontSize: "1.2rem",
                textShadow: "0px 0px 5px black",
                backgroundColor: "rgba(0,0,0, 0.2)",
                padding: "6px",
                wordBreak: "keep-all",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainImage;
