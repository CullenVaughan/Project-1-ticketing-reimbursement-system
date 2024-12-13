package com.example.Server.repository;

import com.example.Server.entity.Account;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    @Query("FROM Account WHERE username = :usernameVar")
    List<Account> getAccountByUsername(@Param("usernameVar") String username);

    @Query("FROM Account WHERE username = :usernameVar AND password = :passwordVar")
    Account getAccount(@Param("usernameVar") String username, @Param("passwordVar") String password);

    @Query("FROM Account WHERE username = :usernameVar")
    Account getAccountForUpdate(@Param("usernameVar") String username);
}