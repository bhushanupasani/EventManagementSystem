package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Client;
import com.example.demo.repositories.ClientRepository;

@Service
public class ClientService {

	@Autowired
	ClientRepository crepo;

	public List<Client> getAll()
	{
		return crepo.findAll();
	}
}
