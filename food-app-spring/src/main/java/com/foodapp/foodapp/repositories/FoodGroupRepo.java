package com.foodapp.foodapp.repositories;

import com.foodapp.foodapp.beans.FoodGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodGroupRepo extends JpaRepository<FoodGroup,Integer> {
}
