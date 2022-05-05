package com.athenseats.server.Controller;

import com.athenseats.server.repository.UserRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import com.athenseats.server.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@RequestMapping(path="/api/users")
public class UserController {
  @Autowired
  private UserRepository userRepository;

  public UserController(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  @GetMapping("/")
  public List<User> getUsers(){
    return this.userRepository.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<User> getUserById(@PathVariable("id") int id){
    return this.userRepository.findById(id)
            .map(user -> ResponseEntity.ok().body(user))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @GetMapping("/email")
  public ResponseEntity<User> getUserByEmail(@RequestParam("email") String email){
    return Optional.ofNullable(this.userRepository.findDistinctByEmail(email))
            .map(user -> ResponseEntity.ok().body(user))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @PostMapping("/")
  public ResponseEntity<User> createUser(@RequestBody User user) throws URISyntaxException{
    User res = this.userRepository.save(user);
    return ResponseEntity.created(new URI("/api/users/" + res.getUserId())).body(res);
  }

  @PutMapping("/{id}")
  public ResponseEntity<User> putUser(@RequestBody User newUserInfo, @PathVariable("id") int id) throws URISyntaxException{
    User updatedUser = this.userRepository.findById(id)
      .map(user -> {
        user.setFirstName(newUserInfo.getFirstName());
        user.setLastName(newUserInfo.getLastName());
        user.setPassword(newUserInfo.getPassword());
        return this.userRepository.save(user);
      })
      .orElseGet(() -> this.userRepository.save(newUserInfo));
    return ResponseEntity.created(new URI("/api/users/" + updatedUser.getUserId())).body(updatedUser);
  }


}