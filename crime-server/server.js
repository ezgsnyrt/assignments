import express from "express";
import axios from "axios";
const app = express();
const PORT = 3000;

// Fetch recent crime data for where you live and return it as JSON
app.get("/crimes", async (req, res) => {
    try {
        const response = await axios.get(
            "https://brottsplatskartan.se/api/events/?location=Göteborg"
        );
        res.json(response.data.data);
        console.log("response.data.data: ", response.data.data);
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occured while fetching data.");
    }
});

// Return only the "headline" for each crime
app.get("/crimes/locations", async (req, res) => {
    try {
        const response = await axios.get(
            "https://brottsplatskartan.se/api/events/?location=Göteborg"
        );

        // Use map() method to extract the headline from each crime in response.data.data
        const headlines = response.data.data.map((event) => event.headline);

        res.json(headlines);
        console.log("headlines: ", headlines);
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occured while fetching data.");
    }
});

// Fetch crime data for the specified city and return the result
app.get("/crimes/search", async (req, res) => {
    // Retrieve the city from the query parameters
    const city = req.query.city;

    // Check if the city query parameter is provided
    if (!city) {
        return res
            .status(400)
            .json({ error: "City query parameter is required." });
    }

    try {
        // Fetch data from the external API with the specified city
        console.log(
            "url: ",
            `https://brottsplatskartan.se/api/events/?location=${encodeURIComponent(
                city
            )}`
        );
        const response = await axios.get(
            `https://brottsplatskartan.se/api/events/?location=${encodeURIComponent(
                city
            )}`
        );
        console.log(response.data.data);

        // Send the fetched data as the response
        res.json(response.data.data.title_location); // Adjust this as needed to format or filter the response
    } catch (err) {
        console.error("Error fetching crime data:", err);
        res.status(500).json({ error: "Failed to fetch crime data." });
    }
});

// Return only the latest crime event (the first one in the list).
app.get("/crimes/latest", async (req, res) => {
    try {
        const response = await axios.get(
            "https://brottsplatskartan.se/api/events/"
        );
        res.json(response.data.data[0]);
        console.log(response.data.data[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occured while fetching data.");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
