package com.ex.controllers;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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
	
	@RequestMapping(value="/register", method=RequestMethod.POST, produces = "application/json; charset=UTF-8")
	@ResponseBody
	public String register(HttpSession session, @RequestBody String body) {
		
		User u = new Gson().fromJson(body, User.class);

		if (u.getInsurance() != null) {
			u.setInsurance(insurances.findByName(u.getInsurance().getName()));			
		}
		
		u = users.register(u);
		
		if (u != null) {
			session.setAttribute("user", u);
		}
		
		return new Gson().toJson(u);
	}
	
	@ModelAttribute
	public void setVaryResponseHeader(HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
	} 
}
