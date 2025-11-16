# Airbus Inventory Management System

## Objective

1. Design and implement REST APIs integrated with a SQL database:
   1. GET all products belonging to a specific category
   2. GET all available products
   3. POST to add a new product
   4. PUT to update an existing product
   5. DELETE to remove a product  
2. Ensure RESTful design principles and best practices are followed  
3. Implement custom error handling to manage exceptions gracefully  
4. Secure all endpoints using JWT token-based authentication  
5. Develop a UI to:
   - Display all product details (name, description, and units) in a table  
   - Provide filtering options for data  
   - Support adding and updating products  
   - Enable product search by category  

---

## Roadmap

1. **Login to the Angular Application**

   **Default Credentials:**  
   - Username: [airbus02@gmail.com](mailto:airbus02@gmail.com)  
   - Password: 1234  

2. **Perform CRUD operations** on the inventory after login.

---

## Actions

1. Fork this repository.  
2. Clone the repository and navigate into the Spring Boot project folder.  
3. Install frontend dependencies using `npm install` inside the Angular project folder (`Angular AirbusInventory`).  
4. Create the required database and tables locally:
   - Create a database named `Product`.  
   - Create `Product` and `User` tables as shown below.  
   - SQL commands are also available in `Spring/src/main/resources/schema.sql`.  
5. Run the Spring Boot application (`airbus-management-spring`) on **port 8080**, ensuring that the database credentials in `application.properties` are configured correctly.  
6. Run the Angular frontend using `ng serve` (runs on **port 4200**).  

---

## Roadmap to Test the Inventory Management System

This project uses **Angular CLI version 12.2.3**.

### SQL Setup

**Create Database**
create database Product;

text

**Create Product Table**
use Product;
drop table Product;
create table Product (
productId varchar(256) unique not null,
productName varchar(256),
productDescription varchar(3500),
productCategory varchar(256),
units int
);

text

**Create User Table**
drop table User;
create table User (
username varchar(256),
password varchar(256)
);

text

**Insert Sample Data**
use Product;

insert into User(username, password)
values ("airbus01@gmail.com",
"$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6");

insert into User(username, password)
values ("airbus02@gmail.com",
"$2a$10$ZnnAdfh3cc7a/b1aODLeoOjifNPbHL6Vo8kpRJj.muPsVp1697hJO");

text

*(Passwords are encrypted using Bcrypt for security.)*  
- `airbus01@gmail.com` → password: `password`  
- `airbus02@gmail.com` → password: `1234`

---

## API Endpoints

**Base URL:** `http://localhost:8080/airbusManagement/`

### 1. Login

**POST:** `/JWT/authenticateUser`  
**Request Body:**
{
"username": "",
"password": ""
}

text
**Requirements**
- Username must be in email format  
- Username and password cannot be null  

**Default Credentials**
- Username: [airbus02@gmail.com](mailto:airbus02@gmail.com)  
- Password: 1234  

---

### 2. Get All Products

**GET:** `/getAllProducts`  
**Header:**
Authorization: Bearer <token>

text

---

### 3. Get Products by Category

**GET:** `/getProductsByCategory/{categoryName}`  
**Header:**
Authorization: Bearer <token>

text

---

### 4. Add Product

**POST:** `/addProduct`  
**Request Body:**
{
"productId": "",
"productName": "",
"productDescription": "",
"productCategory": "",
"units": 0
}

text
**Header:**
Authorization: Bearer <token>

text

---

### 5. Update Product

**POST:** `/updateProduct/{ProductId}`  
**Request Body:**
{
"productId": "",
"productName": "",
"productDescription": "",
"productCategory": "",
"units": 0
}

text
**Header:**
Authorization: Bearer <token>

text

---

### 6. Delete Product

**DELETE:** `/deleteProduct/{ProductId}`  
**Header:**
Authorization: Bearer <token>

text

---

## Tech Stack

- Spring Boot Application  
- Spring MVC  
- Spring JDBC  
- Maven  
- MySQL  
- Angular  

---

## Running the Angular Application

1. Install dependencies  
npm install

text
2. Build and serve the application  
npm run build
ng serve

text
3. The frontend will run on **port 4200**.

### Features

- Angular Material for UI components  
- Responsive design with Bootstrap  
- HTML 5.1 and CSS  

---

## Additional Help

For more information about Angular commands:
ng help

text
Or check out the official Angular CLI documentation.