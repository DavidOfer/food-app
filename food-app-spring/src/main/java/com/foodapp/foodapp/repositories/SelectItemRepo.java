package com.foodapp.foodapp.repositories;

import com.foodapp.foodapp.beans.SelectItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SelectItemRepo extends JpaRepository<SelectItem,Long> {
}
