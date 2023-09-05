package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "businesses")
public class Business {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column
	String name;
	
	@Column
	String email;
	
	@Column
	String contact_number;
	
	@Column
	String registration_number;
	
	@Column
	boolean working_status;
	
	@OneToOne
	@JoinColumn(name = "login_id")
	Login login;
	
	@OneToOne
	@JoinColumn(name = "address_id")
	Address address;

	public Business() {
		super();
	}

	public Business(int id, String name, String email, String contact_number, String registration_number,
			boolean working_status, Login login, Address address) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.contact_number = contact_number;
		this.registration_number = registration_number;
		this.working_status = working_status;
		this.login = login;
		this.address = address;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact_number() {
		return contact_number;
	}

	public void setContact_number(String contact_number) {
		this.contact_number = contact_number;
	}

	public String getRegistration_number() {
		return registration_number;
	}

	public void setRegistration_number(String registration_number) {
		this.registration_number = registration_number;
	}

	public boolean isWorking_status() {
		return working_status;
	}

	public void setWorking_status(boolean working_status) {
		this.working_status = working_status;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
	
	
}
