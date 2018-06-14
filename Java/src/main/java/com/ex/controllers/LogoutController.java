package com.ex.controllers;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LogoutController {

	@RequestMapping(value="/logout", method=RequestMethod.POST, produces = "application/json; charset=UTF-8")
	@ResponseBody
	public String logout(HttpSession session) {
		session.removeAttribute("user");
		return "null";
	}
	
	@ModelAttribute
	public void setVaryResponseHeader(HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
	} 
}
