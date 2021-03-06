import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";

function Cardforpast(props) {
  const deleteCard = (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.style.display = "none";
    var optionsforhistory = {
      method: "DELETE",
      url: "/api/v1/users/deleteHistory",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        history: {
          _id: props.history._id,
        },
      },
    };
    axios(optionsforhistory)
      .then((res) => {
        props.sethistory(res.data.data.user.history);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Link
      style={{ textDecoration: "inherit", color: "inherit" }}
      to={{
        pathname: "/details",
        state: {
          name: props.history.place,
          guestsnumber: 2,
          startdate: moment().format("YYYY-MM-DD"),
          enddate: moment().add(1, "days").format("YYYY-MM-DD"),
          hotel_id: props.history.hotelId,
          image: "",
          place: "",
          starRating: 0,
          rating: 0,
          badge: "",
          reviewss: "",
          namee: "",
        },
      }}
    >
      <div className="cardforpast">
        <img
          src={props.history.image}
          alt="Not available"
          className="imageforcard"
        />
        <div style={{ paddingTop: "15px", whiteSpace: "90%" }}>
          <p
            style={{
              fontSize: "150%",
              marginBottom: "5px",
              lineHeight: "95%",
              whiteSpace: "initial",
            }}
          >
            {props.history.hotelName}
          </p>
          <p
            style={{
              color: "crimson",
              fontSize: "120%",
              marginBottom: "10px",
              fontWeight: "500",
            }}
          >
            {props.history.starRating}-star
          </p>
          <p style={{ fontSize: "90%", marginBottom: "10px" }}>
            {props.history.place}
          </p>
          <p
            style={{
              fontSize: "large",
              margin: 0,
              color: "black",
              fontWeight: "550",
              backgroundColor: "#efebe9",
              padding: "5px 10px",
              borderBottomRightRadius: "7px",
              borderTopLeftRadius: "7px",
              borderTopRightRadius: "3px",
              display: "inline-block",
            }}
          >
            {props.history.rating}
          </p>{" "}
          <p
            style={{
              fontSize: "large",
              margin: 0,
              display: "inline",
              color: "black",
              fontWeight: "550",
            }}
          >
            {props.history.badge}
          </p>
          <p style={{ fontSize: "80%" }}>{props.history.reviews} reviews</p>
        </div>
        <p
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            display: "inline",
            color: "white",
            backgroundColor: "inherit",
            fontSize: "x-large",
          }}
          onClick={(e) => deleteCard(e)}
        >
          <i class="fas fa-times-circle"></i>
        </p>
      </div>
    </Link>
  );
}

export default Cardforpast;
