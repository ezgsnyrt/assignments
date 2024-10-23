import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
app.use(express.json());
const PORT = 3000;

// Create swagger options object
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Users API",
            version: "1.0.0",
            description: "A simple Express User API",
        },
    },
    apis: ["./server.js"],
};

// Generate the documentation
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

let users = [
    {
        id: 1,
        name: "John",
        surname: "Doe",
        dateOfBirth: "1985-03-22",
        occupation: "Software Developer",
        placeOfWork: "Tech Solutions Inc.",
        email: "john.doe@example.com",
        phone: "+1-123-456-7890",
        address: {
            street: "123 Elm St",
            city: "San Francisco",
            state: "CA",
            country: "USA",
        },
    },
    {
        id: 2,
        name: "Jane",
        surname: "Smith",
        dateOfBirth: "1990-07-10",
        occupation: "Graphic Designer",
        placeOfWork: "Creative Studios Ltd.",
        email: "jane.smith@example.com",
        phone: "+1-987-654-3210",
        address: {
            street: "456 Oak St",
            city: "New York",
            state: "NY",
            country: "USA",
        },
    },
    {
        id: 3,
        name: "Emily",
        surname: "Johnson",
        dateOfBirth: "1992-11-05",
        occupation: "Marketing Manager",
        placeOfWork: "Global Marketing Co.",
        email: "emily.johnson@example.com",
        phone: "+44-20-1234-5678",
        address: {
            street: "789 Pine St",
            city: "London",
            state: "Greater London",
            country: "UK",
        },
    },
    {
        id: 4,
        name: "Michael",
        surname: "Brown",
        dateOfBirth: "1980-06-15",
        occupation: "Project Manager",
        placeOfWork: "Business Solutions LLC",
        email: "michael.brown@example.com",
        phone: "+49-30-9876-5432",
        address: {
            street: "101 Birch Ave",
            city: "Berlin",
            state: "Berlin",
            country: "Germany",
        },
    },
    {
        id: 5,
        name: "David",
        surname: "Williams",
        dateOfBirth: "1978-12-02",
        occupation: "Financial Analyst",
        placeOfWork: "Money Matters Corp.",
        email: "david.williams@example.com",
        phone: "+1-555-123-9876",
        address: {
            street: "11 Maple Dr",
            city: "Chicago",
            state: "IL",
            country: "USA",
        },
    },
    {
        id: 6,
        name: "Sophia",
        surname: "Davis",
        dateOfBirth: "1995-04-25",
        occupation: "Data Scientist",
        placeOfWork: "AI Innovations Inc.",
        email: "sophia.davis@example.com",
        phone: "+1-555-987-1234",
        address: {
            street: "500 Cedar St",
            city: "Austin",
            state: "TX",
            country: "USA",
        },
    },
];

/**
* @swagger
* /users:
*   get:
*     summary: Retrieve a list of users
*     description: Retrieve a list of users with their personal information such as name, surname, date of birth, occupation, place of work, email address, phone number, and address
*     responses:
*       200:
*         description: A list of users
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*                 properties:
*                   id:
*                     type: integer
*                   name:
*                     type: string
*                   surname:
*                     type: string
*                   dateOfBirth:
*                     type: string
*                   occupation:
*                     type: string
*                   placeOfWork:
*                     type: string
*                   email:
*                     type: string
*                   phone:
*                     type: string
*                   address:
*                     type: object
*                     properties:
*                       street:
*                         type: string
*                       city:
*                         type: string
*                       state:
*                         type: string
*                       country:
*                         type: string
*/

app.get("/users", (request, response) => {
    response.json(users);
});

