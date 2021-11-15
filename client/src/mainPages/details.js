import React from "react";
import Header from "../components/detailspage/header";
import Starter from "../components/detailspage/starter";
import Rating from "../components/detailspage/rating";
import Highlights from "../components/detailspage/highlights";
import Inhotel from "../components/detailspage/inhotel";
import Inroom from "../components/detailspage/inroom";
import Footer from "../components/footer/footer";
import Loader from "react-loader-spinner";

import { useLocation } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
function Details(props) {
  let history = [];
  const location = useLocation();
  const {
    name,
    startdate,
    enddate,
    guestsnumber,
    hotel_id,
    image,
    badge,
    rating,
    starRating,
    reviewss,
    place,
    namee,
  } = location.state;
  const [adults_number, setadults_number] = React.useState(guestsnumber);
  const [checkin, setcheckin] = React.useState(startdate);
  const [checkout, setcheckout] = React.useState(enddate);

  const [details, setdetails] = React.useState({});
  const [photos, setphotos] = React.useState([]);
  const [reviews, setreviews] = React.useState({});
  //const images = [];

  var optionsfordetails = {
    method: "GET",
    url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/booking-details",
    params: {
      adults_number: adults_number,
      checkin_date: checkin,
      locale: "en_US",
      currency: "INR",
      hotel_id: hotel_id,
      checkout_date: checkout,
    },
    headers: {
      "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
      "x-rapidapi-key": "79582c425fmsh2811090fd81c971p18dfd6jsn8e595f7e0bb1",
    },
  };
  var optionsforphotos = {
    method: "GET",
    url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/photos",
    params: { hotel_id: hotel_id },
    headers: {
      "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
      "x-rapidapi-key": "79582c425fmsh2811090fd81c971p18dfd6jsn8e595f7e0bb1",
    },
  };
  var optionsforreviews = {
    method: "GET",
    url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/reviews",
    params: { locale: "en_US", hotel_id: hotel_id, page_number: "1" },
    headers: {
      "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
      "x-rapidapi-key": "79582c425fmsh2811090fd81c971p18dfd6jsn8e595f7e0bb1",
    },
  };

  var optionsforhistory = {
    method: "PATCH",
    url: "/api/v1/users/addHistory",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      history: {
        hotelId: hotel_id,
        image: image,
        hotelName: namee,
        place: place,
        starRating: starRating,
        rating: rating,
        badge: badge,
        reviews: reviewss,
      },
    },
  };

  React.useEffect(() => {
    fetchdetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkin, checkout, adults_number, hotel_id]);

  React.useEffect(() => {
    fetchphotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotel_id]);

  React.useEffect(() => {
    fetchreviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotel_id]);

  React.useEffect(() => {
    createhistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotel_id]);

  const fetchdetails = () => {
    axios
      .request(optionsfordetails)
      .then(function (response) {
        setdetails(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const fetchphotos = () => {
    axios
      .request(optionsforphotos)
      .then(function (response) {
        setphotos(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const fetchreviews = () => {
    axios
      .request(optionsforreviews)
      .then(function (response) {
        setreviews(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const createhistory = () => {
    if (props.signedIn && image !== "") {
      axios(optionsforhistory)
        .then((res) => {
          history = res.data.data.user.history;
        })
        .catch((err) => console.log(err));
    }
  };

  React.useEffect(() => {
    return () => {
      if (history.length > 0) props.sethistory(history);
      // componentwillunmount in functional component.
      // Anything in here is fired on component unmount.
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    details.address === undefined ||
    reviews.overview === undefined ||
    photos.length < 2
  )
    return (
      <div className="loaderforlist">
        <Loader type="Bars" color="#0d6efd" height={100} width={100} />
      </div>
    );

  return (
    <>
      <div className="details">
        <Header
          name={details.name}
          address={details.address.fullAddress}
          starrating={details.starRating}
          price={details.featuredPrice.currentPrice.formatted}
          totalPrice={details.featuredPrice.fullyBundledPricePerStay}
          tagline={details.tagline[0]}
          free={details.freebies}
        />
        <hr />
        <Starter
          photos={photos}
          city={name}
          startdate={startdate}
          enddate={enddate}
          guestsnumber={guestsnumber}
        />
        <hr />
        <Rating reviews={reviews} />
        <hr />
        <Highlights array={details.overview.overviewSections} />
        <hr />
        <Inhotel array={details.amenities[0].listItems} />
        <hr />
        <Inroom array={details.amenities[1].listItems} />
        <hr />
        <div className="policies">
          <p
            style={{
              textAlign: "center",
              fontSize: "165%",
              fontWeight: "550",
            }}
          >
            Policies
          </p>
          <div className="policypara">
            {parse(`${details.smallPrint.policies}`)}
          </div>
        </div>
        <hr />
      </div>
      <Footer />
    </>
  );
}
export default Details;
