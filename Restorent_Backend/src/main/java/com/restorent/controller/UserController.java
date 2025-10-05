package com.restorent.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.restorent.entity.BookTableRequest;
import com.restorent.entity.BookingTables;
import com.restorent.entity.LoginRequest;
import com.restorent.entity.RegisterRequest;

import org.springframework.http.HttpStatus;
import com.restorent.service.UserService;
import com.restorent.utils.ApiResponse;
import com.restorent.utils.SessionManager;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private SessionManager sessionManager;
		
	@PostMapping( value = "/register")
	public ResponseEntity<ApiResponse<String>> register(@RequestBody RegisterRequest req){
		String data = userService.register(req);
		return ResponseEntity.ok().body(new ApiResponse<>(201, data, "registered successfully"));
	}
	

	@PostMapping("/login")
	public ResponseEntity<ApiResponse<String>> login(@RequestBody LoginRequest req){
	    boolean success = userService.login(req);

	    if (success) {
	        String token = UUID.randomUUID().toString(); // generate random token
	        sessionManager.addSession(token, req.getEmail());
	        return ResponseEntity.ok(new ApiResponse<>(200, token, "Logged in successfully"));		
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                             .body(new ApiResponse<>(200, null,"Invalid credentials"));
	    }
	}

	
//	@PostMapping( value = "/login")
//	public ResponseEntity<ApiResponse<String>> login(@RequestBody LoginRequest req){
//		boolean success = userService.login(req);
//		
//		if (success) {
//            String token = UUID.randomUUID().toString(); // generate random token
//            sessions.put(token, req.email);
//            return ResponseEntity.ok().body(new ApiResponse<>(200, token, "Logged in successfully"));		
//		}else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse<>(200, null,"Invalid credentials"));
//        }
//		
//	}
	
	

	@PostMapping("/logout")
	public ResponseEntity<ApiResponse<String>> logout(@RequestHeader("Authorization") String token) {
	    // Check if token exists in session manager
	    String email = sessionManager.getEmail(token);

	    if (email != null) {
	        sessionManager.removeSession(token); // remove token
	        return ResponseEntity.ok(new ApiResponse<>(200, null, "Logged out successfully!"));
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                             .body(new ApiResponse<>(400, null, "Invalid or already logged out token"));
	    }
	}

	
//    @PostMapping("/logout")
//    public ResponseEntity<ApiResponse<String>> logout(@RequestHeader("Authorization") String token) {
//        if (sessions.containsKey(token)) {
//            sessions.remove(token); // remove token from session store
//            return ResponseEntity.ok().body(new ApiResponse<>(200, null, "Logged out successfully!"));
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse<>(400, null, "Invalid or already logged out token"));
//        }
//    }
    
    @PostMapping("/book-table")
    public ResponseEntity<ApiResponse<String>> bookTable(@RequestHeader("Authorization") String token, @RequestBody BookTableRequest req) {
        if (sessionManager.isValidToken(token)) {
        	String msg = userService.bookTable(req);
        	return ResponseEntity.ok().body(new ApiResponse<>(200, msg,"Success.."));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse<>(400, null,"Invalid.. "));
        }
    }
    
    @GetMapping("/my-booking")
    public ResponseEntity<ApiResponse<List<BookingTables>>> myBooking(@RequestHeader("Authorization") String token) {
        if (sessionManager.isValidToken(token)) {
            List<BookingTables> bookings = userService.mybooking(token);
            return ResponseEntity.ok().body(new ApiResponse<>(200, bookings, "My Bookings.."));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                                 .body(new ApiResponse<>(400, null, "Invalid Token"));
        }
    }


    
//    @GetMapping("/my-booking")
//    public ResponseEntity<ApiResponse<List<BookingTables>>> myBooking(@RequestHeader("Authorization") String token){
//    	if (isValidToken(token)) {
//        	List<BookingTables> bookings = userService.mybooking();
//        	return ResponseEntity.ok().body(new ApiResponse<>(200, bookings,"All Bookings.."));
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse<>(400, null,"Invalid.. "));
//        }
//    }
    
    @PostMapping("/subscribe")
    public ResponseEntity<ApiResponse<String>> subscribe(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        userService.subscribe(email);

        ApiResponse<String> response = new ApiResponse<>(200, null, "Suscribed Successfull..");
        return ResponseEntity.ok(response);
    }

	
	@GetMapping( value = "/test")
	public String test() {
		return "Project Is Running";
	}
}

