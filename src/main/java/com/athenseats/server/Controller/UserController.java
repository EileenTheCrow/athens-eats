package com.athenseats.server.Controller;

import com.athenseats.server.repository.UserRepository;
import com.athenseats.server.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller // This means that this class is a Controller
@RequestMapping(path="/api/user") // This means URL's start with /demo (after Application path). This is the url that api calls will be made to (ie database queries)
public class UserController {
  @Autowired // This means to get the bean called userRepository
         // Which is auto-generated by Spring, we will use it to handle the data
  private UserRepository userRepository;

  @PostMapping(path="/addUser") // Map ONLY POST Requests
  public @ResponseBody String addNewUser (@RequestParam String name, @RequestParam String email, @RequestParam String password) {
    // @ResponseBody means the returned String is the response, not a view name
    // @RequestParam means it is a parameter from the GET or POST request

    User n = new User();
    n.setName(name);
    n.setEmail(email);
    n.setPassword(password);
    userRepository.save(n);
    return "Saved";
  }

  @GetMapping(path="/allUsers")
  public @ResponseBody Iterable<User> getAllUsers() {
    // This returns a JSON or XML with the users
    return userRepository.findAll();
  }
}