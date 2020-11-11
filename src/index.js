import Bookings from './Bookings';
import './css/base.scss';
import Customer from './Customer';

import './images/man-watching-sunset-grand-canyon.jpg'
import './images/turing-logo.png';
import './images/profile-pic.png';
import Room from './Room';
import UserRepo from './User-Repo';
import Manager from './Manager';

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
const customerLogoutButton = document.querySelector('#customer-logout-button');
const managerLogoutButton = document.querySelector('#manager-logout-button');
const customerSideBar = document.querySelector('.side-bar');

const homepage = document.querySelector('.homepage');
const userProfilePage = document.querySelector('.user-profile-page');
const previousBookingsSection = document.querySelector('#previous-bookings');
const futureBookingsSection = document.querySelector('#future-bookings');

const managerProfilePage = document.querySelector('.manager-profile-page');
const managerSideBar = document.querySelector('.manager-side-bar');
const roomsAvailableToday = document.querySelector('#rooms-available-today');
const revenueToday = document.querySelector('#revenue-today');
const roomOccupiedPercentage = document.querySelector('#room-occupied-percentage');
const deleteBookingButton = document.querySelector('#delete-booking-button');

const upcomingBookingsButton = document.querySelector('#upcoming-bookings-button');
const pastBookingsButton = document.querySelector('#past-bookings-button');

const dateInput = document.querySelector('#date-picker');
const roomFilterDropdown = document.querySelector('#room-filter-dropdown');
const searchRoomsButton = document.querySelector('#search-rooms-button');
const bookingButton = document.querySelector('#booking-button');

const searchCustomerButton = document.querySelector('#search-customer-button');

// ~~~~~~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener('load', handleLoad);

toggleLoginViewButton.addEventListener('click', toggleUserLogin);

userLoginButton.addEventListener('click', handleUserLogin);
managerLoginButton.addEventListener('click', handleManagerLogin);

upcomingBookingsButton.addEventListener('click', showUpcomingBookings);
pastBookingsButton.addEventListener('click', showPastBookings);

searchRoomsButton.addEventListener('click', displayAvailableRooms);
bookingButton.addEventListener('click', handleBooking);

searchCustomerButton.addEventListener('click', handleSearchForCustomer);

customerLogoutButton.addEventListener('click', handleCustomerLogout);
managerLogoutButton.addEventListener('click', handleManagerLogout);

deleteBookingButton.addEventListener('click', handleDeleteBooking);
// ~~~~~~~~~~~~~~~~~~~~~~~~~ SCRIPTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
}

function fetchAllBookings() {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json())
    .then(data => loadAllBookings(data.bookings))
    .catch(error => console.log(error.message));
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
        displayCustomerView('#past-bookings-date', '#future-bookings-date', '#total-spent' );
        toggleLoginPage(userProfilePage);
    } else {
        displayLoginErrorMessage(userLoginButton);
    };
}

