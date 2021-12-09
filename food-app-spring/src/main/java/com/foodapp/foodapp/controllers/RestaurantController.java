package com.foodapp.foodapp.controllers;

import com.foodapp.foodapp.beans.Dish;
import com.foodapp.foodapp.beans.Restaurant;
import com.foodapp.foodapp.repositories.RestaurantRepo;
import com.foodapp.foodapp.services.DishService;
import com.foodapp.foodapp.services.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/restaurant")
public class RestaurantController {
    private final RestaurantService restaurantService;
    private final DishService dishService;

    //    public Restaurant addRestaurant(Restaurant restaurant){
//        return restaurantRepo.save(restaurant);
//    }
//    public void addDish(int restaurantId, Dish dish){
//        Restaurant restaurant=restaurantRepo.findById(restaurantId).get();
//        restaurant.getDishes().add(dish);
//        restaurantRepo.save(restaurant);
//    }
//    public Restaurant getRestaurantDetails(int restaurantId){
//        return restaurantRepo.findById(restaurantId).orElse(null);
//    }
    @PostMapping("add")
    private ResponseEntity<?> addRestaurant(@RequestBody Restaurant restaurant) {
        restaurantService.addRestaurant(restaurant);
        return new ResponseEntity<>( HttpStatus.CREATED);
    }

    @PostMapping("addDish")
    private ResponseEntity<?> addDish(@RequestBody Dish dish){
        //todo:either create a wrapper for restaurant id and dish object or get the id from a token

        restaurantService.addDish(1,dish);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("getDetails/{restaurantId}")
    private ResponseEntity<?> getRestaurantDetails(@PathVariable int restaurantId){
        Restaurant restaurant= restaurantService.getRestaurantDetails(restaurantId);
        return new ResponseEntity<>(restaurant,HttpStatus.CREATED);
    }
    @PostMapping("getAll")
    private ResponseEntity<?> getAll(){
        return new ResponseEntity<>(restaurantService.getAll(),HttpStatus.CREATED);
    }

    @PostMapping("getAllDishes")
    private ResponseEntity<?> getAllDishes(){
        return new ResponseEntity<>(dishService.getAllDishes(),HttpStatus.CREATED);
    }
}
