import "./Restaurants.css";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  ImageList,
  Typography,
  Dialog,
  Rating,
  AppBar,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DetailedRestaurant from "../DetailedRestaurant/DetailedRestaurant";

export function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [search, setSearch] = useState({
    name: "",
    type: "",
    rating: 0,
  });

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
        setFilteredRestaurants(data);
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

  function handleChange(event) {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  }

  function handleSearch() {
    let result = restaurants.filter((restaurant) => {
      if (search.name.length > 0) {
        if (restaurant.name === search.name) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    });

    result = result.filter((restaurant) => {
      if (search.type.length > 0) {
        if (restaurant.type === search.type) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    });

    result = result.filter((restaurant) => {
      if (search.rating !== 0) {
        if (restaurant.rating > search.rating) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    });

    setFilteredRestaurants(result);
  }

  function renderRestaurants(these) {
    return these.map((restaurant) => (
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

  function renderTypes() {
    let types = [];
    return restaurants
      .filter((restaurant) => {
        let decider = !types.includes(restaurant.type);
        types.push(restaurant.type);
        return decider;
      })
      .map((restaurant) => (
        <MenuItem key={restaurant.type} name="type" value={restaurant.type}>
          {restaurant.type}
        </MenuItem>
      ));
  }

  return (
    <div className="restaurant-container">
      <AppBar
        position="static"
        color="background"
        sx={{
          top: { md: 72, sm: 69, xs: 60 },
          width: "90%",
          borderRadius: 2,
          flexDirection: "row",
        }}
      >
        <TextField
          variant="outlined"
          color="primary"
          sx={{ width: "40%", display: "flex", marginRight: 1 }}
          name="name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={search.name || ""}
          onChange={handleChange}
        >
          Search
        </TextField>
        <TextField
          select
          label="Type"
          sx={{ width: "20%", marginRight: 1 }}
          name="type"
          value={search.type || ""}
          onChange={handleChange}
        >
          {renderTypes()}
        </TextField>
        <TextField
          select
          label="Min Rating"
          sx={{ width: "20%", marginRight: 1 }}
          name="rating"
          value={search.rating || ""}
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={1}>1</MenuItem>
        </TextField>
        <Button variant="contained" onClick={handleSearch}>
          Go
        </Button>
      </AppBar>
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
        {renderRestaurants(filteredRestaurants)}
      </ImageList>
      {selectedRestaurant && (
        <Dialog
          fullWidth={true}
          maxWidth="md"
          open={!!selectedRestaurant}
          onClose={handleDialogClose}
        >
          <DetailedRestaurant
            restaurantId={selectedRestaurant.restaurantId}
            restaurantImage={selectedRestaurant.restaurantImage}
            name={selectedRestaurant.name}
            rating={selectedRestaurant.rating}
            type={selectedRestaurant.type}
            address={selectedRestaurant.address}
          />
        </Dialog>
      )}
    </div>
  );
}

export default Restaurants;
