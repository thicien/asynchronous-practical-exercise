// function fetchData(callback) {
//     setTimeout(() => {
//       const data = "Data fetched successfully!";
//       callback(null, data);
//     }, 1000);
//   }
  
//   fetchData((error, data) => {
//     if (error) {
//       console.error("Error:", error);
//     } else {
//       console.log(data);
//     }
//   });

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched successfully");
            resolve("data");
        }, 1000);
    });
}
fetchData() 
    .then(data => console.log(data))
    .catch(error => console.error("failed to get the data"))