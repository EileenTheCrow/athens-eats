package com.athenseats.server.Controller;

import com.athenseats.server.repository.RestaurantRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.LinkedList;
import java.util.List;

import com.athenseats.server.model.Restaurant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path="/api/restaurants")
public class RestaurantController {
  @Autowired
  private RestaurantRepository restaurantRepository;

  public RestaurantController(RestaurantRepository restaurantRepository){
    this.restaurantRepository = restaurantRepository;
  }

  @GetMapping("/")
  public List<Restaurant> getRestaurants() {return this.restaurantRepository.findAll();}

  @GetMapping("/type")
  public List<Restaurant> getRestaurantsByType(@RequestParam("type") String type){
    return this.restaurantRepository.findAllByType(type);
  }

  @GetMapping("/name")
  public List<Restaurant> getRestaurantsByName(@RequestParam("name") String name){
    return this.restaurantRepository.findDistinctByName(name);
  }

  @GetMapping("/rating/{rating}")
  public List<Restaurant> getRestaurantsByGreaterThanRating(@RequestParam("rating") int rating){
    List<Restaurant> restaurants = this.restaurantRepository.findAll();
    List<Restaurant> ratingGreaterThan = new LinkedList<Restaurant>();
    restaurants.forEach(restaurant -> {
      if(restaurant.getRating() >= rating){
        ratingGreaterThan.add(restaurant);
      }
    });
    return ratingGreaterThan;
  }

  @PutMapping("/{id}")
  public ResponseEntity<Restaurant> putRestaurant(@RequestBody Restaurant newRestaurantInfo, @PathVariable("id") int id) throws URISyntaxException{
    Restaurant updatedRestaurant = this.restaurantRepository.findById(id)
      .map(restaurant -> {
        restaurant.setName(newRestaurantInfo.getName());
        restaurant.setType(newRestaurantInfo.getType());
        restaurant.setRating(newRestaurantInfo.getRating());
        restaurant.setAddress(newRestaurantInfo.getAddress());
        restaurant.setRestaurantImage(newRestaurantInfo.getRestaurantImage());
        return this.restaurantRepository.save(restaurant);
      })
      .orElseGet(() -> this.restaurantRepository.save(newRestaurantInfo));
    return ResponseEntity.created(new URI("/api/restaurants/" + updatedRestaurant.getRestaurantId())).body(updatedRestaurant);
  }

  @PostMapping("/")
  public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) throws URISyntaxException {
    Restaurant res = this.restaurantRepository.save(restaurant);
    return ResponseEntity.created(new URI("/api/restaurants/" + res.getRestaurantId())).body(res);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<HttpStatus> deleteRestaurant(@PathVariable("id") int id){
    this.restaurantRepository.deleteById(id);
    return ResponseEntity.ok().build();
  }
}