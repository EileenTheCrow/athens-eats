import "./DetailedRestaurant.css";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Collapse,
  IconButton,
  ImageList,
  Rating,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Review from "../Review/Review";

export function DetailedRestaurant(props) {
  const [reviews, setReviews] = useState([]);
  const [userReview, setUserReview] = useState("");
  const [userRating, setUserRating] = useState(0.0);
  const [currentUser, setCurrentUser] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:8080/api/reviews/getByRestaurant/${props.restaurantId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });

    if (localStorage.getItem("userId") !== null) {
      fetch(
        `http://localhost:8080/api/users/${localStorage.getItem("userId")}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setCurrentUser(data);
        });
    }
  }, [refetch, props.restaurantId]);

  function handleUserReviewChange(event) {
    setUserReview(event.target.value);
  }

  function handleUserRatingChange(event) {
    setUserRating(event.target.value);
  }

  async function handleSubmitReview(event) {
    if (localStorage.getItem("userId") === null) {
      setOpen(true);
      setAlert("You are not logged in");
    } else if (
      reviews.filter((review) => review.user.userId === currentUser.userId)
        .length !== 0
    ) {
      setOpen(true);
      setAlert("You've already written a review");
    } else {
      const review = {
        rating: userRating,
        review: userReview,
        user: currentUser,
        restaurant: props,
      };

      await fetch("http://localhost:8080/api/reviews/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((response) => response.json())
        .then(setRefetch(!refetch));
    }
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
          <img alt="" className="card-img-t3" src={props.restaurantImage} />
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
          <Collapse in={open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {alert}
            </Alert>
          </Collapse>
          <Button
            disabled={open}
            variant="contained"
            onClick={handleSubmitReview}
          >
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
