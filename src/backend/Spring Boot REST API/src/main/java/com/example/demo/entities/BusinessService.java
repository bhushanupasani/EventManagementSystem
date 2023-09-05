package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "buisness_services")
public class BusinessService {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column
	String name;
	
	@Column
	String description;
	
	@Column
	double price;
	
	@ManyToOne
	@JoinColumn(name = "business_id")
	Business business;
	
	@ManyToOne
	@JoinColumn(name = "services_id")
	Services service;

	public BusinessService() {
		super();
	}

	public BusinessService(int id, String name, String description, double price, Business business, Services service) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.business = business;
		this.service = service;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Business getBusiness() {
		return business;
	}

	public void setBusiness(Business business) {
		this.business = business;
	}

	public Services getService() {
		return service;
	}

	public void setService(Services service) {
		this.service = service;
	}
	
	
}
