package com.athenseats.server.Controller;

import com.athenseats.server.repository.WishlistRepository;
import com.athenseats.server.model.Wishlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller // This means that this class is a Controller
@RequestMapping(path="/api/wishlist") // This means URL's start with /demo (after Application path). This is the url that api calls will be made to (ie database queries)
public class WishlistController {
  @Autowired // This means to get the bean called userRepository
         // Which is auto-generated by Spring, we will use it to handle the data
  private WishlistRepository WishlistRepository;

  @PostMapping(path="/addWishlist") // Map ONLY POST Requests
  public @ResponseBody String addNewWishlist (@RequestParam String name, @RequestParam String type, @RequestParam String address) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request

    Wishlist n = new Wishlist();
    n.setName(name);
    n.setType(type);
    n.setAddress(address);
    WishlistRepository.save(n);
    return "Saved";
  }

  @GetMapping(path="/allWishlist")
  public @ResponseBody Iterable<Wishlist> getAllUsers() {
    // This returns a JSON or XML with the users
    return WishlistRepository.findAll();
  }
}