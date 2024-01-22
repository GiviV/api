// fetch('https://65391869e3b530c8d9e7e640.mockapi.io/products')
//     .then(response =>{
//         if(!response.ok){
//             console.error(response.statusText)
//         }
//         return response.json()
//     })
//     .then(products =>{
//         console.log(products)
//     })
//     .catch(error=>{
//         console.error(products)
//     })



async function getProducts(){

    try{
        const response = await fetch('https://65391869e3b530c8d9e7e640.mockapi.io/products');
        if(!response.ok){
            throw new Error('Network response was not ok')
        }
        const products = await response.json()
        console.log(products)
    }
    catch(error){
        console.log(error)
    }
}
