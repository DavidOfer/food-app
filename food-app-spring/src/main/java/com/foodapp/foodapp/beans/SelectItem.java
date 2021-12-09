package com.foodapp.foodapp.beans;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Table(name="selectitem")
public class SelectItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private float cost;
    @ToString.Exclude
    @ManyToMany(mappedBy = "selectItems")
    List<DishSelect> dishSelects;
}