/**
* @swagger
* /users:
*   post:
*     summary: Add a new user
*     requestBody:
*       require: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - name
*               - surname
*               - dateofBirth
*               - occupation
*               - placeOfWork
*               - email
*               - phone
*               - address
*             properties:
*               name:
*                 type: string
*               surname:
*                 type: string
*               dateOfBirth:
*                 type: string
*               occupation:
*                 type: string
*               placeOfWork:
*                 type: string
*               email:
*                 type: string
*               phone:
*                 type: string
*               address:
*                 type: object
*                 properties:
*                   street:
*                     type: string
*                   city:
*                     type: string
*                   state:
*                     type: string
*                   country:
*                     type: string
*     responses:
*       200:
*         description: User added successfully
*         content:
*           application/json:
*             schema:
*                 type: object
*                 properties:
*                   id:
*                     type: integer
*                   name:
*                     type: string
*                   surname:
*                     type: string
*                   dateOfBirth:
*                     type: string
*                   occupation:
*                     type: string
*                   placeOfWork:
*                     type: string
*                   email:
*                     type: string
*                   phone:
*                     type: string
*                   address:
*                     type: object
*                     properties:
*                       street:
*                         type: string
*                       city:
*                         type: string
*                       state:
*                         type: string
*                       country:
*                         type: string
*/

app.post("/users", (request, response) => {
    const newUser = {
        id: users.length + 1,
        name: request.body.name,
        surname: request.body.name,
        dateOfBirth: request.body.dateOfBirth,
        occupation: request.body.occupation,
        placeOfWork: request.body.placeOfWork,
        email: request.body.email,
        phone: request.body.phone,
        address: {
            street: request.body.address.street,
            city: request.body.address.city,
            state: request.body.address.state,
            country: request.body.address.country,
        },
    };
    users.push(newUser);
    response.json({ message: "New user added successfully", users: newUser });
});

/**
* @swagger
* /users/{id}:
*   put:
*     summary: Update an existing user
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: Numeric ID of the user to update
*     requestBody:
*       require: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*               surname:
*                 type: string
*               dateOfBirth:
*                 type: string
*               occupation:
*                 type: string
*               placeOfWork:
*                 type: string
*               email:
*                 type: string
*               phone:
*                 type: string
*               address:
*                 type: object
*                 properties:
*                   street:
*                     type: string
*                   city:
*                     type: string
*                   state:
*                     type: string
*                   country:
*                     type: string
*     responses:
*       200:
*         description: User updated successfully
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                 user:
*                   type: object
*                   properties:
*                     id:
*                       type: integer
*                     name:
*                       type: string
*                     surname:
*                       type: string
*                     dateOfBirth:
*                       type: string
*                     occupation:
*                       type: string
*                     placeOfWork:
*                       type: string
*                     email:
*                       type: string
*                     phone:
*                       type: string
*                     address:
*                       type: object
*                       properties:
*                         street:
*                           type: string
*                         city:
*                           type: string
*                         state:
*                           type: string
*                         country:
*                           type: string
*       404:
*         description: User not found
*/

app.put("/users/:id", (request, response) => {
    const userId = parseInt(request.params.id);
    const user = users.find((u) => u.id === userId);
    if (!user) {
        return response
            .status(404)
            .json({ message: "The user cannot be found!" });
    }
    user.name = request.body.name || user.name;
    user.surname = request.body.surname || user.surname;
    user.dateOfBirth = request.body.dateOfBirth || user.dateOfBirth;
    user.occupation = request.body.occupation || user.occupation;
    user.placeOfWork = request.body.placeOfWork || user.placeOfWork;
    user.email = request.body.email || user.email;
    user.phone = request.body.phone || user.phone;
    user.address = request.body.address || user.address;

    response.json({ message: "User updated successfully!", user });
});

/**
 * @swagger
 *  /users/{id}:
 *    delete:
 *      summary: Delete a user
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Numeric ID of the user to delete
 *      responses:
 *        200:
 *          description: User deleted successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *        404:
 *          description: User not found
 */

app.delete("/users/:id", (request, response) => {
    const userId = parseInt(request.params.id);
    users = users.filter((u) => u.id !== userId);

    response.json({ message: "User deleted successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
