package com.restorent.utils;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class SessionManager {
    private Map<String, String> sessions = new HashMap<>();

    public void addSession(String token, String email) {
        sessions.put(token, email);
    }

    public String getEmail(String token) {
        return sessions.get(token);
    }

    public void removeSession(String token) {
        sessions.remove(token);
    }
    
	 public boolean isValidToken(String token) {
	        return sessions.containsKey(token);
	    }
}
