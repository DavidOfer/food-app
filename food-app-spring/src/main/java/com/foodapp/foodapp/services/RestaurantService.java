package com.foodapp.foodapp.services;

import com.foodapp.foodapp.beans.*;
import com.foodapp.foodapp.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RestaurantService {
    private final RestaurantRepo restaurantRepo;
    private final DishRepo dishRepo;
    private final FoodGroupRepo foodGroupRepo;
    private final ReviewRepo reviewRepo;
    private final DishSelectRepo dishSelectRepo;

    public Restaurant addRestaurant(Restaurant restaurant) {
        return restaurantRepo.save(restaurant);
    }

    public void addDish(int restaurantId, Dish dish) {
        Restaurant restaurant = restaurantRepo.findById(restaurantId).get();
        dishRepo.save(dish);

//        FoodGroup foodGroup=foodGroupRepo.findById(dish.getFoodGroup().getId()).get();
//        foodGroup.getDishes().add(dish);
//        foodGroupRepo.save(foodGroup);
//        dish.setFoodGroup(null);
        restaurant.getDishes().add(dish);
        restaurantRepo.save(restaurant);
    }

    public void addFoodGroup(int restaurantId, FoodGroup foodGroup) {
        Restaurant restaurant = restaurantRepo.findById(restaurantId).get();
        foodGroupRepo.save(foodGroup);
        restaurant.getFoodGroups().add(foodGroup);
        restaurantRepo.save(restaurant);
    }

    //belongs to users
    public void addReview(int restaurantId, Review review) {
        Restaurant restaurant = restaurantRepo.findById(restaurantId).get();
        reviewRepo.save(review);
        restaurant.getReviews().add(review);
        restaurantRepo.save(restaurant);
    }

    public Restaurant getRestaurantDetails(int restaurantId) {
        return restaurantRepo.findById(restaurantId).orElse(null);
    }

    public List<Restaurant> getAll() {
        return restaurantRepo.findAll();
    }

    public void addDishSelect(int restaurantId, int dishId, DishSelect dishSelect) {
        Dish dish = restaurantRepo.findById(restaurantId).get().getDishes().get(dishId);
        dishSelectRepo.save(dishSelect);
        dish.getDishSelects().add(dishSelect);
        dishRepo.save(dish);
    }
}
