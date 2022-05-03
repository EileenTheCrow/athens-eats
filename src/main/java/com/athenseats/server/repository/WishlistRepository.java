package com.athenseats.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.athenseats.server.model.Wishlist;

@CrossOrigin(origins = "http://localhost:3000")
@RepositoryRestResource(collectionResourceRel = "wishlists", path = "wishlists")
public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {
}
