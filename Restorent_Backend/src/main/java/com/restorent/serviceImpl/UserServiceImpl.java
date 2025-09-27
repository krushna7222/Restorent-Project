package com.restorent.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;

import com.restorent.entity.BookTableRequest;
import com.restorent.entity.BookingTables;
import com.restorent.entity.LoginRequest;
import com.restorent.entity.RegisterRequest;
import com.restorent.entity.User;
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
	
	@Autowired
	private JavaMailSender mailSender;

	@Override
	public String register(RegisterRequest req) {
	    
	    if(req.getName() == null || req.getEmail() == null || req.getPassword() == null) {
	        throw new IllegalArgumentException("Data is NULL");
	    }

	    if(user.findByEmail(req.getEmail()).isPresent()) {
	        throw new IllegalArgumentException("Email already exists");
	    }

	    if(req.getPhone() != null && user.findByPhone(req.getPhone()).isPresent()) {
	        throw new IllegalArgumentException("Phone number already exists");
	    }
	    
	    User u = new User();
	    u.setName(req.getName());
	    u.setEmail(req.getEmail());
	    u.setPhone(req.getPhone()); 
	    u.setPassword(password.hashPassword(req.getPassword()));
	    
	    user.save(u);

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

	@Override
	public void subscribe(String email) {
		    try {
		        MimeMessage mimeMessage = mailSender.createMimeMessage();
		        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

		        helper.setTo(email);
		        helper.setSubject("🎉 Welcome to FineDine Restaurant Family!");

		        // Inline image IDs
		        String logoCid = "logo001";
		        String restaurantCid = "resto001";
		        String foodCid = "food001";

		        String htmlContent = """
		            <!DOCTYPE html>
		            <html>
		              <body style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
		                <div style="max-width: 650px; margin: auto; background: #ffffff; padding: 25px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

		                  <!-- Header with Logo -->
		                  <div style="text-align: center; margin-bottom: 20px;">
		                    <img src='cid:%s' alt="FineDine Logo" style="max-height: 80px;">
		                    <h2 style="color: #e74c3c; margin-top: 10px;">Welcome to FineDine Restaurant</h2>
		                    <p style="color:#555; font-size:14px;">Exquisite Taste, Elegant Ambience</p>
		                  </div>

		                  <!-- Restaurant Banner -->
		                  <div style="text-align:center; margin: 20px 0;">
		                    <img src='cid:%s' alt="Restaurant" style="width:100%%; max-height:250px; border-radius:10px; object-fit:cover;">
		                  </div>

		                  <!-- Welcome Text -->
		                  <h3 style="color:#2c3e50; text-align:center;">🥂 Thank You for Subscribing!</h3>
		                  <p style="font-size: 16px; color: #333; text-align:center;">
		                    Dear Food Lover,<br><br>
		                    We're delighted to welcome you to the <strong>FineDine Family</strong>!  
		                    Get ready to enjoy exclusive updates, mouth-watering offers, and a fine dining experience like never before.
		                  </p>

		                  <!-- Food Image -->
		                  <div style="text-align:center; margin: 20px 0;">
		                    <img src='cid:%s' alt="Delicious Food" style="width:100%%; max-height:250px; border-radius:10px; object-fit:cover;">
		                  </div>

		                  <!-- Call to Action -->
		                  <div style="text-align:center; margin: 20px 0;">
		                    <a href="https://finedine-restaurant.netlify.app" 
		                       style="background:#e74c3c; color:#fff; padding:12px 24px; border-radius:8px; text-decoration:none; font-size:16px; font-weight:bold;">
		                       🍽️ Visit Our Restaurant
		                    </a>
		                  </div>

		                  <!-- Footer -->
		                  <hr style="margin: 25px 0; border: none; border-top: 1px solid #eee;">
		                  <p style="font-size: 13px; color: #888; text-align:center;">
		                    Sent with ❤️ by <strong>FineDine Restaurant</strong><br>
		                    Designed & Managed by <em>Krushna Shahane</em><br>
		                    If you did not subscribe, please ignore this email.
		                  </p>
		                </div>
		              </body>
		            </html>
		            """.formatted(logoCid, restaurantCid, foodCid);

		        helper.setText(htmlContent, true);

		        // Attach inline images
		        FileSystemResource logo = new FileSystemResource(new ClassPathResource("static/assets/logo.png").getFile());
		        FileSystemResource restaurantImg = new FileSystemResource(new ClassPathResource("static/assets/restaurant.png").getFile());
		        FileSystemResource foodImg = new FileSystemResource(new ClassPathResource("static/assets/food.png").getFile());


		        helper.addInline(logoCid, logo);
		        helper.addInline(restaurantCid, restaurantImg);
		        helper.addInline(foodCid, foodImg);

		        mailSender.send(mimeMessage);

		    } catch (Exception e) {
		    	e.printStackTrace();
		        throw new RuntimeException("Mail send failed: " + e.getMessage(), e);
		    }	
	}
	
}
