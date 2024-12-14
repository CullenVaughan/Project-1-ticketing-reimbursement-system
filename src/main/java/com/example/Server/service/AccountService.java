package com.example.Server.service;

import com.example.Server.entity.Account;
import com.example.Server.repository.AccountRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AccountService {
    private AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public Account insertAccount(Account account) {
        if (account.getUsername() != "" && account.getPassword().length() >= 8) {
            if (accountRepository.getAccountByUsername(account.getUsername()).isEmpty()) {
                return (Account) accountRepository.save(account);
            } else {
                account.setRole("false");
                return account;
            }
        } else {
            return null;
        }
    }

    public Account getAccount(Account account) {
        return accountRepository.getAccount(account.getUsername(), account.getPassword());
    }

    public void updateAccount(String username, String updateRole) {
        Account account = accountRepository.getAccountForUpdateByUsername(username);
        account.setRole(updateRole);
        accountRepository.save(account);
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }
}