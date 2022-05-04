import "./DetailedRestaurant.css";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  ImageList,
  Rating,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Review from "../Review/Review";

export function DetailedRestaurant(props) {
  const [reviews, setReviews] = useState([]);
  const [userReview, setUserReview] = useState("");
  const [userRating, setUserRating] = useState(0.0);

  useEffect(() => {
    fetch(`http://localhost:8080/api/reviews/getByRestaurant/${props.pk}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  function handleUserReviewChange(event) {
    setUserReview(event.target.value);
  }

  function handleUserRatingChange(event) {
    setUserRating(event.target.value);
  }

  function handleSubmitReview(event) {
    console.log(userReview);
    console.log(userRating);
    console.log(
      "once the backend is working, use api to insert this into the database."
    );
  }

  function cleanEntries(address) {
    let fixedAddress = address.toString();
    fixedAddress = fixedAddress.replace(/,/g, "%2C");
    fixedAddress = fixedAddress.replace(/\s/g, "%20");
    return fixedAddress;
  }

  function renderReviews() {
    return reviews.map((review) => (
      <Review
        key={review.reviewId}
        firstName={review.user.firstName}
        lastName={review.user.lastName}
        rating={review.rating}
        review={review.review}
      />
    ));
  }

  return (
    <div className="detailed-container">
      <Card className="restaurant-card-t3">
        <CardContent variant="outlined" className="restaurant-card-contents-t3">
          <img alt="" className="card-img-t3" src={props.image} />
          <div className="restaurant-text-t3">
            <Typography className="restaurant-name-t3">{props.name}</Typography>
            <Rating
              name="read-only"
              value={props.rating}
              precision={0.1}
              readOnly
            />
            <Typography className="restaurant-food-type-t3">
              Type: {props.type}
            </Typography>
            <Typography className="restaurant-location-t3">
              Location:{" "}
              <a
                href={
                  "https://www.google.com/maps/search/?api=1&query=" +
                  cleanEntries(props.address)
                }
              >
                Link
              </a>
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className="user-review">
        <CardContent className="user-review-contents">
          <Typography>Leave a Review</Typography>
          <TextareaAutosize
            className="user-review-text"
            minRows={3}
            placeholder="Write your review"
            value={userReview}
            onChange={handleUserReviewChange}
          />
          <br />
          <Rating
            className="user-review-rating"
            name="controlled-review"
            precision={0.5}
            onChange={handleUserRatingChange}
          ></Rating>
          <br />
          <Button variant="contained" onClick={handleSubmitReview}>
            Submit
          </Button>
        </CardContent>
      </Card>
      <ImageList
        className="restaurant-list-t3"
        variant="outlined"
        sx={{
          gridAutoFlow: "row",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(400px, 100%)) !important",
          gridAutoRows: "minmax(25vh, min-content)",
        }}
      >
        {renderReviews()}
      </ImageList>
    </div>
  );
}

export default DetailedRestaurant;
