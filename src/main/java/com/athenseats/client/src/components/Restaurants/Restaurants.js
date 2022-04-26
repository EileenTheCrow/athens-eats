import "./Restaurants.css";
import React, {useEffect, useState} from "react";
import {Backdrop, Card, CardContent, ImageList, Typography} from "@mui/material";
import DetailedRestaurant from "../DetailedRestaurant/DetailedRestaurant";

export function Restaurants(){
  const [open, setOpen] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

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

  function handleClick() {
    setOpen(!open);
  }

  function handleClose(e) {
    if(e.target.className.toLowerCase() !== 'detailed-container') {
      setOpen(false);
    }
  }

  function cleanEntries(address) {
    let fixedAddress = address.toString()
    fixedAddress = fixedAddress.replace(/,/g, '%2C');
    fixedAddress = fixedAddress.replace(/\s/g, '%20');
    return fixedAddress;
  }

  function renderRestaurants(){
    return restaurants.map(restaurant => (
      <>
        <Card key={restaurant.id} onClick={handleClick} className="restaurant-card-t2">
          <CardContent variant="outlined" className="restaurant-card-contents-t2">
            <img alt="" className="card-img-t2" src={restaurant.image}/>
            <div className="restaurant-text-t2">
              <Typography className="restaurant-name-t2">{restaurant.name}</Typography>
              <Typography className="restaurant-rating-t2">Rating: {restaurant.rating}</Typography>
              <Typography className="restaurant-food-type-t2">Type: {restaurant.type}</Typography>
              <Typography className="restaurant-location-t2">Location: <a href={"https://www.google.com/maps/search/?api=1&query=" + cleanEntries(restaurant.address)}>Link</a></Typography>
            </div>
          </CardContent>
        </Card>
        <Backdrop className="backdrop" open={open} onClick={(e) => handleClose(e)}>
          <DetailedRestaurant
            pk={restaurant.id}
            image={restaurant.image}
            name={restaurant.name}
            rating={restaurant.rating}
            type={restaurant.type}
            address={restaurant.address}
          />
        </Backdrop>
      </>
    ))
  }



  return (
    <ImageList
      className="restaurant-list-t2"
      variant="outlined"
      sx={{
        gridAutoFlow: "row",
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 100%)) !important",
        gridAutoRows: "minmax(25vh, min-content)"
      }}
    >
      {renderRestaurants()}
    </ImageList>
  );
}

export default Restaurants;