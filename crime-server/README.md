# Assignment: Crime Server with Express.js

## Assignment Overview
Create a `server.js` file where you'll set up an Express server to fetch data from the **Brottsplatskartan API**. Create multiple routes to practice handling **GET requests**, working with **query parameters**, and using **debugging tools**.

---

## Instructions

### 1. Created the Express Server
   - In the `server.js` file, write code to import the required modules

---

### 3. Created the Following Endpoints

#### **GET /crimes**
   - Fetch recent crime data from (`https://brottsplatskartan.se/api/events/?location=helsingborg&limit=5`) for where you live and return it as JSON.

#### **GET /crimes/locations**
   - Return only the **"headline"** for each crime using the `.map()` method

#### **GET /crimes/search?city=:city**
   - Allow users to specify a city (like **"malmo"** or **"stockholm"**) via a query parameter.

#### **GET /crimes/latest**
   - Return only the **latest crime event** (the first one in the list).

---

### 4. Test Your Server
   - Use **Insomnia**, or your browser to test each route. Make sure your server handles errors properly (e.g., if the city is not found).

---

## Debugging Tasks

### 1. Use Breakpoints in VS Code
   - Set breakpoints in your code to pause execution and inspect the data returned from the API.

### 2. Use Chrome DevTools
   - Open your browser’s developer tools (**Ctrl+Shift+I**) and inspect the response from your `/crimes` routes.
