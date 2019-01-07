DROP DATABASE IF exists burgers_db;
-- Create a database 
CREATE DATABASE burgers_db;

-- Make it clear that the database we want to refer to is the one we just created
USE burgers_db;
-- Create a burgers table with these fields:
-- id as an auto increment that serves as the primary key,
-- burger_name as a string depending on the name of the burger,
-- and devoured as true or false boolean.
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (100),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)

);

