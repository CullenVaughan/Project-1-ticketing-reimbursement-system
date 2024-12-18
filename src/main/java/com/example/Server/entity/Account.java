package com.example.Server.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "account")
public class Account {
    @Column(name = "accountId")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer accountId;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    private String role;

    public Account() {}

    public Account(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public Account(Integer accountId, String username, String role) {
        this.accountId = accountId;
        this.username = username;
        this.role = role;
    }

    public Account(Integer accountId, String username, String password, String role) {
        this.accountId = accountId;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public Integer getAccountId() {
        return accountId;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null) return false;
        if (getClass() != obj.getClass()) return false;
        Account other = (Account) obj;
        if (accountId == null) {
			if (other.accountId != null) return false;
		} else if (!accountId.equals(other.accountId)) return false;
        if (password == null) {
			if (other.password != null) return false;
		} else if (!password.equals(other.password)) return false;
        if (username == null) {
			if (other.username != null) return false;
		} else if (!username.equals(other.username)) return false;
        if (role == null) {
			if (other.role != null) return false;
		} else if (!role.equals(other.role)) return false;
		return true;
    }

    @Override
    public String toString() {
        return "Account {" + 
                " accountId = " + accountId +
                ", username = '" + username + '\'' +
                ", password = '" + password + '\'' +
                ", role = '" + role + '\'' + '}';
    }
}