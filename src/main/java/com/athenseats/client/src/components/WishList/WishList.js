import React, { useEffect, useState } from "react";
import plate from "../../assets/plate.png";
import "./Wishlist.css";
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function WishList() {
  const [wishlist, setWishlist] = useState({
    name: "",
    type: "",
    address: "",
    comment: "",
  });
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("");
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
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
        })
        .catch(setCurrentUser(null));
    }
  }, []);

  function handleChange(event) {
    setWishlist({
      ...wishlist,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit() {
    if (currentUser === null) {
      setOpen(true);
      setAlert("You must be logged in to submit a wishlist");
    } else if (wishlist.name.length !== 0) {
      try {
        let _wishlist = {
          ...wishlist,
          user: currentUser,
        };

        await fetch("http://localhost:8080/api/wishlists/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(_wishlist),
        });
      } catch (err) {
        // do something with the error
      }
    } else {
    }
  }

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
              name="name"
              label="Restaurant Name"
              variant="outlined"
              value={wishlist.name || ""}
              onChange={handleChange}
            ></TextField>
            <TextField
              name="type"
              label="Type"
              variant="outlined"
              value={wishlist.type || ""}
              onChange={handleChange}
            ></TextField>
            <TextField
              name="address"
              label="Location"
              variant="outlined"
              value={wishlist.address || ""}
              onChange={handleChange}
            ></TextField>
            <TextareaAutosize
              name="comment"
              className="wishlist-textarea"
              minRows={3}
              placeholder="Optional Comment"
              value={wishlist.comment || ""}
              onChange={handleChange}
            ></TextareaAutosize>
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
              className="form-button"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default WishList;
