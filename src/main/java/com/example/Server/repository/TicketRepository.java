package com.example.Server.repository;

import com.example.Server.entity.Ticket;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {
    @Query("FROM Ticket WHERE ticketSubmittedBy = :accountIdVar")
    List<Ticket> getAllTicketsByAccountId(@Param("accountIdVar") Integer accountId);

    @Query("FROM Ticket WHERE ticketStatus = :ticketStatusVar")
    List<Ticket> getAllTicketsByStatus(@Param("ticketStatusVar") String ticketStatus);

    @Query("FROM Ticket WHERE ticketSubmittedBy = :accountIdVar AND ticketType = :ticketTypeVar")
    List<Ticket> getAllTicketsByAccountIdFilter(@Param("accountIdVar") Integer accountId, @Param("ticketTypeVar") String ticketType);
}
