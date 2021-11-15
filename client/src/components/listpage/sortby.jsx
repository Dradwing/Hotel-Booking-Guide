import React from "react";

function Sortby(props) {
  const [activeclass, setactiveclass] = React.useState("sort1");

  const bestseller = (e) => {
    props.setsortby(e.target.value);
    setactiveclass("sort1");
    e.target.parentElement.children[1].selectedIndex = 0;
    e.target.parentElement.children[3].selectedIndex = 0;
  };
  const starrating = (e) => {
    if (e.target.name === "starrating") {
      props.setsortby(e.target.value);
      setactiveclass("sort2");
    }
  };
  const guestsrating = (e) => {
    props.setsortby(e.target.value);
    setactiveclass("sort3");
    e.target.parentElement.children[1].selectedIndex = 0;
    e.target.parentElement.children[3].selectedIndex = 0;
  };
  const price = (e) => {
    if (e.target.name === "price") {
      props.setsortby(e.target.value);
      setactiveclass("sort4");
    }
  };

  return (
    <div className="sortby" style={{ marginTop: "20px" }}>
      <p
        style={{
          fontSize: "normal",
          fontWeight: "bold",
          color: "black",
          display: "inline-block",
          margin: 0,
          marginRight: "10px",
        }}
      >
        Sort By
      </p>
      <div className="sorts" style={{ display: "inline" }}>
        <button
          className={activeclass === "sort1" ? activeclass : "sort"}
          onClick={bestseller}
          value="BEST_SELLER"
        >
          Best Seller
        </button>
        <select
          name="starrating"
          className={activeclass === "sort2" ? activeclass : "sort"}
          onChange={starrating}
        >
          <option value="bosee" style={{ display: "none" }}>
            Star Rating
          </option>
          <option value="STAR_RATING_HIGHEST_FIRST">Stars(high to low)</option>
          <option value="STAR_RATING_LOWEST_FIRST">Stars(low to high)</option>
        </select>
        <button
          className={activeclass === "sort3" ? activeclass : "sort"}
          onClick={guestsrating}
          value="GUEST_RATING"
        >
          Guest Rating
        </button>
        <select
          name="price"
          className={activeclass === "sort4" ? activeclass : "sort"}
          onChange={price}
        >
          <option value="voss" style={{ display: "none" }}>
            Price
          </option>
          <option value="PRICE_HIGHEST_FIRST">Price(high to low)</option>
          <option value="PRICE">Price(low to high)</option>
        </select>
      </div>
    </div>
  );
}

export default Sortby;
