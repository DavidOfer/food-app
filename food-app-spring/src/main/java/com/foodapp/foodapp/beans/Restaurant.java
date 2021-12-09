package com.foodapp.foodapp.beans;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;


@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Table(name="restaurant")

public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String  name;
    private String type;
    private float deliveryCost;
    private float minOrder;
    private String openingHour;
    private String closingHour;
    private String banner;
    private String logo;
    private float rating;
    private int reviewCount;
    @OneToMany
//    @ToString.Exclude
    @OrderBy("id")
    private List<FoodGroup> foodGroups;
    @OneToMany
    @JsonIgnore
    private List<Dish> dishes;
    @OneToMany
    @OrderBy("rating DESC")
    private List<Review> reviews;

    @Override
    public String toString() {
        return "Restaurant{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", deliveryCost=" + deliveryCost +
                ", minOrder=" + minOrder +
                ", openingHour='" + openingHour + '\'' +
                ", closingHour='" + closingHour + '\'' +
                ", banner='" + banner + '\'' +
                ", logo='" + logo + '\'' +
                ", rating=" + rating +
                ", reviewCount=" + reviewCount +
                ", foodGroups=" + foodGroups +
                ", dishes=" + dishes +
                ", reviews=" + reviews +
                '}';
    }
}
