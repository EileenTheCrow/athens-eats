import "./LandingPage.css";
import React, {createRef, useEffect, useState} from "react";
import {Card, CardContent, ImageList, Typography} from "@mui/material";

export function LandingPage(){
  const [restaurants, setRestaurants] = useState([]);
  const featuredList = createRef();

  useEffect(() => {
    let info = [
      {
        name: "The Place",
        image: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/ebe21f7e-2bd3-4999-a6de-9208560cd3cf/the-place_logo_no-border_Red.png",
        rating: 5,
        id: 0,
        address: "229 E Broad St, Athens, GA 30608",
        type: "Southern"
      },
      {
        name: "The Place",
        image: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/ebe21f7e-2bd3-4999-a6de-9208560cd3cf/the-place_logo_no-border_Red.png",
        rating: 5,
        id: 1,
        address: "229 E Broad St, Athens, GA 30608",
        type: "Southern"
      },
      {
        name: "The Place",
        image: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/ebe21f7e-2bd3-4999-a6de-9208560cd3cf/the-place_logo_no-border_Red.png",
        rating: 5,
        id: 2,
        address: "229 E Broad St, Athens, GA 30608",
        type: "Southern"
      },
      {
        name: "The Place",
        image: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/ebe21f7e-2bd3-4999-a6de-9208560cd3cf/the-place_logo_no-border_Red.png",
        rating: 5,
        id: 3,
        address: "229 E Broad St, Athens, GA 30608",
        type: "Southern"
      },
      {
        name: "The Place",
        image: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/ebe21f7e-2bd3-4999-a6de-9208560cd3cf/the-place_logo_no-border_Red.png",
        rating: 5,
        id: 4,
        address: "229 E Broad St, Athens, GA 30608",
        type: "Southern"
      },
      {
        name: "The Place",
        image: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/ebe21f7e-2bd3-4999-a6de-9208560cd3cf/the-place_logo_no-border_Red.png",
        rating: 5,
        id: 5,
        address: "229 E Broad St, Athens, GA 30608",
        type: "Southern"
      }
    ];
    setRestaurants(info);
  }, []);

  function handleScroll(e) {
    let element = featuredList.current;
    let offset = e.deltaY*2;
    element.scrollBy({left: offset, top:0, behavior: "smooth"});
  }

  function renderRestaurants() {
      return restaurants.map(restaurant => (
        <Card key={restaurant.id} className="restaurant-card">
          <CardContent variant="outlined" className="restaurant-card-contents">
            <img alt="" className="card-img" src={restaurant.image}/>
            <Typography className="restaurant-name">Name: {restaurant.name}</Typography>
            <Typography className="restaurant-rating">Rating: {restaurant.rating}</Typography>
          </CardContent>
        </Card>
      ))
  }

  return (
    <>
      <div className="front-panel">
      </div>
      <ImageList
        ref={featuredList}
        onWheel={(e) => handleScroll(e)}
        className="restaurant-list"
        variant="outlined"
        sx={{
          gridAutoFlow: "column",
          gridTemplateColumns: "repeat(auto-fill,minmax(min-content, 28vh)) !important",
          gridAutoColumns: "minmax(min-content, 28vh)",
        }}
      >
        {renderRestaurants()}
      </ImageList>
    </>
  );
}

export default LandingPage;