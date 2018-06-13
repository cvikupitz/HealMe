package com.ex.run;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ex.beans.User;
import com.ex.service.UserService;

public class App {
	
	public static void main(String[] args) {
		
		try(AbstractApplicationContext context = new ClassPathXmlApplicationContext("beans.xml")) {
			
			UserService users = context.getBean(UserService.class);

			User u = new User("zachac", "zachac96@gmail.com", "password");
			
			System.out.println(u);
			System.out.println(users.register(u));
			System.out.println(users.login("zachac", "password"));
			System.out.println(users.login("zachac", "password1"));
			
		}
	}
}
