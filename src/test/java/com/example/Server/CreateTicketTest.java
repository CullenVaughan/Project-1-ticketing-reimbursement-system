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

import com.example.Server.entity.Ticket;
import com.fasterxml.jackson.databind.ObjectMapper;

public class CreateTicketTest {
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
    public void createTicketSuccessful() throws IOException, InterruptedException {
        String json = "{\"ticketSubmittedBy\": 9999, \"ticketType\": \"typeTest 1\", \"ticketAmount\": 500, \"ticketDescription\": \"ticket description 5\"}";
        HttpRequest postMessageRequest = HttpRequest.newBuilder()
            .uri(URI.create("http://localhost:8080/Ticket"))
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .header("Content-Type", "application/json")
            .build();

        HttpResponse<String> response = webClient.send(postMessageRequest, HttpResponse.BodyHandlers.ofString());
        int status = response.statusCode();

        Ticket expectedResult = new Ticket(1, 9999, "typeTest 1", 500, "ticket description 5", "Pending");
        Ticket actualResult = objectMapper.readValue(response.body().toString(), Ticket.class);

        Assertions.assertEquals(200, status, "Expected Status Code 200 - Actual Code was: " + status);
        Assertions.assertEquals(expectedResult, actualResult, "Expected="+expectedResult + ", Actual="+actualResult);
    }

    @Test
    public void createTicketAmountLessThenZero() throws IOException, InterruptedException {
        String json = "{\"ticketSubmittedBy\": 9999, \"ticketType\": \"typeTest 1\", \"ticketAmount\": 0, \"ticketDescription\": \"ticket description 5\"}";
        HttpRequest postMessageRequest = HttpRequest.newBuilder()
            .uri(URI.create("http://localhost:8080/Ticket"))
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .header("Content-Type", "application/json")
            .build();
        
        HttpResponse<String> response = webClient.send(postMessageRequest, HttpResponse.BodyHandlers.ofString());
        int status = response.statusCode();

        Assertions.assertEquals(400, status, "Expected Status Code 400 - Actual Code was: " + status);
    }

    @Test
    public void createTicketDescriptionTextBlank() throws IOException, InterruptedException {
        String json = "{\"ticketSubmittedBy\": 9999, \"ticketType\": \"typeTest 1\", \"ticketAmount\": 500, \"ticketDescription\": \"\"}";
        HttpRequest postMessageRequest = HttpRequest.newBuilder()
            .uri(URI.create("http://localhost:8080/Ticket"))
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .header("Content-Type", "application/json")
            .build();
        
        HttpResponse<String> response = webClient.send(postMessageRequest, HttpResponse.BodyHandlers.ofString());
        int status = response.statusCode();

        Assertions.assertEquals(400, status, "Expected Status Code 400 - Actual Code was: " + status);
    }
}