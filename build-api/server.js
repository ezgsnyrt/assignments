import express from "express";
const app = express();

const PORT = 3000;

app.use(express.json());

//Set the basic route
app.get("/greet", (request, response) => {
    response.send("Hello, developer!");
});

//Set an extra route for users
app.get("/users", (request, response) => {
    const users = [
        {
            id: 1,
            name: "Ezgi",
            age: 31
        },
        {
            id: 2,
            name: "Cem",
            age: 33
        }
    ];
    response.json(users);
});

app.post("/submit", (request, response) => {
    const newUser = request.body.name;
    const userAge = request.body.age;
    console.log(newUser);
    response.json({message: `Hello, ${newUser}! You are ${userAge} years old.`, user: newUser})
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});