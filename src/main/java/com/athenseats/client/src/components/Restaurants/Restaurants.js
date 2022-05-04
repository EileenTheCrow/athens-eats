import "./Restaurants.css";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  ImageList,
  Typography,
  Dialog,
  Rating,
} from "@mui/material";
import DetailedRestaurant from "../DetailedRestaurant/DetailedRestaurant";

export function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

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

  function cleanEntries(address) {
    let fixedAddress = address.toString();
    fixedAddress = fixedAddress.replace(/,/g, "%2C");
    fixedAddress = fixedAddress.replace(/\s/g, "%20");
    return fixedAddress;
  }

  const handleRestaurauntClicked = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleDialogClose = () => setSelectedRestaurant(null);

  function renderRestaurants() {
    return restaurants.map((restaurant) => (
      <Card
        key={restaurant.restaurantId}
        onClick={() => handleRestaurauntClicked(restaurant)}
        className="restaurant-card-t2"
      >
        <CardContent variant="outlined" className="restaurant-card-contents-t2">
          <img
            alt=""
            className="card-img-t2"
            src={restaurant.restaurantImage}
          />
          <div className="restaurant-text-t2">
            <Typography className="restaurant-name-t2">
              {restaurant.name}
            </Typography>
            <Typography className="restaurant-rating-t2">
              <Rating
                name="read-only"
                value={restaurant.rating}
                precision={0.1}
                readOnly
              />
            </Typography>
            <Typography className="restaurant-food-type-t2">
              Type: {restaurant.type}
            </Typography>
            <Typography className="restaurant-location-t2">
              Location:{" "}
              <a
                href={
                  "https://www.google.com/maps/search/?api=1&query=" +
                  cleanEntries(restaurant.address)
                }
              >
                Link
              </a>
            </Typography>
          </div>
        </CardContent>
      </Card>
    ));
  }

  return (
    <>
      <ImageList
        className="restaurant-list-t2"
        variant="outlined"
        sx={{
          gridAutoFlow: "row",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(100%, 100%)) !important",
          gridAutoRows: "minmax(25vh, min-content)",
        }}
      >
        {renderRestaurants()}
      </ImageList>
      {selectedRestaurant && (
        <Dialog
          fullWidth={true}
          maxWidth="md"
          open={!!selectedRestaurant}
          onClose={handleDialogClose}
        >
          <DetailedRestaurant
            pk={selectedRestaurant.restaurantId}
            image={selectedRestaurant.restaurantImage}
            name={selectedRestaurant.name}
            rating={selectedRestaurant.rating}
            type={selectedRestaurant.type}
            address={selectedRestaurant.address}
          />
        </Dialog>
      )}
    </>
  );
}

export default Restaurants;
