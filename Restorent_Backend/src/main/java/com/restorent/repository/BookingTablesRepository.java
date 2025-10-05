package com.restorent.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restorent.entity.BookingTables;

public interface BookingTablesRepository extends JpaRepository<BookingTables, Integer> {
    List<BookingTables> findByEmail(String email);

}
