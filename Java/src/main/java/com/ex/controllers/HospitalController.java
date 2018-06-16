package com.ex.controllers;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ex.service.HospitalService;
import com.google.gson.Gson;

@Controller
public class HospitalController {

	@Autowired
	HospitalService hospitals;

	@RequestMapping(value="/hospitalsByAddressZip", method=RequestMethod.GET, produces = "application/json; charset=UTF-8")
	@ResponseBody
	public String findByZip(HttpSession session, String zip) {
		
		if (zip == null) {
			return "null";
		}
		
		return new Gson().toJson(hospitals.findByAddressZip(zip));
	}
	
	@RequestMapping(value="/hospitalsByLatitudeBetweenAndLongitudeBetween", method=RequestMethod.GET, produces = "application/json; charset=UTF-8")
	@ResponseBody
	public String findByLatitudeBetweenAndLongitudeBetween(HttpSession session, Double minLatititude, Double maxLatititude,
			Double minLongitude, Double maxLongitude) {
		
		if (minLatititude == null ||
			maxLatititude == null ||
			minLongitude == null ||
			maxLongitude == null) {
			return "null";
		}
		
		return new Gson().toJson(hospitals.findByLatitudeBetweenAndLongitudeBetween(minLatititude, maxLatititude, minLongitude, maxLongitude));
	}

	@ModelAttribute
	public void setVaryResponseHeader(HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
	} 
	
}
