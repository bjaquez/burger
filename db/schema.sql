CREATE DATABASE u3s8i6hpvmserwb0;
USE u3s8i6hpvmserwb0;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);