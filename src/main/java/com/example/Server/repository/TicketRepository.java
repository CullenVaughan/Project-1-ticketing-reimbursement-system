package com.example.Server.repository;

import com.example.Server.entity.Ticket;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {
    
}
