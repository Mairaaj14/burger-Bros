
CREATE DATABASE burger_db;

-- Make it clear that the database we want to refer to is the one we just created
USE burger_db;
-- Create a burgers table with these fields:
-- id as an auto increment that serves as the primary key,
-- burger_name as a string depending on the name of the burger,
-- and devoured as true or false boolean.
CREATE TABLE burger
 (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (100),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)

);


SELECT * FROM burger_db.burger;
