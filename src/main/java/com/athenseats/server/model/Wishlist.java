package com.athenseats.server.model;

import javax.persistence.*;

@Entity
@Table(name = "wishlists")
public class Wishlist {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
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

  @OneToOne
  @JoinColumn(name = "user_id", nullable = false, foreignKey = @ForeignKey(name = "FK_wishlist_user"))
  private User user;

  public Wishlist(){

  }

  public Wishlist(String name, String type, String address, String comment, User user){
    this.name = name;
    this.type = type;
    this.address = address;
    this.comment = comment;
    this.user = user;
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

  public User getUser(){
    return user;
  }
}