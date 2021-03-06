package com.ex.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.ex.beans.Hospital;
import com.ex.repository.HospitalRepository;

@Service("hospitalService")
@Transactional(propagation=Propagation.REQUIRED)
public class HospitalServiceImpl implements HospitalService {

	@Autowired
	private HospitalRepository repo;
	
	@Override
	public List<Hospital> findByAddressZip(String zip) {
		return repo.findByAddressZip(zip);
	}

	@Override
	public List<Hospital> findByLatitudeBetweenAndLongitudeBetween(double minLatititude, double maxLatititude,
			double minLongitude, double maxLongitude) {
		
		return repo.findByLatitudeBetweenAndLongitudeBetween(minLatititude, maxLatititude, minLongitude, maxLongitude);
	}
	
	protected static double distanceBetween(
			double lat1, double lon1, double lat2, double lon2) {

		final int R = 6371; // Radius of the earth

		double latDistance = Math.toRadians(lat2 - lat1);
		double lonDistance = Math.toRadians(lon2 - lon1);
		double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
		        + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
		        * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
		double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return (R * c * 0.621371);

	}

	@Override
	public List<Hospital> findAllInRadius(double latitude, double longitude, int radius) {

		return repo.findAll().stream().filter(
				h -> (distanceBetween(
					latitude, longitude, h.getLatitude(), h.getLongitude()) <= radius)
			).collect(Collectors.toList());
	}
	
}
