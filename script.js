// script.js

//const apiUrl = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp'; // Replace with your actual API URL

function login() {
    const apiUrl='http://localhost:3000/api/login';
    const login_id = document.getElementById('login_id').value;
    const password = document.getElementById('password').value;

    // Prepare the request payload
    const data = {
        login_id: login_id,
        password: password
    };

    // Make a POST request to your authentication endpoint
    fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers as needed
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Handle successful login, e.g., store a token in sessionStorage
        console.log('Login successful:', data);

        // Redirect or perform other actions as needed
    })
    .catch(error => {
        // Handle errors, e.g., display an error message
        console.error('Error during login:', error.message);
    });
}

// function createCustomer() {
//     const customerName = document.getElementById('customerName').value;

//     // Prepare the request payload
//     const data = {
//         customerName: customerName,
//         // Add other customer details as needed
//     };

//     // Make a POST request to your create customer endpoint
//     fetch(`${apiUrl}/customers`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             // Add any other headers as needed
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Handle successful creation, e.g., update the UI
//         console.log('Customer created successfully:', data);

//         // You may choose to fetch and display the updated customer list
//         // Or perform other actions as needed
//     })
//     .catch(error => {
//         // Handle errors, e.g., display an error message
//         console.error('Error creating customer:', error.message);
//     });
// }

// function updateCustomer() {
//     const updateCustomerId = document.getElementById('updateCustomerId').value;
//     const updatedCustomerName = document.getElementById('updatedCustomerName').value;

//     // Prepare the request payload
//     const data = {
//         customerName: updatedCustomerName,
//         // Add other updated customer details as needed
//     };

//     // Make a PUT request to your update customer endpoint
//     fetch(`${apiUrl}/customers/${updateCustomerId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             // Add any other headers as needed
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Handle successful update, e.g., update the UI
//         console.log('Customer updated successfully:', data);

//         // You may choose to fetch and display the updated customer list
//         // Or perform other actions as needed
//     })
//     .catch(error => {
//         // Handle errors, e.g., display an error message
//         console.error('Error updating customer:', error.message);
//     });
// }

// function deleteCustomer() {
//     const deleteCustomerId = document.getElementById('deleteCustomerId').value;

//     // Make a DELETE request to your delete customer endpoint
//     fetch(`${apiUrl}/customers/${deleteCustomerId}`, {
//         method: 'DELETE',
//         headers: {
//             // Add any headers as needed
//         },
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json(); // or response.text() if your API returns a plain text response
//     })
//     .then(data => {
//         // Handle successful deletion, e.g., update the UI
//         console.log('Customer deleted successfully:', data);

//         // You may choose to fetch and display the updated customer list
//         // Or perform other actions as needed
//     })
//     .catch(error => {
//         // Handle errors, e.g., display an error message
//         console.error('Error deleting customer:', error.message);
//     });
// }

// function fetchCustomerList() {
//     // Make a GET request to your endpoint that retrieves the customer list
//     fetch(`${apiUrl}/customers`, {
//         method: 'GET',
//         headers: {
//             // Add any headers as needed
//         },
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json(); // or response.text() if your API returns a plain text response
//     })
//     .then(data => {
//         // Handle successful fetch, e.g., update the UI with the customer list
//         displayCustomerList(data);
//     })
//     .catch(error => {
//         // Handle errors, e.g., display an error message
//         console.error('Error fetching customer list:', error.message);
//     });
// }

// function displayCustomerList(customerList) {
//     // Get the table element
//     const table = document.getElementById('customerTable');

//     // Clear existing rows
//     table.innerHTML = '';

//     // Create table headers
//     const headers = ['ID', 'Name']; // Add other headers as needed
//     const headerRow = table.insertRow(0);
//     headers.forEach(headerText => {
//         const th = document.createElement('th');
//         th.textContent = headerText;
//         headerRow.appendChild(th);
//     });

//     // Populate the table with customer data
//     customerList.forEach(customer => {
//         const row = table.insertRow(-1);

//         // Assuming the customer object has properties like 'id' and 'name'
//         const cell1 = row.insertCell(0);
//         cell1.textContent = customer.id;

//         const cell2 = row.insertCell(1);
//         cell2.textContent = customer.name;

//         // Add other cells for additional customer properties
//     });
// }


// // Fetch customer list on page load
// document.addEventListener('DOMContentLoaded', function() {
//     fetchCustomerList();
// });