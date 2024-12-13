drop table if exists account;

create table account (
    accountId int primary key auto_increment,
    username varchar(255) not null unique,
    password varchar(255),
    role varchar(255)
);

-- Starting test values with ids of 9999 to avoid test issues
insert into account values (9999, 'testuser1', 'password', 'Employee');
insert into account values (9998, 'testuser2', 'password', 'Manager');
insert into account values (9997, 'testuser3', 'password', 'Employee');
insert into account values (9996, 'testuser4', 'password', 'Manager');