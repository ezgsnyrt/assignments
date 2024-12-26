import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

// mongoose.connect("mongodb://localhost:21017/mynewdatabase");
mongoose.connect("mongodb://localhost:27017/mynewdatabase")
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });

// Database schema
const doctorSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    major: String,
    email: String,
    phone_number: Number,
});

const Doctor = mongoose.model('doctor', doctorSchema);

// Get all doctors and in case of an error return the error message
app.get("/doctors", async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new doctor and in case of an error return the error message
app.post("/doctors", async (req, res) => {
    try {
        const newDoctor = new Doctor(req.body);
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update a doctor by id and in case of an error return the error message
app.put("/doctors/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            req.body
        );

        if (!updatedDoctor) {
            return res.status(404).json({ error: "Doctor not found" });
        }
        res.json({ message: "Doctor updated successfully", updatedDoctor });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Delete a doctor by id and in case of an error return the error message
app.delete("/doctors/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDoctor = await Doctor.findByIdAndDelete(id);
        if (!deletedDoctor) {
            return res.status(404).json({ error: "Doctor not found" });
        }
        res.json({ message: "Doctor deleted successfully", deletedDoctor });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () =>
    console.log("Server is running at http://localhost:3000")
);