package com.example.Server.controller;

import com.example.Server.entity.*;
import com.example.Server.service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;




@RestController
public class trsController {
    private AccountService accountService;
    private TicketService ticketService;

    @Autowired
    public trsController(AccountService accountService, TicketService ticketService) {
        this.accountService = accountService;
        this.ticketService = ticketService;
    }

    @PostMapping("/register")
    public ResponseEntity<Account> addAccount(@RequestBody Account account) {
        account = accountService.insertAccount(account);
        if (account != null) {
            if (account.getRole() != "false") {
                return ResponseEntity.status(200).body(account);
            } else {
                return ResponseEntity.status(409).body(null);
            }
        } else {
            return ResponseEntity.status(400).body(null);
        }
    }
    
     @PostMapping("/login")
    public ResponseEntity<Account> getAccount(@RequestBody Account account) {
        account = accountService.getAccount(account);
        if (account != null) {
            return ResponseEntity.status(200).body(account);
        } else {
            return ResponseEntity.status(401).body(null);
        }
    }

    @PatchMapping("/Account/{username}/{role}")
    public ResponseEntity updateAccount(@PathVariable("username") String username, @PathVariable("role") String role) {
        accountService.updateAccount(username, role);
        return ResponseEntity.status(200).body(1);
    }

    @GetMapping("/Account")
    public ResponseEntity getAllAccounts() {
        return ResponseEntity.status(200).body(accountService.getAllAccounts());
    }
    
    @PostMapping("/Ticket")
    public ResponseEntity<Ticket> addTicket(@RequestBody Ticket ticket) {
        ticket = ticketService.insertTicket(ticket);
        if (ticket != null) {
            return ResponseEntity.status(200).body(ticket);
        } else {
            return ResponseEntity.status(400).body(null);
        }
    }

    @GetMapping("/Ticket")
    public ResponseEntity getAllTickets() {
        return ResponseEntity.status(200).body(ticketService.getAllTickets());
    }

    @GetMapping("/Ticket/{ticketStatus}")
    public ResponseEntity getAllTicketsByStatus(@PathVariable("ticketStatus") String ticketStatus) {
        return ResponseEntity.status(200).body(ticketService.getAllTicketsByStatus(ticketStatus));
    }

    @GetMapping("/Ticket/{accountId}")
    public ResponseEntity getAllTicketsById(@PathVariable("accountId") Integer accountId) {
        return ResponseEntity.status(200).body(ticketService.getAllTicketsById(accountId));
    }

    @GetMapping("/Ticket/{accountId}/{ticketType}")
    public ResponseEntity getAllTicketsById(@PathVariable("accountId") Integer accountId, @PathVariable("ticketType") String ticketType) {
        return ResponseEntity.status(200).body(ticketService.getAllTicketsByIdAndType(accountId, ticketType));
    }

    @PatchMapping("/Ticket/{ticketStatus}")
    public ResponseEntity updateTicket(@RequestBody Ticket ticket, @PathVariable("ticketStatus") String ticketStatus) {
        ticketService.updateTicketStatus(ticket, ticketStatus);
        return ResponseEntity.status(200).body(1);
    }
}