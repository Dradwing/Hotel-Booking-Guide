import React from "react";
import { ProgressBar } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cardforreviews from "../Cards/cardforreviews";

function Rating(props) {
  const { innerWidth: width, innerHeight: height } = window;

  var settings = {
    infinite: true,
    speed: 500,
    slidesPerRow: 1,
    slidesToShow: width > 768 ? 3 : 1,
    slidesToScroll: 1,
  };
  return (
    <div className="rating">
      <p
        style={{
          textAlign: "center",
          fontSize: "165%",
          fontWeight: "550",
        }}
      >
        Rating and Reviews
      </p>

      <div className="rcategory">
        <div className="ratingbox">
          <div className="actualrating">
            <p
              style={{
                fontSize: "xx-large",
                margin: 0,
                color: "rgb(15,228,2)",
                textAlign: "center",
              }}
            >
              {props.reviews.overview.overall}
            </p>
          </div>
          <p
            style={{
              fontSize: "x-large",
              color: "white",
              textAlign: "center",
            }}
          >
            {props.reviews.overview.qualitativeBadgeText}
          </p>
          <p
            style={{
              fontSize: "large",
              margin: 0,
              color: "white",
              textAlign: "center",
            }}
          >
            {props.reviews.overview.totalCount} reviews
          </p>
        </div>

        <div className="starbox">
          <div>
            <p style={{ margin: 0, display: "inline", marginLeft: "6px" }}>
              10 <i class="fas fa-star" style={{ color: "orange" }}></i>
            </p>
            <ProgressBar
              variant="success"
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={
                (props.reviews.overview.overallScoreBreakdown[0].amount /
                  props.reviews.overview.totalCount) *
                100
              }
            />
            <p style={{ margin: 0, display: "inline" }}>
              {props.reviews.overview.overallScoreBreakdown[0].amount}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, display: "inline" }}>
              8-9 <i class="fas fa-star" style={{ color: "orange" }}></i>
            </p>
            <ProgressBar
              variant="primary"
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={
                (props.reviews.overview.overallScoreBreakdown[1].amount /
                  props.reviews.overview.totalCount) *
                100
              }
            />
            <p style={{ margin: 0, display: "inline" }}>
              {props.reviews.overview.overallScoreBreakdown[1].amount}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, display: "inline" }}>
              6-7 <i class="fas fa-star" style={{ color: "orange" }}></i>
            </p>
            <ProgressBar
              variant="info"
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={
                (props.reviews.overview.overallScoreBreakdown[2].amount /
                  props.reviews.overview.totalCount) *
                100
              }
            />
            <p style={{ margin: 0, display: "inline" }}>
              {props.reviews.overview.overallScoreBreakdown[2].amount}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, display: "inline" }}>
              4-5 <i class="fas fa-star" style={{ color: "orange" }}></i>
            </p>
            <ProgressBar
              variant="warning"
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={
                (props.reviews.overview.overallScoreBreakdown[3].amount /
                  props.reviews.overview.totalCount) *
                100
              }
            />
            <p style={{ margin: 0, display: "inline" }}>
              {props.reviews.overview.overallScoreBreakdown[3].amount}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, display: "inline" }}>
              1-3 <i class="fas fa-star" style={{ color: "orange" }}></i>
            </p>
            <ProgressBar
              variant="danger"
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={
                (props.reviews.overview.overallScoreBreakdown[4].amount /
                  props.reviews.overview.totalCount) *
                100
              }
            />
            <p style={{ margin: 0, display: "inline" }}>
              {props.reviews.overview.overallScoreBreakdown[4].amount}
            </p>
          </div>
        </div>
        <div className="categorybox">
          <div style={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
            <p
              style={{
                margin: 0,
                fontSize: "120%",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Categories:
            </p>
          </div>
          <div>
            <p style={{ margin: 0 }}>Hotel Service</p>
            <ProgressBar
              variant={
                props.reviews.overview.hotelService < 4
                  ? "danger"
                  : props.reviews.overview.hotelService < 6
                  ? "warning"
                  : props.reviews.overview.hotelService < 8
                  ? "info"
                  : props.reviews.overview.hotelService < 9
                  ? "primary"
                  : "success"
              }
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={props.reviews.overview.hotelService * 10}
            />

            <p style={{ display: "inline", marginLeft: "5px" }}>
              {props.reviews.overview.hotelService}
            </p>
          </div>
          <div>
            <p style={{ margin: 0 }}>Room Comfort</p>
            <ProgressBar
              variant={
                props.reviews.overview.roomComfort < 4
                  ? "danger"
                  : props.reviews.overview.roomComfort < 6
                  ? "warning"
                  : props.reviews.overview.roomComfort < 8
                  ? "info"
                  : props.reviews.overview.roomComfort < 9
                  ? "primary"
                  : "success"
              }
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={props.reviews.overview.roomComfort * 10}
            />

            <p style={{ display: "inline", marginLeft: "5px" }}>
              {props.reviews.overview.roomComfort}
            </p>
          </div>
          <div>
            <p style={{ margin: 0 }}>Hotel Condition</p>
            <ProgressBar
              variant={
                props.reviews.overview.hotelCondition < 4
                  ? "danger"
                  : props.reviews.overview.hotelCondition < 6
                  ? "warning"
                  : props.reviews.overview.hotelCondition < 8
                  ? "info"
                  : props.reviews.overview.hotelCondition < 9
                  ? "primary"
                  : "success"
              }
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={props.reviews.overview.hotelCondition * 10}
            />

            <p style={{ display: "inline", marginLeft: "5px" }}>
              {props.reviews.overview.hotelCondition}
            </p>
          </div>
          <div>
            <p style={{ margin: 0 }}>Cleanliness</p>
            <ProgressBar
              variant={
                props.reviews.overview.cleanliness < 4
                  ? "danger"
                  : props.reviews.overview.cleanliness < 6
                  ? "warning"
                  : props.reviews.overview.cleanliness < 8
                  ? "info"
                  : props.reviews.overview.cleanliness < 9
                  ? "primary"
                  : "success"
              }
              style={{
                borderRadius: "15px",
                width: "75%",
                margin: "0 5px",
                display: "inline-flex",
              }}
              now={props.reviews.overview.cleanliness * 10}
            />

            <p style={{ display: "inline", marginLeft: "5px" }}>
              {props.reviews.overview.cleanliness}
            </p>
          </div>
        </div>
      </div>
      <div className="reviewslider" style={{ margin: "40px 0" }}>
        {props.reviews.groupReview[0].reviews.length > 4 ? (
          <Slider {...settings}>
            {props.reviews.groupReview[0].reviews.map((review) => {
              if (review.recommendedBy === "" || review.summary === "")
                return null;
              return (
                <Cardforreviews
                  name={review.recommendedBy}
                  rating={review.rating}
                  badge={review.qualitativeBadgeText}
                  title={review.title}
                  summary={review.summary}
                />
              );
            })}
            {props.reviews.groupReview[1] !== undefined
              ? props.reviews.groupReview[1].reviews.map((review) => {
                  if (review.recommendedBy === "" || review.summary === "")
                    return null;
                  return (
                    <Cardforreviews
                      name={review.recommendedBy}
                      rating={review.rating}
                      badge={review.qualitativeBadgeText}
                      title={review.title}
                      summary={review.summary}
                    />
                  );
                })
              : null}
          </Slider>
        ) : (
          <p
            style={{ textAlign: "center", fontSize: "xx-large", color: "red" }}
          >
            Oops! No reviews yet.
          </p>
        )}
      </div>
    </div>
  );
}
export default Rating;
