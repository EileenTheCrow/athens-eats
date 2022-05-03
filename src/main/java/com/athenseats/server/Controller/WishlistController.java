package com.athenseats.server.Controller;

import com.athenseats.server.repository.WishlistRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import com.athenseats.server.model.Wishlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/api/wishlists")
public class WishlistController {
  @Autowired
  private WishlistRepository wishlistRepository;

  public WishlistController(WishlistRepository wishlistRepository){
    this.wishlistRepository = wishlistRepository;
  }
  
  @GetMapping(path="/")
  public List<Wishlist> getWishlists() {
    return wishlistRepository.findAll();
  }

  @PostMapping(path="/")
  public ResponseEntity<Wishlist> createWishlist (@RequestBody Wishlist wishlist) throws URISyntaxException{
    Wishlist res = this.wishlistRepository.save(wishlist);
    return ResponseEntity.created(new URI("/api/wishlist/" + res.getWishlistId())).body(res);
  }

  @DeleteMapping(path="/{id}")
  public ResponseEntity<HttpStatus> deleteWishlist(@PathVariable("id") int id){
    this.wishlistRepository.deleteById(id);
    return ResponseEntity.ok().build();  }
}