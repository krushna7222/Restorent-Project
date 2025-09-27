package com.restorent.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.restorent.entity.BookTableRequest;
import com.restorent.entity.BookingTables;
import com.restorent.entity.LoginRequest;
import com.restorent.entity.RegisterRequest;
import com.restorent.entity.User;
import com.restorent.entity.UserResponce;

public interface UserService {

	String register(RegisterRequest req);

	boolean login(LoginRequest req);

	String bookTable(BookTableRequest req);

	List<BookingTables> mybooking();

}
