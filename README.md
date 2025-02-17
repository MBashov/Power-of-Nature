# Power-of-Nature

## SoftUni JS Back-End Exam Task 📝

This project is aimed at creating an application for the **Power of Nature** – specifically, past disasters. Visitors can **view** the **Home** page and the **Power of Nature (Catalog)** page, which displays available **disasters**. The app is built using **Node.js** and **MongoDB**.

**Note**: The HTML and CSS for this project were provided by the university as part of the course materials.

---

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Technologies](#technologies)
- [SoftUni JS Back-End Course Key Technologies and Features](#softuni-js-back-end-course-key-technologies-and-features)

---

## Installation

Follow these steps to get the project up and running locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/MBashov/Power-of-Nature.git
    ```

2. **Navigate into the project directory:**
    ```bash
    cd Power-of-Nature
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Run the application:**
    ```bash
    npm start
    ```

Your app should now be running locally. Visit `http://localhost:3000` in your browser to see it in action!

---

## Features

Here are the main features of the **Power-of-Nature** app:

- **User Authentication**: Users can sign up and log in to access personalized content.
- **Authorization**: Access to certain features is restricted to authorized users only.
- **Post Management**: Users can **add, edit**, and **delete** their posts at any time.
- **Search Functionality**: Easily filter all **matches** by **name** and **type** using a **search string** (case-insensitive).

---

## Technologies

This project uses the following technologies:

- **Node.js**: JavaScript runtime environment for the backend.
- **MongoDB**: NoSQL database to store data.
- **Express.js**: Web framework for building the server.
- **Handlebars**: Templating engine for rendering dynamic content on the frontend.
- **CSS**: Styling for the app's user interface (provided by the university).
- **HTML**: Structure for the web pages (provided by the university).

---

## SoftUni JS Back-End Course Key Technologies and Features

Here’s an overview of key technologies and features covered in this course:

### **Node.js Streams and Utilities**  
Efficiently handle I/O operations with Node.js streams to improve memory management and performance in data processing. Common utilities are included to simplify frequent tasks, boosting productivity.

### **Express.js and Templating**  
Build the web application using Express.js, a flexible Node.js framework. It enables quick routing, middleware integration, and a clean project structure. A templating engine (such as **Handlebars**) is used for rendering dynamic content on the client-side.

### **NoSQL and MongoDB**  
MongoDB, a NoSQL database, is used to store data. Its flexible schema allows for rapid development and scaling as the project grows.

### **Mongoose**  
Mongoose simplifies interaction with MongoDB by providing a schema-based solution for modeling data. It enables features such as validation, querying, and population of related data.

### **Sessions and Authentication**  
Sessions are implemented to track user activity across multiple requests. Authentication, including login and sign-up functionality, ensures that user data is secure.

### **Validation and Error Handling**  
Input validation ensures that user-entered data is in the correct format. Errors are handled gracefully, with user-friendly messages and robust logging for debugging.
