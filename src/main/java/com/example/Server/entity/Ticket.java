package com.example.Server.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ticket")
public class Ticket {
    @Column(name = "ticketId")
    @Id
    @GeneratedValue
    private Integer ticketId;

    @Column(name = "ticketSubmittedBy")
    private Integer ticketSubmittedBy;

    @Column(name = "ticketType")
    private String ticketType;

    @Column(name = "ticketAmount")
    private Integer ticketAmount;

    @Column(name = "ticketDescription")
    private String ticketDescription;

    @Column(name = "ticketStatus")
    private String ticketStatus;

    public Ticket() {}

    public Ticket(Integer ticketSubmittedBy, String ticketType, Integer ticketAmount, String ticketDescription) {
        this.ticketSubmittedBy = ticketSubmittedBy;
        this.ticketType = ticketType;
        this.ticketAmount = ticketAmount;
        this.ticketDescription = ticketDescription;
    }

    public Ticket(Integer ticketId, Integer ticketSubmittedBy, String ticketType, Integer ticketAmount, String ticketDescription, String ticketStatus) {
        this.ticketId = ticketId;
        this.ticketSubmittedBy = ticketSubmittedBy;
        this.ticketType = ticketType;
        this.ticketAmount = ticketAmount;
        this.ticketDescription = ticketDescription;
        this.ticketStatus = ticketStatus;
    }

    public Integer getTicketId() {
        return ticketId;
    }

    public void setTicketId(Integer ticketId) {
        this.ticketId = ticketId;
    }

    public Integer getTicketSubmittedBy() {
        return ticketSubmittedBy;
    }

    public void setTicketSubmittedBy(Integer ticketSubmittedBy) {
        this.ticketSubmittedBy = ticketSubmittedBy;
    }

    public String getTicketType() {
        return ticketType;
    }

    public void setTicketType(String ticketType) {
        this.ticketType = ticketType;
    }

    public Integer getTicketAmount() {
        return ticketAmount;
    }

    public void setTicketAmount(Integer ticketAmount) {
        this.ticketAmount = ticketAmount;
    }

    public String getTicketDescription() {
        return ticketDescription;
    }

    public void setTicketDescription(String ticketDescription) {
        this.ticketDescription = ticketDescription;
    }

    public String getTicketStatus() {
        return ticketStatus;
    }

    public void setTicketStatus(String ticketStatus) {
        this.ticketStatus = ticketStatus;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null) return false;
        if (getClass() != obj.getClass()) return false;
        Ticket other = (Ticket) obj;
        if (ticketId == null) {
			if (other.ticketId != null) return false;
		} else if (!ticketId.equals(other.ticketId)) return false;
        if (ticketSubmittedBy == null) {
			if (other.ticketSubmittedBy != null) return false;
		} else if (!ticketSubmittedBy.equals(other.ticketSubmittedBy)) return false;
        if (ticketType == null) {
			if (other.ticketType != null) return false;
		} else if (!ticketType.equals(other.ticketType)) return false;
        if (ticketAmount == null) {
			if (other.ticketAmount != null) return false;
		} else if (!ticketAmount.equals(other.ticketAmount)) return false;
        if (ticketDescription == null) {
			if (other.ticketDescription != null) return false;
		} else if (!ticketDescription.equals(other.ticketDescription)) return false;
        if (ticketStatus == null) {
			if (other.ticketStatus != null) return false;
		} else if (!ticketStatus.equals(other.ticketStatus)) return false;
		return true;
    }

    @Override
    public String toString() {
        return "Ticket {" + 
                " ticketId = " + ticketId +
                ", ticketSubmittedBy = '" + ticketSubmittedBy + '\'' +
                ", ticketType = '" + ticketType + '\'' +
                ", ticketAmount = '" + ticketAmount + '\'' +
                ", ticketDescription = '" + ticketDescription + '\'' +
                ", ticketStatus = '" + ticketStatus + '\'' + '}';
    }
}