// fetch('https://65391869e3b530c8d9e7e640.mockapi.io/products')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json(); // or response.text() if the response is not in JSON format
//     })
//     .then(data => {
//         console.log(data); // handle the data
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation: ', error);
//     });




// const data = { key1: 'value1', key2: 'value2' };

// fetch('https://65391869e3b530c8d9e7e640.mockapi.io/products', {
//     method: 'POST', // or 'PUT'
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Success:', data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });



// async function getData() {
//     try {
//         const response = await fetch('https://api.example.com/data');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('There was a problem with the fetch operation: ', error);
//     }
// }

// getData();


async function getProducts(){

    try{
        const response = await fetch('https://65391869e3b530c8d9e7e640.mockapi.io/products');
        const data = response.json()
        console.log(data)
    }
    catch(error){
        console.error(error)
    }

}


