package com.foodapp.foodapp.repositories;

import com.foodapp.foodapp.beans.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantRepo extends JpaRepository<Restaurant,Integer> {
}
