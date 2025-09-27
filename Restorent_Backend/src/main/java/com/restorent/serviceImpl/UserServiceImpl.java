package com.restorent.serviceImpl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restorent.entity.BookTableRequest;
import com.restorent.entity.BookingTables;
import com.restorent.entity.LoginRequest;
import com.restorent.entity.RegisterRequest;
import com.restorent.entity.User;
import com.restorent.entity.UserResponce;
import com.restorent.repository.BookingTablesRepository;
import com.restorent.repository.UserRepository;
import com.restorent.service.UserService;
import com.restorent.utils.PasswordUtil;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository user;
	
	@Autowired
	private BookingTablesRepository bookTable;
	
	@Autowired
	private PasswordUtil password;

	@Override
	public String register(RegisterRequest req) {
		
		if(req.name == null && req.email == null && req.password == null) {
			throw new IllegalArgumentException("Data Is NULL");
		}
		
		User u = new User();
		
		u.setName(req.getName());
		u.setEmail(req.getEmail());
		u.setPassword(password.hashPassword(req.getPassword()));
		
		User data = user.save(u);
		
		
		return req.getName();
		
	}

	@Override
	public boolean login(LoginRequest req) {
		
		if(req.email == null && req.password == null) {
			throw new IllegalArgumentException("Credintial Is NULL");
		}
		
		boolean msg = user.findByEmail(req.email)
						.map(user -> password.checkPassword(req.password, user.getPassword()))
						.orElse(false);
		
		System.out.println(msg);
		
		if(msg==true) {
			return msg;
		}
		throw new IllegalArgumentException("User Not Found ");
	}

	@Override
	public String bookTable(BookTableRequest req) {
		
		if(req.name == null && req.phone == null) {
			throw new IllegalArgumentException("Name and Phone Is Required...");
		}
		
		BookingTables t = new BookingTables();
		
		t.setName(req.name);
		t.setEmail(req.email);
		t.setPhone(req.phone);
		t.setGuests(req.guests);
		t.setDate(req.date);
		t.setTime(req.time);
		
		BookingTables booking =  bookTable.save(t);
		
		
		return "Table Booking Done";
	}

	@Override
	public List<BookingTables> mybooking() {
		
		List<BookingTables> booking = bookTable.findAll();
		
		return booking;
	}

}
