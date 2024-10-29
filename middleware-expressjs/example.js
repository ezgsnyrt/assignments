import express from "express";
const app = express();

app.use((req, res, next) => {
    let userAuthenticated = false;
    if (!userAuthenticated) {
        return res.status(403).send("You are not allowed to make this request");
    }
    next();
})

app.use((req, res, next) => {
    console.log(`Order received at ${new Date().toLocaleDateString()}`);
    next();
});

app.use((req, res, next) => {
    const ingredientsAvailable = true;
    if (!ingredientsAvailable) {
        return res.status(400).send("Sorry, we are out of ingredients for that dish")
    }
    next();
})

app.get('/orders', (req, res) => {
    res.send("Your food is ready.")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})


// Router
const router = express.Router();

router.use((req, res, next) => {
    console.log("Router level middleware for /orders");
    next();
});

router.get("/orders", (req, res) => {
    // res.json({
    //     message: "Here are your orders"
    // })
    res.send("Here are your orders");
});

app.use("/api", router);


// Built-in middleware
// express.json();
// express.static();


// Error-handling middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Something went wrong");
})