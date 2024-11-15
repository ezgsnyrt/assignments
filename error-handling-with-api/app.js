import express from 'express';
import { createReservation } from './database.js';
import { getReservation } from './database.js';

const app = express();
app.use(express.json());

app.post('/reserve', (req, res) => {
    createReservation(req.body, (error, result) => {
        if(error) {
            return res.status(500).json({ message: error });
        }
        res.status(201).json({ message: 'Reservation successful', data: result});
    });
});

//Async/Await Error Handling
app.get('/reservation/:id', async (req, res) => {
    try {
        const reservation = await getReservation(req.params.id);
        res.status(200).json({ message: 'Reservation found', data: reservation });
    } catch (error) {
        res.status(500).json({ message: error.message || 'Failed to retrieve reservation' });
    }
});

// Route that intentionally generates an error
app.get('/broken-route', (req, res, next) => {
    const error = new Error('This route is broken on purpose!');
    next(error); // Pass the error to the error-handling middleware
});

// Express Error-Handling Middleware to check specific errors
app.use((error, req, res, next) => {
    console.error('Error:', error.message || error);

    if (error.type === 'ValidationError') {
        res.status(400).json({ message: error.message || 'Invalid data provided' }); // Handle validation errors
    } else if (error.type === 'NotFoundError') {
        res.status(404).json({ message: error.message || 'Resource not found' });  // Handle not found errors
    } else if (error.type === 'DatabaseError' || error.message.toLowerCase().includes('database')) {
        res.status(503).json({ message: 'A database-related error occurred. Please try again later.' }); // Handle database-related errors
    } else {
        res.status(500).json({ message: error.message || 'Something went wrong on the server side!' });  // Generic error message for general server errors
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));