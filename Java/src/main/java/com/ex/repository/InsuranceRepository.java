package com.ex.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ex.beans.Insurance;

@Repository
public interface InsuranceRepository extends JpaRepository<Insurance, Integer> {
	
	public Insurance findByName(String name);
	
}
