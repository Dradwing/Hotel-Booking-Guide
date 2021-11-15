import React from "react";

function Cardforreviews(props) {
  return (
    <div className="cardforreviews">
      <div className="writer">
        <p
          style={{
            display: "inline-block",
            fontSize: "x-large",
            fontWeight: "600",
          }}
        >
          {props.name}
        </p>
        <p
          style={{
            display: "inline",
            float: "right",
            backgroundColor:
              props.rating < 4
                ? "rgb(220,53,69)"
                : props.rating < 6
                ? "rgb(255,193,7)"
                : props.rating < 8
                ? "rgb(13,202,240)"
                : props.rating < 10
                ? "rgb(13,110,253)"
                : "rgb(25,135,84)",
            color: "white",
            padding: "6px 12px",
            borderRadius: "5px",
          }}
        >
          {props.rating}/10
        </p>
      </div>
      <div className="write">
        <p style={{ margin: "0", fontSize: "large", fontWeight: "500" }}>
          {props.title ? props.title : props.badge}{" "}
        </p>
        <p>{props.summary}</p>
      </div>
    </div>
  );
}
export default Cardforreviews;
