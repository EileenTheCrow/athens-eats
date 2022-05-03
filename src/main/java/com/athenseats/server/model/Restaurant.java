package com.athenseats.server.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="restaurants")
public class Restaurant {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  @Column(name = "restaurant_id", nullable = false)
  private int restaurantId;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "type", nullable = false)
  private String type;

  @Column(name = "address", nullable = false)
  private String address;

  @Lob
  @Column(name = "restaurant_image", nullable = false)
  private String restaurantImage;

  @Column(name = "rating")
  private double rating;
  
  @JsonBackReference
  @OneToMany(mappedBy = "restaurant")
  private List<Review> reviews = new ArrayList<Review>();

  public Restaurant(){
    
  }

  public Restaurant(String name, String type, String address, String restaurantImage){
    this.name = name;
    this.type = type;
    this.address = address;
    this.restaurantImage = restaurantImage;
    this.rating = 0;
  }

  public int getRestaurantId(){
    return restaurantId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getRestaurantImage(){
    return restaurantImage;
  }

  public void setRestaurantImage(String restaurantImage){
    this.restaurantImage = restaurantImage;
  }

  public double getRating(){
    return rating;
  }
  
  public void setRating(double rating){
    this.rating = rating;
  }

  public int getReviewsCount(){
    return reviews.size();
  }
}
