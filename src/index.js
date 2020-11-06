// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import Customer from './Customer';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import UserRepo from './User-Repo';

// ~~~~~~~~~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

const customerUsername = document.querySelector('.username');
const userPassword = document.querySelector('.password');
const loginButton = document.querySelector('.login-button');

// ~~~~~~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener('load', handleLoad);

loginButton.addEventListener('click', handleLogin);

// ~~~~~~~~~~~~~~~~~~~~~~~~~ SCRIPTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

//let userRepo = new UserRepo();
//let userRepo;

function handleLoad() {
    fetchAllCustomers();
}

function fetchAllCustomers() {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(response => response.json())
    .then(data => loadAllCustomers(data.users))
    .catch(error => console.log(error.message));
    //setTimeout(() => console.log(userRepo), 3000);
}

function loadAllCustomers(apiData) {
    global.userRepo = new UserRepo(apiData)
}

function handleLogin() {
    if (verifyCustomerUsername() && veryifyPassword()) {
        loadCustomer();
        console.log("hello")
    } else {
        displayLoginErrorMessage();
    }
}

function verifyCustomerUsername() {
    let customer = userRepo.customers.find(user => {
       return customerUsername.value == `customer${user.id}`;
    });
    return customer;
}

function veryifyPassword() {
    return userPassword.value === 'overlook2020';
}

function loadCustomer() {
    const currentCustomerId = verifyCustomerUsername().id;
    const currentCustomerName = verifyCustomerUsername().name;
    // need to get previous and future bookings from user repo here
    // may need iterate through bookings, and then pass those values in
    const currentCustomer = new Customer(currentCustomerId, currentCustomerName);
    console.log(currentCustomer);
}

function displayLoginErrorMessage() {
    loginButton.insertAdjacentHTML('afterend', `<br><p id="login-error-message">"The username or password you entered is incorrect. Please try again.</p>`);
    setTimeout(() => removeErrorMessage(), 3000)
}

function removeErrorMessage() {
    let loginErrorMessage = document.querySelector("#login-error-message");
    loginErrorMessage.innerHTML = "";
}



    //Should have a userData class 
    // should have a dataStorage
    // should be able to load users api data to dataStorage ***
    
    // Should have a bookings class
    // Should have a bookingsData property : ARRAY
    // Should be able to load bookingsData ****
    
    
    
    //Should have a parent class (User)
    //  Should be able to match userID 
    // Should be able to match dates
    // Should be able to load userData
    // should be able to book a room 
    
    
    // Should have a customer class
    // should have an id 
    // Should be able to log in 
        // 
    
    
    
    //Should have a manager class 
    // should have a username: "manager"
    // should have a password: overlook2020
    // should be able to log in 
    // should be able to search for a user