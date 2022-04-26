import "./DetailedRestaurant.css";
import React, {useEffect, useState} from "react";
import {Card, CardContent, ImageList, Typography} from "@mui/material";

function DetailedRestaurant(props){
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let reviewsInfo = [
      {
        user: "Robert",
        rating: 3,
        review: "This place was okay."
      },
      {
        user: "Jess",
        rating: 3,
        review: "This place was okay."
      },
      {
        user: "Jay",
        rating: 3,
        review: "This place was okay."
      },
      {
        user: "Sarah",
        rating: 3,
        review: "This place was okay."
      }
    ]
    setReviews(reviewsInfo);
  }, []);

  function cleanEntries(address) {
    let fixedAddress = address.toString()
    fixedAddress = fixedAddress.replace(/,/g, '%2C');
    fixedAddress = fixedAddress.replace(/\s/g, '%20');
    return fixedAddress;
  }

  function renderReviews(){
    //this will call a map function to format each review retrieved from the db
    //The map function should just create a <Review/> component feeding the review info as props
  }

  return (
   <div className="detailed-container">
     <Card className="restaurant-card-t3">
       <CardContent variant="outlined" className="restaurant-card-contents-t3">
         <img alt="" className="card-img-t3" src={props.image}/>
         <div className="restaurant-text-t3">
           <Typography className="restaurant-name-t3">{props.name}</Typography>
           <Typography className="restaurant-rating-t3">Rating: {props.rating}</Typography>
           <Typography className="restaurant-food-type-t3">Type: {props.type}</Typography>
           <Typography className="restaurant-location-t3">Location: <a href={"https://www.google.com/maps/search/?api=1&query=" + cleanEntries(props.address)}>Link</a></Typography>
         </div>
       </CardContent>
     </Card>
     <ImageList
       className="restaurant-list-t2"
       variant="outlined"
       sx={{
         gridAutoFlow: "row",
         gridTemplateColumns: "repeat(auto-fill, minmax(400px, 100%)) !important",
         gridAutoRows: "minmax(25vh, min-content)"
       }}
     >
       {renderReviews()}
     </ImageList>
   </div>
  )
}

export default DetailedRestaurant;