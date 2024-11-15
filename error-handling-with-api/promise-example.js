//Note
/** Error handling in promises

*/
function createReservation() {
    return new Promise ((resolve, reject) => {
        const error = Math.random() > 0.5 ? 'Restaurant is fully booked!' : null;

        // If there's an error, reject with the error message
        if(error) {
            reject(error);
        } else {
            // If successful, resolve with a success message
            resolve("Table reserved.")
        }
    });
}

// Call createReservation and manage the result using then and catch
createReservation()
    // If the Promise resolves successfully, it logs
    .then(success => console.log(success))

    // If the Promise is rejected, it logs
    .catch(error => console.error("Oh no!", error));