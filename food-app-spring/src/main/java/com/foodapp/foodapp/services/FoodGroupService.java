package com.foodapp.foodapp.services;

import com.foodapp.foodapp.beans.FoodGroup;
import com.foodapp.foodapp.beans.Restaurant;
import com.foodapp.foodapp.repositories.FoodGroupRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FoodGroupService {
    private final FoodGroupRepo foodGroupRepo;
    public FoodGroup getOne(int id){
        return foodGroupRepo.findById(id).get();
    }
}
