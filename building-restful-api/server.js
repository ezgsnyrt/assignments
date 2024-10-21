import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

let users= [
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
          country: "USA"
        }
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
          country: "USA"
        }
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
          country: "UK"
        }
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
          country: "Germany"
        }
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
          country: "USA"
        }
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
          country: "USA"
        }
    }
];

app.get('/users', (request, response) => {
    response.json(users);
});

app.post('/users', (request, response) => {
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
          country: request.body.address.country
        }
    };
    users.push(newUser);
    response.json({ message: "New user added successfully", users: newUser })
});

app.put('/users/:id', (request, response) => {
    const userId = parseInt(request.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return response.status(404).json({ message: "The user cannot be found!" })
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
})

app.delete('/users/:id', (request, response) => {
    const userId = parseInt(request.params.id);
    users = users.filter(u => u.id !== userId);

    response.json({ message: "User deleted successfully!" });
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});