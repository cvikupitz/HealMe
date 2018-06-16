package com.ex.run;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ex.beans.Insurance;
import com.ex.repository.InsuranceRepository;

public class App {
	
	public static void main(String[] args) {
		
		try(AbstractApplicationContext context = new ClassPathXmlApplicationContext("DispatcherServlet-servlet.xml")) {
			
//			InsuranceRepository insurances = context.getBean(InsuranceRepository.class);
//			initializeInsurances(insurances);
//			
//			HospitalRepository repo = context.getBean(HospitalRepository.class);
//			repo.save(new Hospital("Reston Hospital Center", new Address("1850 Town Center Pkwy", "20190", "Reston", "VA"), 38.9623151, -77.3639751));
//			repo.save(new Hospital("Reston Medical Center", new Address("1890 Metro Center Dr", "20190", "Reston", "VA"), 38.9494616, -77.34225329999998));
//			repo.save(new Hospital("Inova Fair Oaks Hospital", new Address("3600 Joseph Siewick Dr", "22033", "Fairfax", "VA"), 38.8841221,-77.38006080000002));
//			repo.save(new Hospital("Inova Loudoun Hospital", new Address("44045 Riverside Pkwy", "20176", "Leesburg", "VA"), 38.8841221,-77.38006080000002));
//			
		}
		
	}
	
	public static void initializeInsurances(InsuranceRepository insurances) {
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
