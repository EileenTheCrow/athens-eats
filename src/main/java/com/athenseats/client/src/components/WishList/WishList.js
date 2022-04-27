import React from "react";
import plate from "../../assets/plate.png";
import "./Wishlist.css";

function WishList() {
  return (
    <div className="wishlist">
      <div
        className="leftSide" 
        style={{ backgroundImage: `url(${plate})` }}
      ></div>
      <div className="rightSide">
        <h1> Can't Find Restaurant?</h1> 
 
        <form id="contact-form" method="POST">
          <label htmlFor="name">Name of Restaurant</label>
          <input name="name" placeholder="Enter name..." type="text" />
          <label htmlFor="location">Location of Restaurant</label>
          <input name="location" placeholder="Enter location..." type="text" />
          <label htmlFor="message">Optional Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Add to Wishlist</button>
        </form>
      </div>
    </div>
  )
}

export default WishList;