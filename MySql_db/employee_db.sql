-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS employee_db;

-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE employee_db;

-- Use the DB wizard_schools_db for all the rest of the script
USE employee_db;

-- Created the table "schools"
CREATE TABLE departments (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id int NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT not NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id int NOT NULL,
    PRIMARY KEY (id)
);
