package com.restorent.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restorent.entity.BookingTables;

public interface BookingTablesRepository extends JpaRepository<BookingTables, Integer> {

}
