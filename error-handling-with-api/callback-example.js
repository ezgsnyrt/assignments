//Error handling in callbacks, promises, async/await, middleware in Express, error responses in APIs

/** Error handling in callbacks
    Create a function which stimulates a reservation database,
    takes a callback function, and returns a success or an error message **/

    function createReservation(data, callback) {
        setTimeout(() => {
            const errorMessage = 'Database error: Failed to create reservation';
            const isError = Math.random() > 0.5;

            if (isError) {
                // If there's an error, pass the error message to the callback
                callback(errorMessage, null);
            } else {
                // If successful, invoke the callback with a unique id and the provided data
                const reservation = { id: Date.now(), ...data };
                callback(null, reservation);
            }
        }, 1000);
    };

    // Example case for testing
    // Define callback function, call createReservation with reservation data and a callback
    createReservation({ name: "John Doe", date: "2023-10-10" }, (error, result) => {
        console.log(error, result)
        if (error) {
            console.error("There is an error:", error);
        } else {
            console.log("Reservation successful:", result);
        }
    });