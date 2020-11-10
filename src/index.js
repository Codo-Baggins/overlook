// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import Bookings from './Bookings';
import './css/base.scss';
import Customer from './Customer';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/profile-pic.png';
import Room from './Room';
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
const previousBookingsSection = document.querySelector('#previous-bookings');
const futureBookingsSection = document.querySelector('#future-bookings');

const upcomingBookingsButton = document.querySelector('#upcoming-bookings-button');
const pastBookingsButton = document.querySelector('#past-bookings-button');

const dateInput = document.querySelector('#date-picker');
const roomFilterDropdown = document.querySelector('#room-filter-dropdown');
const searchRoomsButton = document.querySelector('#search-rooms-button');
const bookingButton = document.querySelector('#booking-button');

// ~~~~~~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener('load', handleLoad);

toggleLoginViewButton.addEventListener('click', toggleUserLogin);

userLoginButton.addEventListener('click', handleUserLogin);
managerLoginButton.addEventListener('click', handleManagerLogin);

upcomingBookingsButton.addEventListener('click', showUpcomingBookings);
pastBookingsButton.addEventListener('click', showPastBookings);

searchRoomsButton.addEventListener('click', displayAvailableRooms);
bookingButton.addEventListener('click', handleBooking);

// ~~~~~~~~~~~~~~~~~~~~~~~~~ SCRIPTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

//let userRepo = new UserRepo();
//let userRepo;
let currentCustomerId;

function handleLoad() {
    getDate();
    fetchAllCustomers();
    fetchAllBookings();
    fetchRoomData();
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
    console.log(bookings)
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
    let unformattedDate = currentDate.toISOString().substring(0, 10);
    currentDate = unformattedDate.replaceAll('-', '/');
    // this query selector exists twice. may make global?
    dateInput.setAttribute('min', currentDate);
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
    buttonLocation.insertAdjacentHTML('afterend', `<br><p class="error" id="login-error-message">The username or password you entered is incorrect. Please try again.</p>`);
    setTimeout(() => removeErrorMessage(), 3000)
}

function removeErrorMessage() {
    let loginErrorMessage = document.querySelector("#login-error-message");
    loginErrorMessage.innerHTML = "";
}

function displayCustomerView() {
    toggleLoginPage();
    displayPastCustomerBookings();
    displayUpcomingCustomerBookings();
    displayTotalSpentByCustomer();
}

function toggleLoginPage() {
    heading.classList.toggle('hidden');
    homepage.classList.toggle('hidden');
    userProfilePage.classList.toggle('hidden');
}

