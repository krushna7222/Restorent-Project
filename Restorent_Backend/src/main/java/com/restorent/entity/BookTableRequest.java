package com.restorent.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.Data;

@Data
public class BookTableRequest {

    public String name;
    public String email;   
    public String phone;
    public LocalDate date; 
    public LocalTime time; 
    public Integer guests; 

    // getters and setters
//    public String getName() { return name; }
//    public void setName(String name) { this.name = name; }
//
//    public String getEmail() { return email; }
//    public void setEmail(String email) { this.email = email; }
//
//    public String getPhone() { return phone; }
//    public void setPhone(String phone) { this.phone = phone; }
//
//    public LocalDate getDate() { return date; }
//    public void setDate(LocalDate date) { this.date = date; }
//
//    public LocalTime getTime() { return time; }
//    public void setTime(LocalTime time) { this.time = time; }
//
//    public Integer getGuests() { return guests; }
//    public void setGuests(Integer guests) { this.guests = guests; }
}
