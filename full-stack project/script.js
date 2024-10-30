// document.querySelector('.container').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;

//     // Check if passwords match
//     if (password !== confirmPassword) {
//         alert("Passwords do not match!");
//         return;
//     }

//     const userData = {
//         username: username,
//         email: email,
//         password: password
//     };

//     // Sending POST request to the backend
//     fetch('http://localhost:8080/api/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//     })
//     .then(response => {
//       if(response.status===200)
//       {
//         alert("registered success")
//       }
        
//         if (!response.ok ) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         alert(data); // Display success message
//     })
//    .catch(error=>{
//     console.log(error);
    
//    })
// });


document.querySelector('.container').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const userData = {
        username: username,
        email: email,
        password: password
    };

    // Sending POST request to the backend
    fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
   .then(response=>{
    if(response.status===200)
    {
        alert("success")
    }
    
   })
    .catch(error => {
        console.error(error);
        alert("An error occurred: " + JSON.parse(error.message));
    });
});
