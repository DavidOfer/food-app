package com.foodapp.foodapp.beans;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Table(name="review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long number;
    //to be changed
    private String userDetails;
    private String content;
    private String date;
    private int rating;

}
