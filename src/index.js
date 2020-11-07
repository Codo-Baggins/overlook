// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import Bookings from './Bookings';
import './css/base.scss';
import Customer from './Customer';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import UserRepo from './User-Repo';

// ~~~~~~~~~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

const heading = document.querySelector('.heading');

const toggleLoginViewButton = document.querySelector('#toggle-view-button');
const customerUsername = document.querySelector('#customer-username-input');
const userPassword = document.querySelector('#customer-password-input');
const userLoginButton = document.querySelector('.user-login-button');

const managerUsername = document.querySelector('#manager-username-input');
const managerPassword = document.querySelector('#manager-password-input');
const managerLoginButton = document.querySelector('.manager-login-button');

const customerLoginView = document.querySelector('.customer-login');
const managerLoginView = document.querySelector('.manager-login');

const homepage = document.querySelector('.homepage');
const userProfilePage = document.querySelector('.user-profile-page');
// ~~~~~~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener('load', handleLoad);

toggleLoginViewButton.addEventListener('click', toggleUserLogin);

userLoginButton.addEventListener('click', handleUserLogin);
managerLoginButton.addEventListener('click', handleManagerLogin);



// ~~~~~~~~~~~~~~~~~~~~~~~~~ SCRIPTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

//let userRepo = new UserRepo();
//let userRepo;
let currentCustomerId;

function handleLoad() {
    getDate();
    fetchAllCustomers();
    fetchAllBookings();
}

function fetchAllCustomers() {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(response => response.json())
    .then(data => loadAllCustomers(data.users))
    .catch(error => console.log(error.message));
    //setTimeout(() => console.log(userRepo), 3000);
}

function fetchAllBookings() {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json())
    .then(data => loadAllBookings(data.bookings))
    .catch(error => console.log(error.message));
    //setTimeout(() => console.log(userRepo), 3000);
}

function loadAllCustomers(customersList) {
    global.userRepo = new UserRepo(customersList)
}

function loadAllBookings(bookingsList) {
    global.bookings = new Bookings(bookingsList);
}

function handleUserLogin() {
    if (verifyCustomerUsername() && verifyPassword(userPassword)) {
        loadCustomer();
        displayCustomerView();
    } else {
        displayLoginErrorMessage(userLoginButton);
    };
}

function handleManagerLogin() {
    if (verifyManagerUsername() && verifyPassword(managerPassword)) {
        //loadCustomer();
        console.log("manager login success")
    } else {
        displayLoginErrorMessage(managerLoginButton);
    };
}

function verifyCustomerUsername() {
    let customer = userRepo.customers.find(user => {
       return customerUsername.value == `customer${user.id}`;
    });
    return customer;
}

function verifyManagerUsername() {
    return managerUsername.value === 'manager';
}

function verifyPassword(inputLocation) {
    return inputLocation.value === 'overlook2020';
}

function loadCustomer() {
    currentCustomerId = verifyCustomerUsername().id;
    const currentCustomerName = verifyCustomerUsername().name;
    const currentCustomerPastBookings = sortFutureBookings();
    const currentCustomerFutureBookings = sortPastBookings();
    global.currentCustomer = new Customer(currentCustomerId, currentCustomerName, currentCustomerPastBookings, currentCustomerFutureBookings);
    console.log(currentCustomer);
}

function getDate() {
    global.currentDate = new Date();
    currentDate = currentDate.toISOString().substring(0, 10).replaceAll('-', '/');
}

function loadAllCurrentCustomerBookings() {
    return bookings.bookingsData.filter(booking => {
        return booking.userID === currentCustomerId;
    });
}

function sortFutureBookings() {
    return loadAllCurrentCustomerBookings().filter(booking => {
        return booking.date <= currentDate;
    });
}

function sortPastBookings() {
    return loadAllCurrentCustomerBookings().filter(booking => {
        return booking.date > currentDate;
    });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~ DOM ~~~~~~~~~~~~~~~~~~~~~~~~~~~

function toggleUserLogin() {
    customerLoginView.classList.toggle('hidden');
    managerLoginView.classList.toggle('hidden');
}

function displayLoginErrorMessage(buttonLocation) {
    buttonLocation.insertAdjacentHTML('afterend', `<br><p id="login-error-message">The username or password you entered is incorrect. Please try again.</p>`);
    setTimeout(() => removeErrorMessage(), 3000)
}

function removeErrorMessage() {
    let loginErrorMessage = document.querySelector("#login-error-message");
    loginErrorMessage.innerHTML = "";
}

function displayCustomerView() {
    toggleLoginPage();
    displayPastCustomerBookings();
    displayFutureCustomerBookings();
   // displayTotalSpentByCustomer();
}

function toggleLoginPage() {
    heading.classList.toggle('hidden');
    homepage.classList.toggle('hidden');
    userProfilePage.classList.toggle('hidden');
}

function displayPastCustomerBookings() {
  //const pastBookings = document.querySelector('#past-bookings');
  const dateSection = document.querySelector('#past-bookings-date-section')
    currentCustomer.previousBookings.forEach(booking => {
        let dateBooked = `<p>${booking.date}</p>`;
        dateSection.insertAdjacentHTML('afterend', dateBooked);
    });
}

function displayFutureCustomerBookings() {

}

function displayTotalSpentByCustomer() {
    currentCustomer.previousBookings.reduce((totalSpent, booking) => {
        totalSpent += 1;
        return totalSpent;
    }, 0)
}

function getRoomData() {
    //fetch the room data from api
    //parse the data and instantiate our room class with it
    //iterate through the data and display it to the page in the displayPastBookings function
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