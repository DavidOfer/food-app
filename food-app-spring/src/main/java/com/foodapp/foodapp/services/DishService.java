package com.foodapp.foodapp.services;

import com.foodapp.foodapp.beans.Dish;
import com.foodapp.foodapp.repositories.DishRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DishService {
    private final DishRepo dishRepo;

//    public Dish addDish(Dish dish){
//        return dishRepo.save(dish);
//    }
    public List<Dish> getAllDishes(){
        return dishRepo.findAll();
    }
}
