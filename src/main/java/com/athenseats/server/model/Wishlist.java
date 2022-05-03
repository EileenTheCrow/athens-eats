package com.athenseats.server.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "wishlists")
public class Wishlist {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  @Column(name = "wishlist_id", nullable = false)
  private int wishlistId;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "type")
  private String type;

  @Column(name = "address")
  private String address;

  @Column(name = "comment", columnDefinition = "TEXT")
  private String comment;

  public Wishlist(){

  }

  public Wishlist(String name, String type, String address, String comment){
    this.name = name;
    this.type = type;
    this.address = address;
    this.comment = comment;
  }

  public int getWishlistId(){
    return wishlistId;
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

  public String getComment(){
    return comment;
  }
}