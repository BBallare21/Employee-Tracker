const inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

promptUser();

function promptUser() {
    
    function viewTeam() {
        inquirer.prompt([
            {
            type: "list",
            name: "menuOption",
            message: "What menu option would you like to use?",
            choices: ["View All Employees", 
            "View All Roles", 
            "View All Departments",
            "Add An Employee",
            "Add A Role",
            "Add A Department",
            "Quit"]
            }
        ]).then(choice => {
            switch(choice.menuOption) {
                case "View All Employees":
                    viewEmployees();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "View All Departments":
                    viewDepartments();
                    break;
                case "Add An Employee":
                    addEmployee();
                    break;
                case "Add A Role":
                    addRole();
                    break;
                case "Add A Department":
                    addDepartment();
                    break;
                default:
                    console.log("Have a great day!") 
            }
        })
    }

    function viewEmployees() {
        connection.query("SELECT * FROM employees", function (err, res) {
            if (err) throw err;

            console.table(res)
            viewTeam();
        })
    }

    function viewRoles() {
        connection.query("SELECT * FROM roles", function (err, res) {
            if (err) throw err;

            console.table(res)
            viewTeam();
        })
    }

    function viewDepartments() {
        connection.query("SELECT * FROM departments", function (err, res) {
            if (err) throw err;
    
            console.table(res)
            viewTeam();
        })
    }

    function addEmployee() {
        let roles = [];

        connection.query(`SELECT * FROM roles`, function (err, data) {
            if (err) throw err;

            for (let i = 0; i < data.length; i++) {
            roles.push(data[i].title);
        }

        inquirer.prompt([
            {
            name: 'first_name',
            message: "What is the employees first name?",
            type: 'input'
            },
            {
            name: 'last_name',
            message: 'What is the employees last name?',
            type: 'input',
            },
            {
            name: 'role_id',
            message: 'What is their role?',
            type: 'list',
            choices: roles,
            },
        ]).then(function ({ first_name, last_name, role_id,}) {
            let role = roles.indexOf(role_id)

            connection.query(`INSERT INTO employees (first_name, last_name, role_id) VALUES ('${first_name}', '${last_name}', ${role})`, function (err, res) {
                if (err) throw err;
                console.log("Employee Added")
                viewTeam();
            })
        })
    })
    }

    function addRole() {

    let departments = []

    connection.query(`SELECT * FROM departments`, function (err, data) {
        if (err) throw err;

        for (let i = 0; i < data.length; i++) {
            departments.push(data[i].name)
        }

        inquirer.prompt([
            {
            name: 'title',
            message: "What is the role?",
            type: 'input'
            },
            {
            name: 'salary',
            message: 'How much do they make?',
            type: 'input'
            },
            {
            name: 'department_id',
            message: 'What department does it belong to?',
            type: 'list',
            choices: departments
            }
        ]).then(function ({ title, salary, department_id }) {
            let index = departments.indexOf(department_id)

            connection.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${title}', '${salary}', ${index})`, function (err, res) {
                if (err) throw err;
                console.log("Role Added")
                viewTeam();
            })
        })
    })
    }

    function addDepartment() {
        inquirer.prompt(
            {
            name: 'departmentName',
            message: "What is the department's name?",
            type: 'input'
            }
        ).then(function ({ departmentName }) {
            connection.query(`INSERT INTO departments (name) VALUES ('${departmentName}')`, function (err, res) {
                if (err) throw err;
                console.log("Department Added")
                viewTeam();
            })
        })
    }
    viewTeam();
};

