import React from "react";

function Realfilters(props) {
  var [grating, setgrating] = React.useState(1);
  const clickforaccomodation = (e) => {
    //to make array from HTMLcollection
    var array = Array.from(e.target.parentElement.parentElement.children);
    var temp3 = "";
    var count = 0;
    array.map((element) => {
      if (element.nodeName === "LABEL") {
        var value = element.children[0].value;
        if (element.children[0].checked === true) {
          if (count > 0) {
            temp3 = temp3 + "," + value;
          } else {
            temp3 = temp3 + value;
            count++;
          }
        }
      }
      return 0;
    });
    props.setaccomodation(temp3);
  };

  const clickforfacilities = (e) => {
    //to make array from HTMLcollection
    var array = Array.from(e.target.parentElement.parentElement.children);
    var temp3 = "";
    var count = 0;
    array.map((element) => {
      if (element.nodeName === "LABEL") {
        var value = element.children[0].value;
        if (element.children[0].checked === true) {
          if (count > 0) {
            temp3 = temp3 + "," + value;
          } else {
            temp3 = temp3 + value;
            count++;
          }
        }
      }
      return 0;
    });
  };
  const clickfortheme = (e) => {
    //to make array from HTMLcollection
    var array = Array.from(e.target.parentElement.parentElement.children);
    var temp3 = "";
    var count = 0;
    array.map((element) => {
      if (element.nodeName === "LABEL") {
        var value = element.children[0].value;
        if (element.children[0].checked === true) {
          if (count > 0) {
            temp3 = temp3 + "," + value;
          } else {
            temp3 = temp3 + value;
            count++;
          }
        }
      }
      return 0;
    });
    props.setthemes(temp3);
  };
  const clickforstarrating = (e) => {
    //to make array from HTMLcollection
    var array = Array.from(e.target.parentElement.parentElement.children);
    var temp3 = "";
    var count = 0;
    array.map((element) => {
      if (element.nodeName === "LABEL") {
        var value = element.children[0].value;
        if (element.children[0].checked === true) {
          if (count > 0) {
            temp3 = temp3 + "," + value;
          } else {
            temp3 = temp3 + value;
            count++;
          }
        }
      }
      return 0;
    });
    props.setstarrating(temp3);
  };
  const clickforguestsrating = (e) => {
    props.setguestsrating(e.target.value);
  };
  return (
    <div className="realfilters">
      <hr />
      <p style={{ fontSize: "larger", fontWeight: "625", margin: "0" }}>
        Star Rating
      </p>
      <br />
      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            name="star1"
            value="1"
            onClick={clickforstarrating}
          />
          1-star
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="star2"
            value="2"
            onClick={clickforstarrating}
          />
          2-stars
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="star3"
            value="3"
            onClick={clickforstarrating}
          />
          3-stars
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="star4"
            value="4"
            onClick={clickforstarrating}
          />
          4-stars
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="star5"
            value="5"
            onClick={clickforstarrating}
          />
          5-stars
        </label>

        <br />
      </div>
      <hr />
      <p style={{ fontSize: "larger", fontWeight: "625", margin: "0" }}>
        Guests Rating:({grating}-5)
      </p>
      <br />
      <div className="range">
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          onChange={clickforguestsrating}
          onInput={(e) => {
            setgrating(e.target.value);
          }}
        />
      </div>

      <hr />
      <p style={{ fontSize: "larger", fontWeight: "625", margin: "0" }}>
        Accomodation Type
      </p>
      <br />
      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            name="apartments"
            value="15"
            onClick={clickforaccomodation}
          />
          Apartments
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="guestshouse"
            value="30"
            onClick={clickforaccomodation}
          />
          Guests houses
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="hotels"
            value="1"
            onClick={clickforaccomodation}
          />
          Hotels
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="vacationhomes"
            value="4"
            onClick={clickforaccomodation}
          />
          Vacation homes
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="villas"
            value="14"
            onClick={clickforaccomodation}
          />
          Villas
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="resorts"
            value="3"
            onClick={clickforaccomodation}
          />
          Resorts
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="inns"
            value="8"
            onClick={clickforaccomodation}
          />
          Inns
        </label>

        <br />
      </div>
      <hr />
      <p style={{ fontSize: "larger", fontWeight: "625", margin: "0" }}>
        Facilities
      </p>
      <br />
      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            name="wifi"
            value="527"
            onClick={clickforfacilities}
          />
          Free Wifi
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="smoking"
            value="529"
            onClick={clickforfacilities}
          />
          Non-Smoking
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="breakfast"
            value="2048"
            onClick={clickforfacilities}
          />
          Free Breakfast
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="parking"
            value="134234112"
            onClick={clickforfacilities}
          />
          Free parking
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="pet"
            value="64"
            onClick={clickforfacilities}
          />
          Pet Friendly
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="bathtub"
            value="517"
            onClick={clickforfacilities}
          />
          Bathtub in room
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="bar"
            value="515"
            onClick={clickforfacilities}
          />
          Bar
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="gym"
            value="2"
            onClick={clickforfacilities}
          />
          Gym
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="casino"
            value="2112"
            onClick={clickforfacilities}
          />
          Casino
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="spa"
            value="539"
            onClick={clickforfacilities}
          />
          Spa
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="restaurant"
            value="256"
            onClick={clickforfacilities}
          />
          Restaurant
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="pool"
            value="128"
            onClick={clickforfacilities}
          />
          Pool
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="childcare"
            value="521"
            onClick={clickforfacilities}
          />
          Childcare
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="connecting"
            value="523"
            onClick={clickforfacilities}
          />
          Connecting rooms
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="cribs"
            value="525"
            onClick={clickforfacilities}
          />
          Cribs
        </label>

        <br />
      </div>
      <hr />
      <p style={{ fontSize: "larger", fontWeight: "625", margin: "0" }}>
        Theme
      </p>
      <br />
      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            name="luxury"
            value="15"
            onClick={clickfortheme}
          />
          Luxury
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="romantic"
            value="1"
            onClick={clickfortheme}
          />
          Romantic
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="family"
            value="25"
            onClick={clickfortheme}
          />
          Family-friendly
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="business"
            value="14"
            onClick={clickfortheme}
          />
          Business
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="advanture"
            value="18"
            onClick={clickfortheme}
          />
          Adventure
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="spa"
            value="27"
            onClick={clickfortheme}
          />
          Spa Hotel
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="beach"
            value="6"
            onClick={clickfortheme}
          />
          Beach
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="boutique"
            value="4"
            onClick={clickfortheme}
          />
          Boutique
        </label>

        <br />
      </div>
    </div>
  );
}

export default Realfilters;
