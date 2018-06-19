package com.ex.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.beans.InjuryCost;

public interface InjuryCostRepository extends JpaRepository<InjuryCost, Integer> {

}
