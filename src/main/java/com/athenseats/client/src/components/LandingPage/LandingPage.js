import "./LandingPage.css";
import React, { createRef, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  ImageList,
  Rating,
  Typography,
} from "@mui/material";
import bulldog from "../../assets/bulldog.png";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const [restaurants, setRestaurants] = useState([]);
  const featuredList = createRef();
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/restaurants/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
      });
  }, []);

  function handleScroll(e) {
    let element = featuredList.current;
    let offset = e.deltaY * 2;
    element.scrollBy({ left: offset, top: 0, behavior: "smooth" });
  }

  function handleClick() {
    navigate("/restaurants", { replace: true });
  }

  function renderRestaurants() {
    return restaurants.map((restaurant) => (
      <Card key={restaurant.restaurantId} className="restaurant-card">
        <CardContent variant="outlined" className="restaurant-card-contents">
          <img alt="" className="card-img" src={restaurant.restaurantImage} />
          <Typography className="restaurant-name">{restaurant.name}</Typography>
          <Rating
            name="read-only"
            value={restaurant.rating}
            precision={0.1}
            readOnly
          />
        </CardContent>
      </Card>
    ));
  }

  return (
    <>
      <div className="front-panel">
        <div className="title-card">
          <img alt="" className="title-img" src={bulldog} />
          <Typography
            sx={{ height: "fit-content", width: "fit-content" }}
            variant="h3"
            color="white"
          >
            Check out some restaurants nearby!
          </Typography>
          <Button variant="contained" onClick={handleClick}>
            Restaurants
          </Button>
        </div>
      </div>
      <ImageList
        ref={featuredList}
        onWheel={(e) => handleScroll(e)}
        className="restaurant-list"
        variant="outlined"
        sx={{
          gridAutoFlow: "column",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(min-content, 28vh)) !important",
          gridAutoColumns: "minmax(min-content, 28vh)",
        }}
      >
        {renderRestaurants()}
      </ImageList>
    </>
  );
}

export default LandingPage;
