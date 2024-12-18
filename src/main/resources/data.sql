-- Starting test values with ids of 9999 to avoid test issues
insert into account (accountId, username, password, role) values (9999, 'testuser1', 'password', 'Employee');
insert into account (accountId, username, password, role) values (9998, 'testuser2', 'password', 'Manager');
insert into account (accountId, username, password, role) values (9997, 'testuser3', 'password', 'Employee');
insert into account (accountId, username, password, role) values (9996, 'testuser4', 'password', 'Manager');

insert into ticket (ticketId, ticketSubmittedBy, ticketType, ticketAmount, ticketDescription, ticketStatus) values (9999, 9999, 'typeTest1', 500, 'ticket description 1', 'Pending');
insert into ticket (ticketId, ticketSubmittedBy, ticketType, ticketAmount, ticketDescription, ticketStatus) values (9998, 9999, 'typeTest2', 500, 'ticket description 2', 'Approved');
insert into ticket (ticketId, ticketSubmittedBy, ticketType, ticketAmount, ticketDescription, ticketStatus) values (9997, 9997, 'typeTest1', 500, 'ticket description 3', 'Denied');
insert into ticket (ticketId, ticketSubmittedBy, ticketType, ticketAmount, ticketDescription, ticketStatus) values (9996, 9997, 'typeTest2', 500, 'ticket description 4', 'Pending');