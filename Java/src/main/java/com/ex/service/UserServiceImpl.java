package com.ex.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.User;
import com.ex.repository.UserRepository;
import com.ex.util.Hash;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repo;
	
	@Override
	public User login(String username, String password) {
		username = username.toLowerCase();
		return repo.findByUsernameAndPassword(username, Hash.hash(password + username));
	}

	@Override
	public User register(User u) {
		
		if (u.getEmail() == null || u.getUsername() == null || u.getPassword() == null) {
			return null;
		}
		
		u.setUsername(u.getUsername().toLowerCase());
		u.setEmail(u.getEmail().toLowerCase());
		
		if (repo.findByUsername(u.getUsername()) != null || repo.findByEmail(u.getEmail()) != null) {
			return null;
		}
		
		u.setPassword(Hash.hash(u.getPassword() + u.getUsername()));

		System.out.println("Registering, " + u.getUsername() + ", " + u.getEmail());
		
		return repo.save(u);			
	}

}