function displayPastCustomerBookings() {
    const dateSection = document.querySelector('#past-bookings-date');
    currentCustomer.previousBookings.forEach(booking => {
        let dateBooked = `<p>${booking.date}</p>`;
        dateSection.insertAdjacentHTML('beforeend', dateBooked);
    });

    currentCustomer.previousBookings.forEach(booking => {
        const previousStay = allRooms.roomData.find(room => {
            return room.number === booking.roomNumber;
        })
        const roomNumber = previousStay.number;
        const roomType = previousStay.roomType;
        const bedSize = previousStay.bedSize;
        const bedQuantity = previousStay.numBeds;
        const roomCost = previousStay.costPerNight;
        const bidetBoolean = previousStay.bidet ? 'Included': 'Not Included'

        const roomNumberSection = document.querySelector('#past-room-number');
        const roomTypeSection = document.querySelector('#past-room-type');
        const bedSizeSection = document.querySelector('#past-bed-size');
        const bedCountSection = document.querySelector('#past-bed-count');
        const roomCostSection = document.querySelector('#past-cost-per-night');
        const bidetSection = document.querySelector('#past-bidet');

        roomNumberSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${roomNumber}</li>`);
        roomTypeSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${roomType}</li>`);
        bedSizeSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${bedSize}</li>`);
        bedCountSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${bedQuantity}</li>`);
        roomCostSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">$${roomCost}</li>`);
        bidetSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${bidetBoolean}</li>`);
    })
}
function displayUpcomingCustomerBookings() {
      const dateSection = document.querySelector('#future-bookings-date');
      currentCustomer.futureBookings.forEach(booking => {
          let dateBooked = `<p>${booking.date}</p>`;
          dateSection.insertAdjacentHTML('beforeend', dateBooked);
      });
  
      currentCustomer.futureBookings.forEach(booking => {
          const upcomingStay = allRooms.roomData.find(room => {
              return room.number === booking.roomNumber;
          })
          const roomNumber = upcomingStay.number;
          const roomType = upcomingStay.roomType;
          const bedSize = upcomingStay.bedSize;
          const bedQuantity = upcomingStay.numBeds;
          const roomCost = upcomingStay.costPerNight;
          const bidetBoolean = upcomingStay.bidet ? 'Included': 'Not Included'
  
          const roomNumberSection = document.querySelector('#future-room-number');
          const roomTypeSection = document.querySelector('#future-room-type');
          const bedSizeSection = document.querySelector('#future-bed-size');
          const bedCountSection = document.querySelector('#future-bed-count');
          const roomCostSection = document.querySelector('#future-cost-per-night');
          const bidetSection = document.querySelector('#future-bidet');
  
          roomNumberSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${roomNumber}</li>`);
          roomTypeSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${roomType}</li>`);
          bedSizeSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${bedSize}</li>`);
          bedCountSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${bedQuantity}</li>`);
          roomCostSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">$${roomCost}</li>`);
          bidetSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${bidetBoolean}</li>`);
      })
}

function displayTotalSpentByCustomer() {
    // currentCustomer.previousBookings.reduce((totalSpent, booking) => {
    //     totalSpent += booking.;
    //     return totalSpent;
    // }, 0)
    const totalSpentByCustomer = allRooms.roomData.reduce((totalSpent, room) => {
        currentCustomer.previousBookings.forEach(booking => {
            if (room.number === booking.roomNumber) {
                totalSpent += room.costPerNight;
            }
        })
      return Math.round(totalSpent);  
    }, 0)

    const totalSpendingSection = document.querySelector('#total-spent');
    totalSpendingSection.innerHTML = `Your Total Spending is $${totalSpentByCustomer}`;
}

function fetchRoomData() {
    //fetch the room data from api
    //parse the data and instantiate our room class with it
    //iterate through the data and display it to the page in the displayPastBookings function

    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(response => response.json())
    .then(data => loadAllRoomData(data.rooms))
    .catch(error => console.log(error.message));
}

function loadAllRoomData(allRoomData) {
    global.allRooms = new Room(allRoomData);
    allRooms.sortRoomsByType(); 
    console.log(allRooms)
}

function showUpcomingBookings() {
    upcomingBookingsButton.classList.add('selected');
    pastBookingsButton.classList.remove('selected');
    futureBookingsSection.classList.remove('hidden');
    previousBookingsSection.classList.add('hidden');
}

function showPastBookings() {
    upcomingBookingsButton.classList.remove('selected');
    pastBookingsButton.classList.add('selected');
    futureBookingsSection.classList.add('hidden');
    previousBookingsSection.classList.remove('hidden');
}

function searchForRooms(selectedDate, selectedRoomType) {
    // need to see if selecteddate is equal to the bookingDate
    const availableRooms = allRooms[selectedRoomType].filter(room => {
        let bookedRoom = bookings.bookingsData.find(booking => {
            return booking.date === selectedDate && room.number === booking.roomNumber;
        });

        if (typeof(bookedRoom) === 'undefined') {
            return true;
        } else {
            return false;
        }
    })
    return availableRooms;
}



function displayAvailableRooms() {
    let formattedDate = dateInput.value.replaceAll('-', '/')
    console.log(formattedDate, "formatted date", formattedDate.length)
    
    let roomTypeSelection;
    if (roomFilterDropdown.value === "all-rooms") {
        roomTypeSelection = 'roomData';
    } else if (roomFilterDropdown.value === "single-room") {
        roomTypeSelection = 'singleRooms';
    } else if (roomFilterDropdown.value === "junior-suite") {
        roomTypeSelection = 'juniorSuites';
    } else if (roomFilterDropdown.value === "suite") {
        roomTypeSelection = 'suites';
    } else if (roomFilterDropdown.value === "residential-suite") {
        roomTypeSelection = 'residentialSuites';
    }
    // searchForRooms(formattedDate, 'residentialSuites').forEach(availableRoom => {
        //     availableRoom
        // })
        const availableBookingsSection = document.querySelector('#available-bookings-section');
        availableBookingsSection.classList.remove('hidden');
        bookingButton.classList.remove('hidden');
        
        const selectorSection = document.querySelector('.room-to-select');
        const roomNumberSection = document.querySelector('#queried-room-number');
      const roomTypeSection = document.querySelector('#queried-room-type');
      const bedSizeSection = document.querySelector('#queried-bed-size');
      const bedCountSection = document.querySelector('#queried-bed-count');
      const roomCostSection = document.querySelector('#queried-cost-per-night');
      const bidetSection = document.querySelector('#queried-bidet');
      
      selectorSection.innerHTML = '<p class="room-to-select">Select</p>';
      roomNumberSection.innerHTML = "<p>Room Number</p>";
      roomTypeSection.innerHTML = "<p>Room Type</p>";
      bedSizeSection.innerHTML = "<p>Bed Size</p>";
      bedCountSection.innerHTML = "<p>Number Of Beds</p>";
      roomCostSection.innerHTML = "<p>Cost Per Night</p>";
      bidetSection.innerHTML = "<p>Bidet?</p>";

    if (formattedDate.length === 0) {
        let requiredDateMessage = document.querySelector('#required-date-message');
        requiredDateMessage.classList.toggle('hidden');
        setTimeout(() => {requiredDateMessage.classList.toggle('hidden')}, 3000);
    } else {
      searchForRooms(formattedDate, roomTypeSelection).forEach(availableRoom => {
        //   const potentialStay = allRooms.roomData.find(room => {
        //       return room.number === booking.roomNumber;
        //   })
          const roomNumber = availableRoom.number;
          const roomType = availableRoom.roomType === 'single room' ? availableRoom.roomType.slice(0, 7): availableRoom.roomType;
          const bedSize = availableRoom.bedSize;
          const bedQuantity = availableRoom.numBeds;
          const roomCost = availableRoom.costPerNight;
          const bidetBoolean = availableRoom.bidet ? 'Included': 'Not Included';
  

          selectorSection.insertAdjacentHTML('beforeend', `<input type="checkbox" class="selector" id=${roomNumber}><br>`);
          roomNumberSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${roomNumber}</li>`);
          roomTypeSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${roomType}</li>`);
          bedSizeSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${bedSize}</li>`);
          bedCountSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${bedQuantity}</li>`);
          roomCostSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">$${roomCost}</li>`);
          bidetSection.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;">${bidetBoolean}</li>`);
      })
    }
}


function handleBooking() {
    //let desiredRooms = [];
    console.log(currentCustomer.futureBookings);
    let formattedDate = dateInput.value.replaceAll('-', '/');

    let selectedRooms = Array.from(document.getElementsByClassName('selector'));
    //console.log(selectedRooms)
    selectedRooms.forEach(selectedRoom => {
        //console.log(selectedRoom.id, "selectedRoomID")
        // let roomToBook = allRooms.roomData.find(room => {
        //     return room.number == selectedRoom.id;
        // })
        //console.log(roomToBook);
        if (selectedRoom.checked) {
            let roomToBook = {userID: currentCustomerId, date: formattedDate, roomNumber: parseInt(selectedRoom.id)};
            currentCustomer.bookRoom(roomToBook);
            //postBooking(roomToBook);
            //RE-display future bookings
        }
        //console.log(currentCustomer.futureBookings);
    });
}

// post booking to api 
function postBooking(dataToPost) {
    fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings", {
      method: 'POST',
      headers: {
  	'Content-Type': 'application/json'
    },
      body: JSON.stringify(dataToPost),
    })
    .then(response => response.json())
    .then(message => console.log('booking was posted'))
    .catch(error => console.log(error.message))
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