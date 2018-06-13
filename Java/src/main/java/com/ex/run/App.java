package com.ex.run;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ex.beans.Insurance;
import com.ex.repository.InsuranceRepository;

public class App {
	
	public static void main(String[] args) {
		
		try(AbstractApplicationContext context = new ClassPathXmlApplicationContext("DispatcherServlet-servlet.xml")) {
			
			InsuranceRepository insurances = context.getBean(InsuranceRepository.class);

			insurances.save(new Insurance("BlueCross BlueShield"));
			insurances.save(new Insurance("UnitedHealthcare"));
			insurances.save(new Insurance("Cigna"));
			insurances.save(new Insurance("Kaiser Permanente"));
			insurances.save(new Insurance("Aetna"));
			insurances.save(new Insurance("MetLife"));
			insurances.save(new Insurance("Unitrin"));
			insurances.save(new Insurance("Assurant"));
			insurances.save(new Insurance("American Family"));
			insurances.save(new Insurance("Amerigroup"));
			insurances.save(new Insurance("Molina"));
			insurances.save(new Insurance("Well Care"));
			insurances.save(new Insurance("Well Point"));
		}
		
	}
}
