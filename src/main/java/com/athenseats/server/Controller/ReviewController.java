package com.athenseats.server.Controller;

import com.athenseats.server.repository.ReviewRepository;
import com.athenseats.server.model.Review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller // This means that this class is a Controller
@RequestMapping(path="/api/review") // This means URL's start with /demo (after Application path). This is the url that api calls will be made to (ie database queries)
public class ReviewController {
  @Autowired // This means to get the bean called userRepository
         // Which is auto-generated by Spring, we will use it to handle the data
  private ReviewRepository ReviewRepository;

  @PostMapping(path="/addReview") // Map ONLY POST Requests
  public @ResponseBody String addNewReview (@RequestParam double rating, @RequestParam String review, @RequestParam String user, @RequestParam String restaurant) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request

    Review n = new Review();
    n.setRating(rating);
    n.setReview(review);
    n.setUser(user);
    n.setRestaurant(restaurant);
    ReviewRepository.save(n);
    return "Saved";
  }

  @GetMapping(path="/allRestaurants")
  public @ResponseBody Iterable<Review> getAllRestaurants() {
    // This returns a JSON or XML with the users
    return ReviewRepository.findAll();
  }
}