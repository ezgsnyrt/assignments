async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

async function getData() {
    try {
        // const result = fetchData();
        // console.log(result); // Output: Data fetched

        const result = fetchData();
        console.log(result);
        result.then(resolve => {
            console.log(resolve);
        });

    } catch (error) {
        console.error(error);
    }
}

getData();