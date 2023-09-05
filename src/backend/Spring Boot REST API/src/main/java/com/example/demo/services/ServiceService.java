package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Services;
import com.example.demo.repositories.ServiceRepository;

@Service
public class ServiceService {

	@Autowired
	ServiceRepository srepo;
	
	public List<Services> getAll()
	{
		return srepo.findAll();
	}
}
