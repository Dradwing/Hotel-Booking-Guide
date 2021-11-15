import React from "react";
import Filtersforlist from "../listpage/filtersforlist";

import Slider from "react-slick";

function Starter(props) {
  const { innerWidth: width, innerHeight: height } = window;
  var settings = {
    infinite: true,
    speed: 500,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var images = [];
  props.photos.map((array) => {
    images = [...images, array.mainUrl];
    return null;
  });

  return (
    <div className="starter">
      <div className="left">
        <Filtersforlist
          name={props.city}
          startdate={props.startdate}
          enddate={props.enddate}
          guestsnumber={props.guestsnumber}
        />
      </div>

      <div
        className="imageSliderForDetailsPage"
        style={{
          margin: width > 768 ? "4px 0px" : "20px 0px",
          padding: "0 10px",
          bordeRadius: "30px",
          overflow: "hidden",
        }}
      >
        <Slider
          {...settings}
          style={{
            height: width > 768 ? "470px" : "220px",
          }}
        >
          {images.map((url) => {
            return (
              <img
                src={url}
                alt="Not available"
                style={{
                  height: "100%",
                }}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
export default Starter;
