package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.UserType;
import com.example.demo.repositories.UserTypeRepository;

@Service
public class UserTypeService {

	@Autowired
	UserTypeRepository utrepo;
	
	public List<UserType> getAll()
	{
		return utrepo.findAll();
	}
}
