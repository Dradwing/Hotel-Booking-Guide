import React from "react";
import Cardforhotellist from "../Cards/cardforhotellist";
import axios from "axios";
import Sortby from "./sortby";
import Loader from "react-loader-spinner";
import NotFound from "../notfound/notfound";

function Hotellist(props) {
  //state for sorting
  const [sortby, setsortby] = React.useState("BEST_SELLER");
  const query = props.cityname;
  //const sortby = props.sortby;
  const guestsnumber = props.guestsnumber;
  const startdate = props.startdate;
  const enddate = props.enddate;
  const accomodation = props.accomodation;
  const facilities = props.facilities;
  const starrating = props.starrating;
  const guestsrating = props.guestsrating;

  const themes = props.themes;
  const [destinationId, setdestinationId] = React.useState("");
  const [hotelslist, sethotelslist] = React.useState(["load"]);
  const [placename, setplacename] = React.useState("");

  React.useEffect(() => {
    fetchid();
  }, [query]);
  React.useEffect(() => {
    fetchdata();
  }, [
    destinationId,
    sortby,
    guestsnumber,
    startdate,
    enddate,
    accomodation,
    facilities,
    starrating,
    themes,
    guestsrating,
  ]);

  var options = {
    method: "GET",
    url: "https://hotels-com-provider.p.rapidapi.com/v1/destinations/search",
    params: { query: query, locale: "en_US", currency: "INR" },
    headers: {
      "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
      "x-rapidapi-key": "79582c425fmsh2811090fd81c971p18dfd6jsn8e595f7e0bb1",
    },
  };
  var options2 = {
    method: "GET",
    url: "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search",
    params: {
      destination_id: destinationId,
      page_number: 1,
      checkin_date: startdate,
      checkout_date: enddate,
      adults_number: guestsnumber,
      sort_order: sortby,
      locale: "en_US",
      currency: "INR",
      accommodation_ids: accomodation ? accomodation : undefined,
      amenity_ids: facilities ? facilities : undefined,
      star_rating_ids: starrating ? starrating : undefined,
      guest_rating_min: guestsrating ? guestsrating : 1,
      theme_ids: themes ? themes : undefined,
    },
    headers: {
      "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
      "x-rapidapi-key": "79582c425fmsh2811090fd81c971p18dfd6jsn8e595f7e0bb1",
    },
  };

  var fetchid = () => {
    const source = axios.CancelToken.source();
    axios
      .request(options, {
        cancelToken: source.token,
      })
      .then(function (response) {
        if (response.data.suggestions[0].entities[0])
          setdestinationId(
            parseInt(response.data.suggestions[0].entities[0].destinationId)
          );
        else {
          sethotelslist(["notfound"]);
        }
      })
      .catch(function (error) {
        if (axios.isCancel(error)) {
        } else {
          console.error(error);
          sethotelslist(["notfound"]);
        }
      });
    return () => {
      source.cancel();
    };
  };

  var fetchdata = () => {
    const source = axios.CancelToken.source();
    if (destinationId) {
      axios
        .request(options2, {
          cancelToken: source.token,
        })
        .then(function (response) {
          sethotelslist(response.data.searchResults.results);
          setplacename(response.data.header);
        })
        .catch(function (error) {
          if (axios.isCancel(error)) {
          } else console.error(error + "some error");
        });
      return () => {
        source.cancel();
      };
    }
  };
  if (hotelslist[0] === "load") {
    return (
      <div className="loaderforlist">
        <Loader type="Bars" color="#0d6efd" height={100} width={100} />
      </div>
    );
  }
  if (hotelslist[0] === "notfound" || hotelslist === undefined) {
    return <NotFound />;
  }
  return (
    <>
      <h1>{placename}</h1>
      <Sortby setsortby={setsortby} />
      <p className="onlydesktop">
        * Filters are available only for desktop site.
      </p>
      <hr />
      <div className="hotellist">
        {hotelslist.map((hotelslist) =>
          Createcardforhotellist(
            hotelslist,
            guestsnumber,
            startdate,
            enddate,
            query,
            props.signedIn
          )
        )}
      </div>
    </>
  );
}
function Createcardforhotellist(
  hotelslist,
  guestsnumber,
  startdate,
  enddate,
  query,
  signedIn
) {
  if (hotelslist.length < 2 || hotelslist.starRating === 0.0) {
    return;
  }
  var guestsrating;
  var remark;
  var number;
  if (hotelslist.guestReviews === undefined) {
    guestsrating = 0.0;
    remark = "NA";
    number = 0;
  } else {
    guestsrating = hotelslist.guestReviews.rating;
    remark = hotelslist.guestReviews.badgeText;
    number = hotelslist.guestReviews.total;
  }
  return (
    <>
      <Cardforhotellist
        image={
          hotelslist.optimizedThumbUrls
            ? hotelslist.optimizedThumbUrls.srpDesktop
            : null
        }
        name={hotelslist.name}
        starRating={hotelslist.starRating}
        address={hotelslist.address.streetAddress}
        locality={hotelslist.address.locality}
        region={hotelslist.address.region}
        distance1={hotelslist.landmarks[0].distance}
        label1={hotelslist.landmarks[0].label}
        distance2={
          hotelslist.landmarks.length > 1
            ? hotelslist.landmarks[1].distance
            : null
        }
        label2={
          hotelslist.landmarks.length > 1 ? hotelslist.landmarks[1].label : null
        }
        price={hotelslist.ratePlan.price.current}
        totalPrice={hotelslist.ratePlan.price.fullyBundledPricePerStay}
        rating={guestsrating}
        gnumber={guestsnumber}
        startdate={startdate}
        enddate={enddate}
        numberofreviews={number}
        remark={remark}
        hotelid={hotelslist.id}
        cancellation={
          hotelslist.ratePlan.features
            ? hotelslist.ratePlan.features.freeCancellation === true
              ? "Free Cancellation"
              : ""
            : ""
        }
        payment={
          hotelslist.ratePlan.features
            ? hotelslist.ratePlan.features.paymentPreference === true
              ? "No pre payment needed"
              : ""
            : ""
        }
        cc={
          hotelslist.ratePlan.features
            ? hotelslist.ratePlan.features.noCCRequired === true
              ? "No CC required"
              : ""
            : ""
        }
        city={query}
      />
    </>
  );
}
export default Hotellist;
