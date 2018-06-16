package com.ex.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ex.beans.Hospital;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Integer>{

	public List<Hospital> findByAddressZip(String zip);
	
	public List<Hospital> findByLatitudeBetweenAndLongitudeBetween(double minLatititude, double maxLatititude,
			double minLongitude, double maxLongitude);
	
}
