package com.ex.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name="HM_INJURY_COST")
@Component
public class InjuryCost {

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Injury getInjury() {
		return injury;
	}

	public void setInjury(Injury injury) {
		this.injury = injury;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="injury_cost")
	@SequenceGenerator(name="injury_cost", sequenceName="injury_cost_seq", allocationSize=1)
	private Integer id;

	@ManyToOne
	private Injury injury;

	@Column(nullable=false)
	private int cost;
	
}
