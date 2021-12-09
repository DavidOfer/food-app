package com.foodapp.foodapp.repositories;

import com.foodapp.foodapp.beans.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepo extends JpaRepository<Review,Long> {
}
