import express from "express";
const app = express();

//body-parser middleware for reading returned data in JSON format
app.use(express.json());

//store the user data in an example array
const users = [
    {
        userName: "guest",
        password: "123"
    },
    {
        userName: "admin",
        password: "456"
    }
]

//check the user name and password using middleware
function authMiddleware(req, res, next) {
    const {userName, password} = req.body;

    const user = users.find(user => user.userName === userName && user.password === password);

    if(user) {
        next(); //authentication is successful, go to next step
    } else {
        //res.status(401).send("Unsuccessful trial! Your user name or password is wrong.");
        const error = new Error("Trial not acceptable! Your user name or password is wrong.");
        error.status = 406;
        next(error); //pass the error to be handled by the global error handler middleware
    }
}

//create the router
const router = express.Router();

//define a middleware for the router
router.use((req, res, next) => {
    console.log("Router level middleware for /login");
    next();
})

//use a middleware for checking identity in login route
router.post('/login', authMiddleware, (req, res) => {
    res.send("Your login is successful! Welcome!");
})

//link the router to the app
app.use('/api', router);

//error handling middleware
app.use((err, req, res, next) => {
    console.log("here")
    console.error(err.message);
    const errorStatus = err.status || 500; //For non-specific errors, 500 (internal server error)
    res.status(errorStatus).json({
        error: {
            message: err.message,
            status: errorStatus
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})


//curl -X Pn -H "Content-Type: application/json" -d '{"userName": "guest", "password": "123"}'