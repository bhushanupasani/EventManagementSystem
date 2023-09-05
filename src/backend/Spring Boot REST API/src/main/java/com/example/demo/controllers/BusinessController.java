package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Business;
import com.example.demo.services.BusinessService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BusinessController {

	@Autowired
	BusinessService bservice;
	
	@GetMapping("/getallbusiness")
	public List<Business> getAll()
	{
		return bservice.getAll();
	}
}
