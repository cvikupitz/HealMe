package com.ex.service;

import com.ex.beans.User;

public interface UserService {

	User login(String username, String password);
	User register(User u);
}
