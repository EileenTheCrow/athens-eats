package com.athenseats.server.Controller;

import com.athenseats.server.repository.RestaurantRepository;
import com.athenseats.server.repository.ReviewRepository;
import com.athenseats.server.repository.UserRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.LinkedList;
import java.util.List;

import com.athenseats.server.model.Restaurant;
import com.athenseats.server.model.Review;
import com.athenseats.server.model.User;

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

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path="/api/reviews")
public class ReviewController {
  @Autowired
  private ReviewRepository reviewRepository;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private RestaurantRepository restaurantRepository;

  public ReviewController(ReviewRepository reviewRepository, UserRepository userRepository, RestaurantRepository restaurantRepository){
    this.reviewRepository = reviewRepository;
    this.restaurantRepository = restaurantRepository;
    this.userRepository = userRepository;
  }

  @GetMapping("/getByUser/{userId}")
  public List<Review> getAllByUserId(@PathVariable("userId") int userId){
    User user = this.userRepository.findById(userId).get();
    List<Review> reviews = this.reviewRepository.findAll();
    List<Review> reviewsByUser = new LinkedList<>();
    reviews.forEach(review -> {
      if(review.getUser().getUserId() == user.getUserId()){
        reviewsByUser.add(review);
      }
    });
    return reviewsByUser;
  }

  @GetMapping("/getByRestaurant/{restaurantId}")
  public List<Review> getAllByRestaurantId(@PathVariable("restaurantId") int restaurantId){
    Restaurant restaurant = this.restaurantRepository.findById(restaurantId).get();
    List<Review> reviews = this.reviewRepository.findAll();
    List<Review> reviewsByRestaurant = new LinkedList<>();
    reviews.forEach(review -> {
      if(review.getRestaurant().getRestaurantId() == restaurant.getRestaurantId()){
        reviewsByRestaurant.add(review);
      }
    });
    return reviewsByRestaurant;
  }

  @PostMapping(path="/")
  public ResponseEntity<Review> createReview (@RequestBody Review review) throws URISyntaxException{
    Review rev = this.reviewRepository.save(review);
    return ResponseEntity.created(new URI("/api/reviews/" + rev.getReviewId())).body(rev);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<HttpStatus> deleteReview(@PathVariable("id") int id){
    this.reviewRepository.deleteById(id);
    return ResponseEntity.ok().build();
  }
}