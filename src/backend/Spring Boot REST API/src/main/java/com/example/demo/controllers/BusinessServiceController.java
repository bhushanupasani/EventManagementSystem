package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BusinessService;
import com.example.demo.services.BusinessServiceService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BusinessServiceController {

	@Autowired
	BusinessServiceService bsservice;
	
	@GetMapping("/getallservices")
	public List<BusinessService> getAll()
	{
		return bsservice.getAll();
	}
}
