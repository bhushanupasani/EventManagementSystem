package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.BusinessService;
import com.example.demo.repositories.BusinessServiceRepository;

@Service
public class BusinessServiceService {

	@Autowired
	BusinessServiceRepository bsrepo;
	
	public List<BusinessService> getAll()
	{
		return bsrepo.findAll();
	}
}
