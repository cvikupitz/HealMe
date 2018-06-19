package com.ex.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.beans.Injury;

public interface InjuryRepository extends JpaRepository<Injury, Integer> {

}
