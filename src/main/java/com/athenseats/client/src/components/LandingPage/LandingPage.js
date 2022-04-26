import "./LandingPage.css";
import {Component} from "react";
import {Card, CardContent, ImageList, Typography} from "@mui/material";

export class LandingPage extends Component{



  constructor(props) {
    super(props);

    this.state = {
      restaurants: [
        {
          name: "The Place",
          image: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/ebe21f7e-2bd3-4999-a6de-9208560cd3cf/the-place_logo_no-border_Red.png",
          rating: 5,
          id: 0
        },
        {
          name: "The Place",
          image: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/ebe21f7e-2bd3-4999-a6de-9208560cd3cf/the-place_logo_no-border_Red.png",
          rating: 5,
          id: 1
        },
        {
          name: "The Place",
          image: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/ebe21f7e-2bd3-4999-a6de-9208560cd3cf/the-place_logo_no-border_Red.png",
          rating: 5,
          id: 2
        },
        {
          name: "The Place",
          image: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/ebe21f7e-2bd3-4999-a6de-9208560cd3cf/the-place_logo_no-border_Red.png",
          rating: 5,
          id: 3
        },
        {
          name: "The Place",
          image: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/ebe21f7e-2bd3-4999-a6de-9208560cd3cf/the-place_logo_no-border_Red.png",
          rating: 5,
          id: 4
        },
        {
          name: "The Place",
          image: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/ebe21f7e-2bd3-4999-a6de-9208560cd3cf/the-place_logo_no-border_Red.png",
          rating: 5,
          id: 5
        }
      ]
    }
    this.renderRestaurants = this.renderRestaurants.bind(this);
  }

  handleScroll = e => {
    let element = e.target;
    let offset = e.scrollY;
    element.scrollBy({left: offset, top:0, behavior: "smooth"});
  }

  renderRestaurants() {
      return this.state.restaurants.map(restaurant => (
        <Card key={restaurant.id} className="restaurant-card">
          <CardContent variant="outlined" className="restaurant-card-contents">
            <img className="card-img" src={restaurant.image}/>
            <Typography>{restaurant.name}</Typography>
            <Typography>Rating: {restaurant.rating}</Typography>
          </CardContent>
        </Card>
      ))
  }

  render() {
    return (
      <>
        <div className="front-panel">
        </div>
        <ImageList
          onScroll={this.handleScroll}
          className="restaurant-list"
          variant="outlined"
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(auto-fill,minmax(min-content, 28vh)) !important",
            gridAutoColumns: "minmax(min-content, 28vh)",
          }}
        >
          {this.renderRestaurants()}
        </ImageList>
      </>
    )
  }
}

export default LandingPage;