function handleManagerLogin() {
    if (verifyManagerUsername() && verifyPassword(managerPassword)) {
        global.currentManager = new Manager();
        displayManagerView();
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
    const currentCustomerPastBookings = sortFutureBookings(currentCustomerId);
    const currentCustomerFutureBookings = sortPastBookings(currentCustomerId);
    global.currentCustomer = new Customer(currentCustomerId, currentCustomerName, currentCustomerPastBookings, currentCustomerFutureBookings);
}

function getDate() {
    global.currentDate = new Date();
    let unformattedDate = currentDate.toISOString().substring(0, 10);
    currentDate = unformattedDate.replaceAll('-', '/');
    dateInput.setAttribute('min', currentDate);
}

function loadAllCurrentCustomerBookings(customerID) {
    return bookings.bookingsData.filter(booking => {
        return booking.userID === customerID;
    });
}

function sortFutureBookings(customerID) {
    return loadAllCurrentCustomerBookings(customerID).filter(booking => {
        return booking.date <= currentDate;
    });
}

function sortPastBookings(customerID) {
    return loadAllCurrentCustomerBookings(customerID).filter(booking => {
        return booking.date > currentDate;
    });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~ DOM ~~~~~~~~~~~~~~~~~~~~~~~~~~~

function toggleUserLogin() {
    let loginButtonMessageUser = document.querySelector('.login-button-message-user')
    loginButtonMessageUser.classList.toggle('hidden');
    let loginButtonMessageManager = document.querySelector('.login-button-message-manager')
    loginButtonMessageManager.classList.toggle('hidden');
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

function displayCustomerView(location1, location2, location3) {
    displayPastCustomerBookings(location1);
    displayUpcomingCustomerBookings(location2);
    displayTotalSpentByCustomer(location3);
}

function toggleLoginPage(user) {
    heading.classList.toggle('hidden');
    homepage.classList.toggle('hidden');
    user.classList.toggle('hidden');
}

function displayPastCustomerBookings(location) {
    const dateSection = document.querySelector(`${location}`);
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
function displayUpcomingCustomerBookings(location) {
      const dateSection = document.querySelector(`${location}`);
      currentCustomer.futureBookings.forEach(booking => {
          let dateBooked = `<p>${booking.date}</p>`;
          dateSection.insertAdjacentHTML('beforeend', dateBooked);
      });
  
      currentCustomer.futureBookings.forEach(booking => {
          const upcomingStay = allRooms.roomData.find(room => {
              return room.number === booking.roomNumber;
          })

          if (typeof(upcomingStay) === 'undefined') {
            return;
          } else {
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
          }
      })
}

function displayTotalSpentByCustomer(location) {
    const totalSpentByCustomer = allRooms.roomData.reduce((totalSpent, room) => {
        currentCustomer.previousBookings.forEach(booking => {
            if (room.number === booking.roomNumber) {
                totalSpent += room.costPerNight;
            }
        })
      return Math.round(totalSpent);  
    }, 0)

    const totalSpendingSection = document.querySelector(`${location}`);
    totalSpendingSection.insertAdjacentHTML('beforeend', `<p id="spending-message">Total Spent $${totalSpentByCustomer}</p>`);
}

function fetchRoomData() {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(response => response.json())
    .then(data => loadAllRoomData(data.rooms))
    .catch(error => console.log(error.message));
}

function loadAllRoomData(allRoomData) {
    global.allRooms = new Room(allRoomData);
    allRooms.sortRoomsByType(); 
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
    let formattedDate = dateInput.value.replaceAll('-', '/');
    let selectedRooms = Array.from(document.getElementsByClassName('selector'));
    if (typeof(currentCustomerId) === "undefined"){
        currentCustomerId = currentCustomer.id
    }
    selectedRooms.forEach(selectedRoom => {
        if (selectedRoom.checked) {
            let roomToBook = {userID: currentCustomerId, date: formattedDate, roomNumber: parseInt(selectedRoom.id)};
            if (currentCustomer.bookRoom(roomToBook, bookings.bookingsData) === false) {
                postBooking(roomToBook);
                let bookRoomSuccessMessage = document.querySelector('#book-room-success-message');
                bookRoomSuccessMessage.classList.toggle('hidden');
                setTimeout(() => {bookRoomSuccessMessage.classList.toggle('hidden')}, 3000);
            } else {
                console.log("the booking already exists, cant post")
            }
        }
    });
}

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~ Manager Dashboard ~~~~~~~~~~~~~~~~~~~~~~~~~~~

function displayManagerView() {
    toggleLoginPage(managerProfilePage);
    roomsAvailableToday.classList.remove('hidden');
    revenueToday.classList.remove('hidden');
    roomOccupiedPercentage.classList.remove('hidden');
    roomsAvailableToday.innerHTML = `<p>Number Of Rooms Available Today</p><br>${displayRoomsAvailableToday()}`;
    displayTodaysTotalRevenue();
    roomOccupiedPercentage.innerHTML = `<p>Percentage Of Rooms Occupied Today</p><br>${displayRoomOccupiedPercentage()}`;
}

function displayRoomsAvailableToday() {
    let availableRooms = allRooms.roomData.filter(room => {
        let roomAvailable = true;
        bookings.bookingsData.forEach(booking => {
            if (booking.date === currentDate && booking.roomNumber === room.number) {
                roomAvailable = false;
            }
        })
        return roomAvailable;
    })
    return availableRooms.length;
}

function displayTodaysTotalRevenue() {
    let todaysRevenue = bookings.bookingsData.reduce((totalRevenue, booking) => {
        allRooms.roomData.forEach(room => {
            if (currentDate === booking.date) {
                totalRevenue += room.costPerNight 
            }
        })
        return Math.round(totalRevenue);
    }, 0);
    const todaysRevenueSection = document.querySelector('#revenue-today');
    todaysRevenueSection.innerHTML = `<p>Today's Total Revenue</p><br><br><p>$${todaysRevenue}</p>`;
}

function displayRoomOccupiedPercentage() {
    const percentOfOccupiedRooms = (displayRoomsAvailableToday()/ allRooms.roomData.length) * 100;
    return `<p>${percentOfOccupiedRooms}%</p>`;
}

function handleSearchForCustomer() {
    findCustomerByName()
    managerSideBar.classList.toggle('hidden')
}

function findCustomerByName() {
    const customerSearchField = document.querySelector('#customer-search-field');
    const queriedCustomer = currentManager.searchForCustomer(customerSearchField.value, userRepo.customers)
    if (typeof(queriedCustomer) === "undefined") {
        let unidentifiedUserMessage = document.querySelector('#unidentified-user-message');
        unidentifiedUserMessage.classList.toggle('hidden');
        setTimeout(() => {unidentifiedUserMessage.classList.toggle('hidden')}, 3000);
    } else {
        const queriedCustomerPastBookings = sortPastBookings(queriedCustomer.id);
        const queriedCustomerFutureBookings = sortFutureBookings(queriedCustomer.id);
        global.currentCustomer = new Customer(queriedCustomer.id, queriedCustomer.name, queriedCustomerFutureBookings, queriedCustomerPastBookings);

        displayCustomerView('#past-bookings-date', '#future-bookings-date', '#total-spent');
        const upcomingBookingsTitle = document.querySelector('#upcoming-bookings-title');
        const previousBookingsTitle = document.querySelector('#previous-bookings-title');
        upcomingBookingsTitle.innerText = `Upcoming Bookings For ${currentCustomer.name}`;
        previousBookingsTitle.innerText = `Previous Bookings For ${currentCustomer.name}`;
        userProfilePage.classList.remove('hidden');
        managerSideBar.classList.remove('hidden');
    }
}

function handleCustomerLogout() {
    logout(userProfilePage);
}

function handleManagerLogout() {
    customerLogoutButton.classList.add('hidden')
    userProfilePage.classList.add('hidden')
    logout(managerProfilePage);
}

function logout(user) {
    toggleLoginPage(user);
    //managerProfilePage.classList.add('hidden')
    let spendingMessage = document.querySelector('#spending-message');
    if (typeof(spendingMessage) === 'undefined') {
        return;
    } else if(spendingMessage === null) {
        return;
    } else {
        spendingMessage.remove();
    }
}

function deleteBookingFromApi(dataToDelete) {
    fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings", {
      method: 'DELETE',
      headers: {
  	'Content-Type': 'application/json'
    },
      body: {
            "id": `${dataToDelete}`
            }
    })
    .then(response => console.log(response))
    //.then(message => console.log('booking was posted'))
    .catch(error => console.log(error.message))
}

function handleDeleteBooking() {
    const roomNumberToDelete = document.querySelector('#room-number-to-delete');
    //console.log(roomNumberToDelete.value, "asdf")
    const dateToDelete = document.querySelector('#date-to-delete');
    let formattedDate = dateToDelete.value.replaceAll('-', '/');
    const bookingToDelete = bookings.bookingsData.find(booking => {
        //console.log(booking.roomNumber)
        return booking.date === formattedDate && booking.roomNumber == roomNumberToDelete.value;
    });
    currentManager.deleteBookedRoom(currentCustomer, formattedDate);
    //deleteBookingFromApi(bookingToDelete.id);
}