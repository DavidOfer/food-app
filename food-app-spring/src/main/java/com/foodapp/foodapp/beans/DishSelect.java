package com.foodapp.foodapp.beans;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Table(name="dishselect")
public class DishSelect {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "dishselects_selectitems",
            joinColumns = @JoinColumn(name = "dishselect_id"),
            inverseJoinColumns = @JoinColumn(name = "selectitem_id"))
    private List<SelectItem> selectItems;
    private int maxSelect;
}
