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

-- Starting test values with ids of 9999 to avoid test issues
insert into account (accountId, username, password, role) values (9999, 'testuser1', 'password', 'Employee');
insert into account (accountId, username, password, role) values (9998, 'testuser2', 'password', 'Manager');
insert into account (accountId, username, password, role) values (9997, 'testuser3', 'password', 'Employee');
insert into account (accountId, username, password, role) values (9996, 'testuser4', 'password', 'Manager');

insert into ticket (ticketId, ticketSubmittedBy, ticketType, ticketAmount, ticketDescription, ticketStatus) values (9999, 9999, 'typeTest1', 500, 'ticket description 1', 'Pending');
insert into ticket (ticketId, ticketSubmittedBy, ticketType, ticketAmount, ticketDescription, ticketStatus) values (9998, 9999, 'typeTest2', 500, 'ticket description 2', 'Approved');
insert into ticket (ticketId, ticketSubmittedBy, ticketType, ticketAmount, ticketDescription, ticketStatus) values (9997, 9997, 'typeTest1', 500, 'ticket description 3', 'Denied');
insert into ticket (ticketId, ticketSubmittedBy, ticketType, ticketAmount, ticketDescription, ticketStatus) values (9996, 9997, 'typeTest2', 500, 'ticket description 4', 'Pending');