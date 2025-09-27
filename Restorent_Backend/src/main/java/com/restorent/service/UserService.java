package com.restorent.service;

import java.util.List;

import com.restorent.entity.BookTableRequest;
import com.restorent.entity.BookingTables;
import com.restorent.entity.LoginRequest;
import com.restorent.entity.RegisterRequest;

public interface UserService {

	String register(RegisterRequest req);

	boolean login(LoginRequest req);

	String bookTable(BookTableRequest req);

	List<BookingTables> mybooking();

	void subscribe(String email);

}
