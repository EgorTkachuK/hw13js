// 1 

// let user = {
//     name: 'Oslo',
//     age: 1000,
//     premium: true ,
//      hobby: 'playing tennis'
// };

// let { name , age , premium , hobby , mood = "happy"} =user 

// let newHobby = hobby = "skydiving"

// let premiumEnd = premium = false

// console.log(mood , hobby , premium)


// 2

// let user = {
//     name: 'Oslo',
//     age: 1000,
//     premium: true ,
//      hobby: 'playing tennis'
// };


// let countProps = (obj) =>{
    
//     let { name , age , premium , hobby } = user 

//   return  Object.keys(obj).length 



// }

// console.log(countProps(user))


// 3


// let company = {
//     OLaf : 3 , 
//     Niko : 4 , 
//     Otto : 2 
// }


// let { ...companyMembers} = company 

// let bestWorkerCheck = (workersList) => { 
//     let bestWorker = 1 
//     for(let val of Object.values(workersList)){
    
//  if ( bestWorker < val) {  bestWorker = val }

//     }
//     console.log(`НАйкращим працівником є людина що виконала ${bestWorker}  завдань`)
//  }

//  bestWorkerCheck(companyMembers)

// 4
// let company = {
//     OLaf : 300 , 
//     Niko : 400 , 
//     Otto : 200 
// }

// let { ...companyMembers} = company 


// let totalSalaryCheck = (workersList) => { 
//     let totalSalary =  0
//     for(let val of Object.values(workersList)){
//    totalSalary += val


//     }
//     console.log(totalSalary)
//  }
//  totalSalaryCheck(companyMembers)


// 6 


// const products = [
//     { name: 'FR', price: 1800, quantity: 5 },
//     { name: 'UK', price: 2000 , quantity: 2 },
//     { name: 'DE', price: 1900, quantity: 1 },
//     { name: 'DRK', price: 100, quantity: 4 },
//   ];

// let [ ...info] = products


// function calculateTotalPrice(allProducts, productName) {
//     let totalPrice = 0;
  
//     for (const product of allProducts) {
//       if (product.name === productName) {
//         totalPrice += product.price * product.quantity;
//       }
//     }
  
//     return totalPrice;
//   }
  



  
//   const productName = 'DE';
//   console.log(calculateTotalPrice(info, productName));
  







