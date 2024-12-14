package com.example.Server;

import java.io.IOException;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;

public class UserUpdateRoleTest {
    ApplicationContext app;
    HttpClient webClient;
    ObjectMapper objectMapper;

    @BeforeEach
    public void setUp() throws InterruptedException {
        webClient = HttpClient.newHttpClient();
        objectMapper = new ObjectMapper();
        String[] args = new String[] {};
        app = SpringApplication.run(ServerApplication.class, args);
        Thread.sleep(500);
    }

    @AfterEach
    public void tearDown() throws InterruptedException {
    	Thread.sleep(500);
    	SpringApplication.exit(app);
    }

    @Test
    public void updateRole() throws IOException, InterruptedException {
        String json = "{\"accountId\":0,\"username\":\"testuser1\",\"role\":\"Manager\"}";
        HttpRequest patchRequest = HttpRequest.newBuilder()
            .uri(URI.create("http://localhost:8080/Account"))
            .method("PATCH", HttpRequest.BodyPublishers.ofString(json))
            .header("Content-Type", "application/json")
            .build();

        HttpResponse<String> response = webClient.send(patchRequest, HttpResponse.BodyHandlers.ofString());
        int status = response.statusCode();
        Integer actualResult = objectMapper.readValue(response.body().toString(), Integer.class);

        Assertions.assertEquals(200, status, "Expected Status Code 200 - Actual Code was: " + status);
        Assertions.assertTrue(actualResult.equals(1), "Expected to modify 1 row, but actually modified " + actualResult + " rows.");
    }
}