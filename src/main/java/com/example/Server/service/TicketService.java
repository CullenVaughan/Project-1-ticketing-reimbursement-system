package com.example.Server.service;

import com.example.Server.entity.*;
import com.example.Server.repository.*;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TicketService {
    private TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public Ticket insertTicket(Ticket ticket) {
        if (ticket.getTicketAmount() > 0 && ticket.getTicketDescription() != "") {
            ticket.setTicketStatus("Pending");
            return (Ticket) ticketRepository.save(ticket);
        } else {
            return null;
        }
    }

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public List<Ticket> getAllTicketsByStatus(String ticketStatus) {
        return ticketRepository.getAllTicketsByStatus(ticketStatus);
    }

    public List<Ticket> getAllTicketsById(Integer accountId) {
        return ticketRepository.getAllTicketsByAccountId(accountId);
    }

    public List<Ticket> getAllTicketsByIdAndType(Integer accountId, String ticketType) {
        return ticketRepository.getAllTicketsByAccountIdFilter(accountId, ticketType);
    }

    public void updateTicketStatus(Ticket ticket, String ticketStatus) {
        ticket.setTicketStatus(ticketStatus);
        ticketRepository.save(ticket);
    }
}
