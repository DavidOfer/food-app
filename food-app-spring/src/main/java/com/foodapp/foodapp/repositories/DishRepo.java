package com.foodapp.foodapp.repositories;

import com.foodapp.foodapp.beans.Dish;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DishRepo extends JpaRepository<Dish,Long> {
}
