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

}
