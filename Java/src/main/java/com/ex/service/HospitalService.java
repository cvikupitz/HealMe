package com.ex.service;

import java.util.List;

import com.ex.beans.Hospital;

public interface HospitalService {

	public List<Hospital> findByAddressZip(String zip);
	public List<Hospital> findAllInRadius(double latitude, double longitude, int radius);


	public List<Hospital> findByLatitudeBetweenAndLongitudeBetween(
			double minLatititude, double maxLatititude,
			double minLongitude, double maxLongitude);
}
