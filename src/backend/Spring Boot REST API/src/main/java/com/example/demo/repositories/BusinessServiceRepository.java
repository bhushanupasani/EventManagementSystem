package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.BusinessService;

@Repository
public interface BusinessServiceRepository extends JpaRepository<BusinessService, Integer> {

}
