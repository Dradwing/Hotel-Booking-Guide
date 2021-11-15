import React from "react";
import parse from "html-react-parser";
function Header(props) {
  return (
    <div className="header">
      <div>
        <p
          style={{
            fontSize: "215%",
            display: "inline",
            fontWeight: "600",
            lineHeight: "78%",
          }}
        >
          {props.name}
        </p>
        <p
          style={{
            fontSize: "x-large",
            fontWeight: "bold",
            display: "inline",
            color: "crimson",
            marginLeft: "10px",
          }}
        >
          {props.starrating}-star
        </p>
        <p
          style={{
            fontSize: "normal",
            margin: 0,
            marginTop: "-2px",
            marginBottom: "5px",
          }}
        >
          {props.address}
        </p>
        <div>{parse(`${props.tagline}`)}</div>
        <br />
        {props.free.map((free) => {
          return (
            <p
              style={{
                margin: " 0 5px 0 0",
                display: "inline",
                borderRadius: "15px",
                backgroundColor: "forestgreen",
                color: "white",
                padding: "3px 10px",
              }}
            >
              <i
                class="fas fa-check"
                style={{
                  paddingRight: "5px",
                  fontWeight: "normal",
                }}
              ></i>
              {free}
            </p>
          );
        })}
      </div>
      <div className="rightdata">
        <p
          style={{
            fontSize: "180%",
            margin: 0,
            textAlign: "right",
            fontWeight: "bold",
            color: "crimson",
          }}
        >
          {props.price}
        </p>
        <p
          style={{
            fontSize: "small",
            margin: "0",
            marginTop: "-8px",
            textAlign: "right",
          }}
        >
          per room per night
        </p>
        <p
          style={{
            fontSize: "88%",
            margin: 0,
            color: "black",
            fontWeight: "bold",
            textAlign: "right",
          }}
        >
          {props.totalPrice.includes("nights") ||
          props.totalPrice.includes("guests")
            ? props.totalPrice
                .replace("total", "")
                .replaceAll("&nbsp;", " ")
                .replace("1 room,", "")
            : undefined}
        </p>
        <p
          style={{
            fontSize: "small",
            margin: 0,
            marginTop: "-5px",
            textAlign: "right",
          }}
        >
          exclusive of taxes & fees
        </p>

        {/* <button
          style={{
            backgroundColor: "dodgerblue",
            color: "white",
            fontWeight: "bold",
            fontSize: "large",
            marginTop: "10px",
            padding: "5px 30px",
            float: "right",
            border: "none",
            borderRadius: "30px",
          }}
        >
          Room Details
        </button> */}
      </div>
    </div>
  );
}
export default Header;
