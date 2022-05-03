package com.athenseats.server.model;

import javax.persistence.*;

@Entity
@Table(name = "reviews")
public class Review {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name = "review_id", nullable = false)
  private int reviewId;

  @Column(name = "rating", nullable = false)
  private double rating;

  @Column(name = "review", columnDefinition = "TEXT")
  private String review;

  @ManyToOne
  @JoinColumn(name = "user_id", nullable = false, foreignKey = @ForeignKey(name = "FK_review_user"))
  private User user;

  @ManyToOne
  @JoinColumn(name = "restaurant_id", nullable = false, foreignKey = @ForeignKey(name = "FK_review_restaurant"))
  private Restaurant restaurant;

  public Review(){

  }

  public Review(int reviewId, double rating, String review, User user, Restaurant restaurant){
    this.reviewId = reviewId;
    this.rating = rating;
    this.review = review;
    this.user = user;
    this.restaurant = restaurant;
    double currentRating = restaurant.getRating();
    restaurant.setRating((currentRating+rating)/(restaurant.getReviewsCount()+1));
  }

  public int getReviewId(){
    return reviewId;
  }
  
  public void setReviewId(int reviewId){
    this.reviewId = reviewId;
  }

  public double getRating() {
      return rating;
  }
  public void setRating(double rating) {
    this.rating = rating;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public String getReview() {
    return review;
  }

  public Restaurant getRestaurant() {
    return restaurant;
  }

  public void setRestaurant(Restaurant restaurant) {
    this.restaurant = restaurant;
  }
}