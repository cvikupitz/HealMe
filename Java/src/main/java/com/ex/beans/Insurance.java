package com.ex.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name="HM_INSURANCE")
@Component
public class Insurance {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="insurance")
	@SequenceGenerator(name="insurance", sequenceName="insurance_seq", allocationSize=1)
	private Integer id;

	@Column(unique = true, nullable = false)
	private String name;

	public Insurance() { }
	
	public Insurance(String name) {
		this.name = name;
	}
	
	public Integer getId() {
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
	
}
