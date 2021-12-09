package com.foodapp.foodapp.beans;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Table(name = "food_group")
public class FoodGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
//            ( mappedBy = "food_groups",cascade=CascadeType.ALL, fetch = FetchType.LAZY)
    @ManyToMany(mappedBy = "foodGroups")
    List<Dish> dishes;

}
