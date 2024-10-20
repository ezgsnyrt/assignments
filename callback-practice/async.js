let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if(success) {
        resolve("Operation was successful.")
    } else {
        reject("Operation failed.")
    }
});


const result = async() => {
    try {
        const value = await myPromise;
        console.log(value);
    } catch (error) {
        console.log("Reason of error is: ",error);
    }
}
result();


const fetchDataById = async(id) => {
    try {
        const response = await fetch(`https://anapioficeandfire.com/api/characters/${id}`)
        if(!response.ok) {
            throw new Error("Network response was not ok.");
        }
        // console.log(response);
        const data = await response.json();
        console.log("Data received: ", data);

        const person = data;
        console.log(`Person (ID: ${id}): ${JSON.stringify(person)}`);
    } catch (error) {
        console.log(error);
    }
}

fetchDataById(16);