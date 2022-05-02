package com.athenseats.server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Review {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private double rating;
  private String review;
  private String user;
  private String restaurant;

  public double getRating() {
      return rating;
  }
  public void setRating(double rating) {
    this.rating = rating;
  }

  public String getUser() {
    return user;
  }

  public void setUser(String user) {
    this.user = user;
  }

  public String getReview() {
    return review;
  }

  public void setReview(String review) {
    this.review = review;
  }

  public String getRestaurant() {
    return restaurant;
  }

  public void setRestaurant(String restaurant) {
    this.restaurant = restaurant;
  }
}