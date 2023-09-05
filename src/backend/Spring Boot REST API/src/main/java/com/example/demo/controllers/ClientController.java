package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Client;
import com.example.demo.services.ClientService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ClientController {

	@Autowired
	ClientService cservice;
	
	@GetMapping("/getallclients")
	public List<Client> getAll()
	{
		return cservice.getAll();
	}
}
