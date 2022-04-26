import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Component} from "react";
import "./NavBar.css";

export class NavBar extends Component{

  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Athens Eats
          </Typography>
          <Button href="/" variant="default">Home</Button>
          <Button href="/restaurants" variant="default">Restaurants</Button>
          <Button href="/polls" variant="default">Polls</Button>
          <Button href="/wishlist" variant="default">Wishlist</Button>
          <Button href="/about-us" variant="default">About Us</Button>
          <Button className="account-button" href="/login" variant="default">Log In</Button>
          <Button className="account-button" href="/register" variant="default">Sign Up</Button>
        </Toolbar>
      </AppBar>
    );
  }

}

export default NavBar;