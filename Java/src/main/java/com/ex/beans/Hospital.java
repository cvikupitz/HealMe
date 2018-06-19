package com.ex.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name="HM_HOSPITAL")
@Component
public class Hospital {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="hospital")
	@SequenceGenerator(name="hospital", sequenceName="user_seq", allocationSize=1)
	private Integer id;

	public Hospital() {
		super();
	}

	public Hospital(String name, Address address, double latitude, double longitude) {
		super();
		this.address = address;
		this.name = name;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public List<InjuryCost> getInjuryCost() {
		return injuryCost;
	}

	public void setInjuryCost(List<InjuryCost> injuryCost) {
		this.injuryCost = injuryCost;
	}

	private Address address;
	
	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private double latitude;
	
	@Column(nullable = false)
	private double longitude;

	@OneToMany
	private List<InjuryCost> injuryCost;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
}
