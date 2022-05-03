import React from "react";
import plate from "../../assets/plate.png";
import "./Wishlist.css";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextareaAutosize,
  TextField,
} from "@mui/material";

function WishList() {
  return (
    <div className="wishlist" style={{ backgroundImage: `url(${plate})` }}>
      <div className="right-side">
        <Card className="wishlist-card" sx={{ display: "flex" }}>
          <CardHeader
            className="wishlist-header"
            title="Can't Find Restaurant?"
          ></CardHeader>
          <CardContent
            className="wishlist-cardcontent"
            sx={{ display: "flex" }}
          >
            <TextField
              name="restaurant"
              label="Restaurant"
              variant="outlined"
            ></TextField>
            <TextField
              name="location"
              label="Location"
              variant="outlined"
            ></TextField>
            <TextareaAutosize
              className="wishlist-textarea"
              minRows={3}
              placeholder="Optional Comment"
            ></TextareaAutosize>
            <Button variant="contained" className="form-button">
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default WishList;
