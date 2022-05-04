package com.athenseats.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class AthensEatsApplication implements CommandLineRunner {

	@Autowired
  	JdbcTemplate jdbcTemplate;

	public static void main(String[] args) {
		SpringApplication.run(AthensEatsApplication.class, args);
	}

	@Override
	public void run(String... strings) throws Exception {
		String addTrigger = "CREATE TRIGGER update_average_rating AFTER INSERT ON reviews FOR EACH ROW " +
							"BEGIN " +
								"DECLARE avgRating double; " +
								"SELECT AVG(reviews.rating) INTO avgrating FROM reviews WHERE reviews.restaurant_id = NEW.restaurant_id; " +
								"UPDATE restaurants SET restaurants.rating = avgRating WHERE restaurants.restaurant_id = NEW.restaurant_id; " +
							"END;";
		jdbcTemplate.execute("DROP TRIGGER IF EXISTS update_average_rating;");
		jdbcTemplate.execute(addTrigger);
	}

}
