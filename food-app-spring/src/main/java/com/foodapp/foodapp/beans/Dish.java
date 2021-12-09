package com.foodapp.foodapp.beans;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.Hibernate;


import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Table(name="dish")
public class Dish {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String description;
    private float cost;
    private String img;
    private boolean isAvailable;
    @ManyToMany
    @JoinTable(
            name = "dishes_food_groups",
            joinColumns = @JoinColumn(name = "dishes_id"),
            inverseJoinColumns = @JoinColumn(name = "food_group_id"))
    @ToString.Exclude
    @JsonIgnore
    private List<FoodGroup> foodGroups;
    @ManyToMany
    @JoinTable(
            name = "dishes_food_groups",
            joinColumns = @JoinColumn(name = "dishes_id"),
            inverseJoinColumns = @JoinColumn(name = "food_group_id"))
    private List<DishSelect>  dishSelects;
}
