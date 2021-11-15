import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
function Cardforpopular(props) {
  return (
    <Link
      to={{
        pathname: "/search",
        state: {
          cityname: props.name,
          startdate: moment().format("yyyy-MM-DD"),
          enddate: moment().add(1, "days").format("yyyy-MM-DD"),
          guestsnumber: 2,
        },
      }}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="popularcard">
        <img src={props.url} alt="not available" />
        <p style={{ fontWeight: "bolder" }}>{props.name}</p>
      </div>
    </Link>
  );
}
export default Cardforpopular;
