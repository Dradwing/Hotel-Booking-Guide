import React from "react";
import Hotellist from "../components/listpage/hotellist";
import Filtersforlist from "../components/listpage/filtersforlist";
import { useLocation } from "react-router-dom";
import Realfilters from "../components/listpage/realfilters";
import Footer from "../components/footer/footer";
function List(props) {
  const location = useLocation();
  const { cityname, startdate, enddate, guestsnumber } = location.state;
  //states for filters
  const [starrating, setstarrating] = React.useState("");
  const [guestsrating, setguestsrating] = React.useState(1);
  const [accomodation, setaccomodation] = React.useState("");
  const [facilities, setfacilities] = React.useState("");
  const [themes, setthemes] = React.useState("");
  return (
    <div className="list">
      <div className="contentforhotellist">
        <div>
          <Filtersforlist
            name={cityname}
            startdate={startdate}
            enddate={enddate}
            guestsnumber={guestsnumber}
          />
          <Realfilters
            setstarrating={setstarrating}
            setguestsrating={setguestsrating}
            setaccomodation={setaccomodation}
            setfacilities={setfacilities}
            setthemes={setthemes}
          />
        </div>
        <div style={{ position: "relative" }}>
          {
            <Hotellist
              cityname={cityname}
              startdate={startdate}
              enddate={enddate}
              guestsnumber={guestsnumber}
              starrating={starrating}
              guestsrating={guestsrating}
              accomodation={accomodation}
              facilities={facilities}
              themes={themes}
            />
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default List;
