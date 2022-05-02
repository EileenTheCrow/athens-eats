package com.athenseats.server.repository;

import org.springframework.data.repository.CrudRepository;

import com.athenseats.server.model.Review;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface ReviewRepository extends CrudRepository<Review, Integer> {

}
