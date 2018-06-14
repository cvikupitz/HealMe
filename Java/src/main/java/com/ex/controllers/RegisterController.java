package com.ex.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ex.beans.Address;
import com.ex.beans.User;
import com.ex.repository.InsuranceRepository;
import com.ex.service.UserService;
import com.google.gson.Gson;

@Controller
public class RegisterController {

	@Autowired
	private UserService users;
	
	@Autowired
	private InsuranceRepository insurances;

	@CrossOrigin(origins="http://localhost:4200")
	@RequestMapping(value="/register", method=RequestMethod.POST, produces = "application/json; charset=UTF-8")
	@ResponseBody
	public String register(String username, String email, String password, String insurance, String city, String state, String zipcode, String address, HttpSession session) {
		
		User u = new User(username, email, password);
		u.setInsurance(insurances.findByName(insurance));
		u.setAddress(new Address(address, zipcode, city, state));
		u = users.register(u);
		
		if (u != null) {
			session.setAttribute("user", u);
		}
		
		return new Gson().toJson(u);
	}
}
