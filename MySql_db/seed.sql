INSERT INTO departments (name) VALUES ("IT");
INSERT INTO departments (name) VALUES ("Finance");
INSERT INTO departments (name) VALUES ("Marketing");
INSERT INTO departments (name) VALUES ("Accounting");
INSERT INTO departments (name) VALUES ("Sales");

INSERT INTO roles (title, salary, department_id) VALUES ("Sales Lead", "100000", 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Salesperson", "80000", 4);
INSERT INTO roles (title, salary, department_id) VALUES ("Software Engineer", "150000", 0);
INSERT INTO roles (title, salary, department_id) VALUES ("Account Manager", "160000", 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Accountant", "125000", 3);

INSERT INTO employees (first_name, last_name, role_id) VALUES ("Rebecca", "Grimm", 0);
INSERT INTO employees (first_name, last_name, role_id) VALUES ("John", "Grimm", 1);
INSERT INTO employees (first_name, last_name, role_id) VALUES ("Andrew", "Grey", 2);
INSERT INTO employees (first_name, last_name, role_id) VALUES ("Natalie", "Grin", 3);
INSERT INTO employees (first_name, last_name, role_id) VALUES ("Bryan", "Gone", 4);