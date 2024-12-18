DROP TABLE if exists ticket;
DROP TABLE if exists account;

create table account (
    accountId SERIAL PRIMARY KEY,
    username varchar(255) not null unique,
    password varchar(255),
    role varchar(255)
);

create table ticket (
    ticketId SERIAL PRIMARY KEY,
    ticketSubmittedBy int,
    ticketType varchar(255),
    ticketAmount int,
    ticketDescription varchar(255),
    ticketStatus varchar(255),
    foreign key (ticketSubmittedBy) references account(accountId)
);