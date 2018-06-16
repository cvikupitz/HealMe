package com.ex.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.Hospital;
import com.ex.repository.HospitalRepository;

@Service("hospitalService")
@Transactional
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

}
