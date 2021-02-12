/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs/Bookings.js":
/*!**************************!*\
  !*** ./docs/Bookings.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Bookings {
  constructor(bookingsData) {
    this.bookingsData = bookingsData;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Bookings);


/***/ }),

/***/ "./docs/Customer.js":
/*!**************************!*\
  !*** ./docs/Customer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_Repo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User-Repo */ "./docs/User-Repo.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./docs/User.js");



class Customer extends _User__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(id, name, previousBookings, futureBookings) {
    super(id, name, previousBookings, futureBookings);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Customer);

/***/ }),

/***/ "./docs/Manager.js":
/*!*************************!*\
  !*** ./docs/Manager.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./docs/User.js");


class Manager extends _User__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this.username = 'manager';
    this.password = 'overlook2020';
  }

  searchForCustomer(searchedCustomer, userRepo) {
    const foundCustomer = userRepo.find(user => {
      return searchedCustomer === user.name;
    });
    if (typeof(foundCustomer) === "undefined") {

    }
    return foundCustomer
  };
  
  deleteBookedRoom(user, date) {
    console.log(user.futureBookings)
    user.futureBookings = user.futureBookings.filter(futureBooking => {
      return futureBooking.date !== date;
    });
    console.log("deleted")
    console.log(user.futureBookings)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Manager);

/***/ }),

/***/ "./docs/Room.js":
/*!**********************!*\
  !*** ./docs/Room.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Room {
  constructor(roomData) {
    this.roomData = roomData;
    this.singleRooms;
    this.juniorSuites;
    this.suites;
    this.residentialSuites;
  }

  sortRoomsByType() {
    this.singleRooms = this.roomData.filter(room => {
      return room.roomType === 'single room';
    });
    this.juniorSuites = this.roomData.filter(room => {
      return room.roomType === 'junior suite';
    });
    this.suites = this.roomData.filter(room => {
      return room.roomType === 'suite';
    });
    this.residentialSuites = this.roomData.filter(room => {
      return room.roomType === 'residential suite';
    });
  }
  
  //filterRoomsByType(roomType) {
    //this.roomData.filter(roomData)
  //}
}

/* harmony default export */ __webpack_exports__["default"] = (Room);

/***/ }),

/***/ "./docs/User-Repo.js":
/*!***************************!*\
  !*** ./docs/User-Repo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class UserRepo {
  constructor(customers) {
    this.customers = customers;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (UserRepo);



/***/ }),

/***/ "./docs/User.js":
/*!**********************!*\
  !*** ./docs/User.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(id, name, previousBookings, futureBookings) {
    this.id = id;
    this.name = name;
    this.previousBookings = previousBookings || [];
    this.futureBookings = futureBookings || [];
  }

  bookRoom(potentialBooking, bookingsList) {
    let alreadyBooked;
    bookingsList.forEach((booking) => {
      alreadyBooked = false;
      console.log(
        booking.roomNumber,
        potentialBooking.roomNumber,
        booking.date,
        potentialBooking.date
      );
      if (
        booking.roomNumber === potentialBooking.roomNumber &&
        booking.date == potentialBooking.date
      ) {
        alreadyBooked = true;
        console.log("qwoeifnaweoiwqe");
      }
    });
    if (alreadyBooked === true) {
      console.log("Your room has already been booked");
      //return false;
    } else {
      this.futureBookings.push(potentialBooking);
      //return true;
    }
    return alreadyBooked;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./docs/css/base.scss":
/*!****************************!*\
  !*** ./docs/css/base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./docs/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./docs/images/man-watching-sunset-grand-canyon.jpg":
/*!**********************************************************!*\
  !*** ./docs/images/man-watching-sunset-grand-canyon.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/man-watching-sunset-grand-canyon.jpg";

/***/ }),

/***/ "./docs/images/profile-pic.png":
/*!*************************************!*\
  !*** ./docs/images/profile-pic.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/profile-pic.png";

/***/ }),

/***/ "./docs/images/turing-logo.png":
/*!*************************************!*\
  !*** ./docs/images/turing-logo.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/turing-logo.png";

/***/ }),

/***/ "./docs/index.js":
/*!***********************!*\
  !*** ./docs/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bookings */ "./docs/Bookings.js");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/base.scss */ "./docs/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Customer */ "./docs/Customer.js");
/* harmony import */ var _images_man_watching_sunset_grand_canyon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/man-watching-sunset-grand-canyon.jpg */ "./docs/images/man-watching-sunset-grand-canyon.jpg");
/* harmony import */ var _images_man_watching_sunset_grand_canyon_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_man_watching_sunset_grand_canyon_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/turing-logo.png */ "./docs/images/turing-logo.png");
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_turing_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_profile_pic_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/profile-pic.png */ "./docs/images/profile-pic.png");
/* harmony import */ var _images_profile_pic_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_profile_pic_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Room */ "./docs/Room.js");
/* harmony import */ var _User_Repo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User-Repo */ "./docs/User-Repo.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Manager */ "./docs/Manager.js");











// ~~~~~~~~~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

const heading = document.querySelector(".heading");

const toggleLoginViewButton = document.querySelector("#toggle-view-button");
const customerUsername = document.querySelector("#customer-username-input");
const userPassword = document.querySelector("#customer-password-input");
const userLoginButton = document.querySelector(".user-login-button");

const managerUsername = document.querySelector("#manager-username-input");
const managerPassword = document.querySelector("#manager-password-input");
const managerLoginButton = document.querySelector(".manager-login-button");

const customerLoginView = document.querySelector(".customer-login");
const managerLoginView = document.querySelector(".manager-login");
const customerLogoutButton = document.querySelector("#customer-logout-button");
const managerLogoutButton = document.querySelector("#manager-logout-button");

const homepage = document.querySelector(".homepage");
const userProfilePage = document.querySelector(".user-profile-page");
const previousBookingsSection = document.querySelector("#previous-bookings");
const futureBookingsSection = document.querySelector("#future-bookings");

const managerProfilePage = document.querySelector(".manager-profile-page");
const managerSideBar = document.querySelector(".manager-side-bar");
const roomsAvailableToday = document.querySelector("#rooms-available-today");
const revenueToday = document.querySelector("#revenue-today");
const roomOccupiedPercentage = document.querySelector(
  "#room-occupied-percentage"
);
const deleteBookingButton = document.querySelector("#delete-booking-button");

const upcomingBookingsButton = document.querySelector(
  "#upcoming-bookings-button"
);
const pastBookingsButton = document.querySelector("#past-bookings-button");

const dateInput = document.querySelector("#date-picker");
const roomFilterDropdown = document.querySelector("#room-filter-dropdown");
const searchRoomsButton = document.querySelector("#search-rooms-button");
const bookingButton = document.querySelector("#booking-button");

const searchCustomerButton = document.querySelector("#search-customer-button");

// ~~~~~~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener("load", handleLoad);

toggleLoginViewButton.addEventListener("click", toggleUserLogin);

userLoginButton.addEventListener("click", handleUserLogin);
managerLoginButton.addEventListener("click", handleManagerLogin);

upcomingBookingsButton.addEventListener("click", showUpcomingBookings);
pastBookingsButton.addEventListener("click", showPastBookings);

searchRoomsButton.addEventListener("click", displayAvailableRooms);
bookingButton.addEventListener("click", handleBooking);

searchCustomerButton.addEventListener("click", handleSearchForCustomer);

customerLogoutButton.addEventListener("click", handleCustomerLogout);
managerLogoutButton.addEventListener("click", handleManagerLogout);

deleteBookingButton.addEventListener("click", handleDeleteBooking);
// ~~~~~~~~~~~~~~~~~~~~~~~~~ SCRIPTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~

let currentCustomerId;

function handleLoad() {
  getDate();
  fetchAllCustomers();
  fetchAllBookings();
  fetchRoomData();
}

function fetchAllCustomers() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then((response) => response.json())
    .then((data) => loadAllCustomers(data.users))
    .catch((error) => console.log(error.message));
}

function fetchAllBookings() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then((response) => response.json())
    .then((data) => {
      console.log({ data });
      loadAllBookings(data.bookings);
    })
    .catch((error) => console.log(error.message));
}

function loadAllCustomers(customersList) {
  global.userRepo = new _User_Repo__WEBPACK_IMPORTED_MODULE_7__["default"](customersList);
}

function loadAllBookings(bookingsList) {
  global.bookings = new _Bookings__WEBPACK_IMPORTED_MODULE_0__["default"](bookingsList);
}

function handleUserLogin() {
  if (verifyCustomerUsername() && verifyPassword(userPassword)) {
    loadCustomer();
    displayCustomerView(
      "#past-bookings-date",
      "#future-bookings-date",
      "#total-spent"
    );
    toggleLoginPage(userProfilePage);
  } else {
    displayLoginErrorMessage(userLoginButton);
  }
}

function handleManagerLogin() {
  if (verifyManagerUsername() && verifyPassword(managerPassword)) {
    global.currentManager = new _Manager__WEBPACK_IMPORTED_MODULE_8__["default"]();
    displayManagerView();
  } else {
    displayLoginErrorMessage(managerLoginButton);
  }
}

function verifyCustomerUsername() {
  let customer = userRepo.customers.find((user) => {
    return customerUsername.value == `customer${user.id}`;
  });
  return customer;
}

function verifyManagerUsername() {
  return managerUsername.value === "manager";
}

function verifyPassword(inputLocation) {
  return inputLocation.value === "overlook2020";
}

function loadCustomer() {
  currentCustomerId = verifyCustomerUsername().id;
  const currentCustomerName = verifyCustomerUsername().name;
  const currentCustomerPastBookings = sortFutureBookings(currentCustomerId);
  const currentCustomerFutureBookings = sortPastBookings(currentCustomerId);
  global.currentCustomer = new _Customer__WEBPACK_IMPORTED_MODULE_2__["default"](
    currentCustomerId,
    currentCustomerName,
    currentCustomerPastBookings,
    currentCustomerFutureBookings
  );
}

function getDate() {
  global.currentDate = new Date();
  let unformattedDate = currentDate.toISOString().substring(0, 10);
  currentDate = unformattedDate.replaceAll("-", "/");
  dateInput.setAttribute("min", currentDate);
}

function loadAllCurrentCustomerBookings(customerID) {
  return bookings.bookingsData.filter((booking) => {
    return booking.userID === customerID;
  });
}

function sortFutureBookings(customerID) {
  return loadAllCurrentCustomerBookings(customerID).filter((booking) => {
    return booking.date <= currentDate;
  });
}

function sortPastBookings(customerID) {
  return loadAllCurrentCustomerBookings(customerID).filter((booking) => {
    return booking.date > currentDate;
  });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~ DOM ~~~~~~~~~~~~~~~~~~~~~~~~~~~

function toggleUserLogin() {
  let loginButtonMessageUser = document.querySelector(
    ".login-button-message-user"
  );
  loginButtonMessageUser.classList.toggle("hidden");
  let loginButtonMessageManager = document.querySelector(
    ".login-button-message-manager"
  );
  loginButtonMessageManager.classList.toggle("hidden");
  customerLoginView.classList.toggle("hidden");
  managerLoginView.classList.toggle("hidden");
}

function displayLoginErrorMessage(buttonLocation) {
  buttonLocation.insertAdjacentHTML(
    "afterend",
    `<br><p class="error" id="login-error-message">The username or password you entered is incorrect. Please try again.</p>`
  );
  setTimeout(() => removeErrorMessage(), 3000);
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
  heading.classList.toggle("hidden");
  homepage.classList.toggle("hidden");
  user.classList.toggle("hidden");
}

function displayPastCustomerBookings(location) {
  const dateSection = document.querySelector(`${location}`);
  currentCustomer.previousBookings.forEach((booking) => {
    let dateBooked = `<p>${booking.date}</p>`;
    dateSection.insertAdjacentHTML("beforeend", dateBooked);
  });

  currentCustomer.previousBookings.forEach((booking) => {
    const previousStay = allRooms.roomData.find((room) => {
      return room.number === booking.roomNumber;
    });
    const roomNumber = previousStay.number;
    const roomType = previousStay.roomType;
    const bedSize = previousStay.bedSize;
    const bedQuantity = previousStay.numBeds;
    const roomCost = previousStay.costPerNight;
    const bidetBoolean = previousStay.bidet ? "Included" : "Not Included";

    const roomNumberSection = document.querySelector("#past-room-number");
    const roomTypeSection = document.querySelector("#past-room-type");
    const bedSizeSection = document.querySelector("#past-bed-size");
    const bedCountSection = document.querySelector("#past-bed-count");
    const roomCostSection = document.querySelector("#past-cost-per-night");
    const bidetSection = document.querySelector("#past-bidet");

    roomNumberSection.insertAdjacentHTML(
      "beforeend",
      `<li style="list-style-type:none;">${roomNumber}</li>`
    );
    roomTypeSection.insertAdjacentHTML(
      "beforeend",
      `<li style="list-style-type:none;">${roomType}</li>`
    );
    bedSizeSection.insertAdjacentHTML(
      "beforeend",
      `<li style="list-style-type:none;">${bedSize}</li>`
    );
    bedCountSection.insertAdjacentHTML(
      "beforeend",
      `<li style="list-style-type:none;">${bedQuantity}</li>`
    );
    roomCostSection.insertAdjacentHTML(
      "beforeend",
      `<li style="list-style-type:none;">$${roomCost}</li>`
    );
    bidetSection.insertAdjacentHTML(
      "beforeend",
      `<li style="list-style-type:none;">${bidetBoolean}</li>`
    );
  });
}
function displayUpcomingCustomerBookings(location) {
  const dateSection = document.querySelector(`${location}`);
  currentCustomer.futureBookings.forEach((booking) => {
    let dateBooked = `<p>${booking.date}</p>`;
    dateSection.insertAdjacentHTML("beforeend", dateBooked);
  });

  currentCustomer.futureBookings.forEach((booking) => {
    const upcomingStay = allRooms.roomData.find((room) => {
      return room.number === booking.roomNumber;
    });

    if (typeof upcomingStay === "undefined") {
      return;
    } else {
      console.log({ upcomingStay });
      const roomNumber = upcomingStay.number;
      const roomType = upcomingStay.roomType;
      const bedSize = upcomingStay.bedSize;
      const bedQuantity = upcomingStay.numBeds;
      const roomCost = upcomingStay.costPerNight;
      const bidetBoolean = upcomingStay.bidet ? "Included" : "Not Included";

      const roomNumberSection = document.querySelector("#future-room-number");
      const roomTypeSection = document.querySelector("#future-room-type");
      const bedSizeSection = document.querySelector("#future-bed-size");
      const bedCountSection = document.querySelector("#future-bed-count");
      const roomCostSection = document.querySelector("#future-cost-per-night");
      const bidetSection = document.querySelector("#future-bidet");

      roomNumberSection.insertAdjacentHTML(
        "beforeend",
        `<li style="list-style-type:none;">${roomNumber}</li>`
      );
      roomTypeSection.insertAdjacentHTML(
        "beforeend",
        `<li style="list-style-type:none;">${roomType}</li>`
      );
      bedSizeSection.insertAdjacentHTML(
        "beforeend",
        `<li style="list-style-type:none;">${bedSize}</li>`
      );
      bedCountSection.insertAdjacentHTML(
        "beforeend",
        `<li style="list-style-type:none;">${bedQuantity}</li>`
      );
      roomCostSection.insertAdjacentHTML(
        "beforeend",
        `<li style="list-style-type:none;">$${roomCost}</li>`
      );
      bidetSection.insertAdjacentHTML(
        "beforeend",
        `<li style="list-style-type:none;">${bidetBoolean}</li>`
      );
    }
  });
}

function displayTotalSpentByCustomer(location) {
  const totalSpentByCustomer = allRooms.roomData.reduce((totalSpent, room) => {
    currentCustomer.previousBookings.forEach((booking) => {
      if (room.number === booking.roomNumber) {
        totalSpent += room.costPerNight;
      }
    });
    return Math.round(totalSpent);
  }, 0);

  const totalSpendingSection = document.querySelector(`${location}`);
  totalSpendingSection.insertAdjacentHTML(
    "beforeend",
    `<p id="spending-message">Total Spent $${totalSpentByCustomer}</p>`
  );
}

function fetchRoomData() {
  fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
    .then((response) => response.json())
    .then((data) => loadAllRoomData(data.rooms))
    .catch((error) => console.log(error.message));
}

function loadAllRoomData(allRoomData) {
  console.log({ allRoomData });
  global.allRooms = new _Room__WEBPACK_IMPORTED_MODULE_6__["default"](allRoomData);
  allRooms.sortRoomsByType();
}

function showUpcomingBookings() {
  upcomingBookingsButton.classList.add("selected");
  pastBookingsButton.classList.remove("selected");
  futureBookingsSection.classList.remove("hidden");
  previousBookingsSection.classList.add("hidden");
}

function showPastBookings() {
  upcomingBookingsButton.classList.remove("selected");
  pastBookingsButton.classList.add("selected");
  futureBookingsSection.classList.add("hidden");
  previousBookingsSection.classList.remove("hidden");
}

function searchForRooms(selectedDate, selectedRoomType) {
  const availableRooms = allRooms[selectedRoomType].filter((room) => {
    let bookedRoom = bookings.bookingsData.find((booking) => {
      return (
        booking.date === selectedDate && room.number === booking.roomNumber
      );
    });

    if (typeof bookedRoom === "undefined") {
      return true;
    } else {
      return false;
    }
  });
  return availableRooms;
}

function displayAvailableRooms() {
  let formattedDate = dateInput.value.replaceAll("-", "/");
  let roomTypeSelection;
  if (roomFilterDropdown.value === "all-rooms") {
    roomTypeSelection = "roomData";
  } else if (roomFilterDropdown.value === "single-room") {
    roomTypeSelection = "singleRooms";
  } else if (roomFilterDropdown.value === "junior-suite") {
    roomTypeSelection = "juniorSuites";
  } else if (roomFilterDropdown.value === "suite") {
    roomTypeSelection = "suites";
  } else if (roomFilterDropdown.value === "residential-suite") {
    roomTypeSelection = "residentialSuites";
  }

  const availableBookingsSection = document.querySelector(
    "#available-bookings-section"
  );
  availableBookingsSection.classList.remove("hidden");
  bookingButton.classList.remove("hidden");

  const selectorSection = document.querySelector(".room-to-select");
  const roomNumberSection = document.querySelector("#queried-room-number");
  const roomTypeSection = document.querySelector("#queried-room-type");
  const bedSizeSection = document.querySelector("#queried-bed-size");
  const bedCountSection = document.querySelector("#queried-bed-count");
  const roomCostSection = document.querySelector("#queried-cost-per-night");
  const bidetSection = document.querySelector("#queried-bidet");

  selectorSection.innerHTML = '<p class="room-to-select">Select</p>';
  roomNumberSection.innerHTML = "<p>Room Number</p>";
  roomTypeSection.innerHTML = "<p>Room Type</p>";
  bedSizeSection.innerHTML = "<p>Bed Size</p>";
  bedCountSection.innerHTML = "<p>Number Of Beds</p>";
  roomCostSection.innerHTML = "<p>Cost Per Night</p>";
  bidetSection.innerHTML = "<p>Bidet?</p>";

  if (formattedDate.length === 0) {
    let requiredDateMessage = document.querySelector("#required-date-message");
    requiredDateMessage.classList.toggle("hidden");
    setTimeout(() => {
      requiredDateMessage.classList.toggle("hidden");
    }, 3000);
  } else {
    searchForRooms(formattedDate, roomTypeSelection).forEach(
      (availableRoom) => {
        const roomNumber = availableRoom.number;
        const roomType =
          availableRoom.roomType === "single room"
            ? availableRoom.roomType.slice(0, 7)
            : availableRoom.roomType;
        const bedSize = availableRoom.bedSize;
        const bedQuantity = availableRoom.numBeds;
        const roomCost = availableRoom.costPerNight;
        const bidetBoolean = availableRoom.bidet ? "Included" : "Not Included";

        selectorSection.insertAdjacentHTML(
          "beforeend",
          `<input type="checkbox" class="selector" id=${roomNumber}><br>`
        );
        roomNumberSection.insertAdjacentHTML(
          "beforeend",
          `<li style="list-style-type:none;">${roomNumber}</li>`
        );
        roomTypeSection.insertAdjacentHTML(
          "beforeend",
          `<li style="list-style-type:none;">${roomType}</li>`
        );
        bedSizeSection.insertAdjacentHTML(
          "beforeend",
          `<li style="list-style-type:none;">${bedSize}</li>`
        );
        bedCountSection.insertAdjacentHTML(
          "beforeend",
          `<li style="list-style-type:none;">${bedQuantity}</li>`
        );
        roomCostSection.insertAdjacentHTML(
          "beforeend",
          `<li style="list-style-type:none;">$${roomCost}</li>`
        );
        bidetSection.insertAdjacentHTML(
          "beforeend",
          `<li style="list-style-type:none;">${bidetBoolean}</li>`
        );
      }
    );
  }
}

function handleBooking() {
  let formattedDate = dateInput.value.replaceAll("-", "/");
  let selectedRooms = Array.from(document.getElementsByClassName("selector"));
  if (typeof currentCustomerId === "undefined") {
    currentCustomerId = currentCustomer.id;
  }
  selectedRooms.forEach((selectedRoom) => {
    if (selectedRoom.checked) {
      let roomToBook = {
        userID: currentCustomerId,
        date: formattedDate,
        roomNumber: parseInt(selectedRoom.id),
      };
      if (
        currentCustomer.bookRoom(roomToBook, bookings.bookingsData) === false
      ) {
        postBooking(roomToBook);
        let bookRoomSuccessMessage = document.querySelector(
          "#book-room-success-message"
        );
        bookRoomSuccessMessage.classList.toggle("hidden");
        setTimeout(() => {
          bookRoomSuccessMessage.classList.toggle("hidden");
        }, 3000);
      } else {
        console.log("the booking already exists, cant post");
      }
    }
  });
}

function postBooking(dataToPost) {
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToPost),
    }
  )
    .then((response) => response.json())
    .then((message) => console.log("booking was posted"))
    .catch((error) => console.log(error.message));
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~ Manager Dashboard ~~~~~~~~~~~~~~~~~~~~~~~~~~~

function displayManagerView() {
  toggleLoginPage(managerProfilePage);
  roomsAvailableToday.classList.remove("hidden");
  revenueToday.classList.remove("hidden");
  roomOccupiedPercentage.classList.remove("hidden");
  roomsAvailableToday.innerHTML = `<p>Number Of Rooms Available Today</p><br>${displayRoomsAvailableToday()}`;
  displayTodaysTotalRevenue();
  roomOccupiedPercentage.innerHTML = `<p>Percentage Of Rooms Occupied Today</p><br>${displayRoomOccupiedPercentage()}`;
}

function displayRoomsAvailableToday() {
  let availableRooms = allRooms.roomData.filter((room) => {
    let roomAvailable = true;
    bookings.bookingsData.forEach((booking) => {
      if (booking.date === currentDate && booking.roomNumber === room.number) {
        roomAvailable = false;
      }
    });
    return roomAvailable;
  });
  return availableRooms.length;
}

function displayTodaysTotalRevenue() {
  let todaysRevenue = bookings.bookingsData.reduce((totalRevenue, booking) => {
    allRooms.roomData.forEach((room) => {
      if (currentDate === booking.date) {
        totalRevenue += room.costPerNight;
      }
    });
    return Math.round(totalRevenue);
  }, 0);
  const todaysRevenueSection = document.querySelector("#revenue-today");
  todaysRevenueSection.innerHTML = `<p>Today's Total Revenue</p><br><br><p>$${todaysRevenue}</p>`;
}

function displayRoomOccupiedPercentage() {
  const percentOfOccupiedRooms =
    (displayRoomsAvailableToday() / allRooms.roomData.length) * 100;
  return `<p>${percentOfOccupiedRooms}%</p>`;
}

function handleSearchForCustomer() {
  findCustomerByName();
  managerSideBar.classList.toggle("hidden");
}

function findCustomerByName() {
  const customerSearchField = document.querySelector("#customer-search-field");
  const queriedCustomer = currentManager.searchForCustomer(
    customerSearchField.value,
    userRepo.customers
  );
  if (!queriedCustomer) {
    let unidentifiedUserMessage = document.querySelector(
      "#unidentified-user-message"
    );
    unidentifiedUserMessage.classList.toggle("hidden");
    setTimeout(() => {
      unidentifiedUserMessage.classList.toggle("hidden");
    }, 3000);
  } else {
    const queriedCustomerPastBookings = sortPastBookings(queriedCustomer.id);
    const queriedCustomerFutureBookings = sortFutureBookings(
      queriedCustomer.id
    );
    global.currentCustomer = new _Customer__WEBPACK_IMPORTED_MODULE_2__["default"](
      queriedCustomer.id,
      queriedCustomer.name,
      queriedCustomerFutureBookings,
      queriedCustomerPastBookings
    );

    displayCustomerView(
      "#past-bookings-date",
      "#future-bookings-date",
      "#total-spent"
    );
    const upcomingBookingsTitle = document.querySelector(
      "#upcoming-bookings-title"
    );
    const previousBookingsTitle = document.querySelector(
      "#previous-bookings-title"
    );
    upcomingBookingsTitle.innerText = `Upcoming Bookings For ${currentCustomer.name}`;
    previousBookingsTitle.innerText = `Previous Bookings For ${currentCustomer.name}`;
    userProfilePage.classList.remove("hidden");
    managerSideBar.classList.remove("hidden");
  }
}

function handleCustomerLogout() {
  logout(userProfilePage);
}

function handleManagerLogout() {
  customerLogoutButton.classList.add("hidden");
  userProfilePage.classList.add("hidden");
  logout(managerProfilePage);
}

function logout(user) {
  toggleLoginPage(user);
  //managerProfilePage.classList.add('hidden')
  let spendingMessage = document.querySelector("#spending-message");
  if (typeof spendingMessage === "undefined") {
    return;
  } else if (spendingMessage === null) {
    return;
  } else {
    spendingMessage.remove();
  }
}

function deleteBookingFromApi(id) {
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }
  )
    .then((response) => console.log(response))
    //.then(message => console.log('booking was posted'))
    .catch((error) => console.log(error.message));
}

function handleDeleteBooking() {
  const roomNumberToDelete = document.querySelector("#room-number-to-delete");
  const dateToDelete = document.querySelector("#date-to-delete");
  let formattedDate = dateToDelete.value.replaceAll("-", "/");
  const bookingToDelete = bookings.bookingsData.find((booking) => {
    return (
      booking.date === formattedDate &&
      booking.roomNumber == roomNumberToDelete.value
    );
  });
  currentManager.deleteBookedRoom(currentCustomer, formattedDate);
  //deleteBookingFromApi(bookingToDelete.id);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./docs/css/base.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./docs/css/base.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/man-watching-sunset-grand-canyon.jpg */ "./docs/images/man-watching-sunset-grand-canyon.jpg"));

// Module
exports.push([module.i, "* {\n  font-family: \"Times New Roman\", Times, serif; }\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + "); }\n\ntitle {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\nh1 {\n  background-color: #048A81;\n  border: 4px solid black;\n  border-radius: 10px;\n  font-size: 5em;\n  padding: 1em; }\n\nh2 {\n  display: flex;\n  justify-content: center; }\n\nbutton {\n  width: 10em;\n  height: 2em; }\n\n.homepage {\n  display: flex;\n  justify-content: center;\n  display: flex;\n  width: 100%;\n  height: 100%; }\n\n#toggle-view-button {\n  height: 5vh; }\n\n.inputs {\n  font-size: 2em; }\n\n.customer-login, .manager-login {\n  display: flex;\n  background-color: #048A81;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 4px solid black;\n  border-radius: 10px;\n  width: 500px;\n  height: 500px; }\n\n#welcome-message {\n  font-size: 3em; }\n\n.login {\n  margin: 10px;\n  width: 15vh;\n  height: 3vh; }\n\n.tab {\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1; }\n\n.user-profile-page {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-content: space-between; }\n\n.side-bar {\n  background-color: #048A81;\n  border: 4px solid black;\n  border-radius: 10px;\n  font-size: 5em;\n  padding: 1em;\n  height: 200vh;\n  width: 2em; }\n\n.sidebar-profile-pic {\n  border-radius: 50%; }\n\n.user-card {\n  margin-top: 6em;\n  width: 50em;\n  height: 55vh;\n  overflow: hidden;\n  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n  border: 4px solid black;\n  border-radius: 10px;\n  overflow: scroll; }\n\n#past-bookings {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1em; }\n\n#upcoming-bookings {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1em; }\n\n.past-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.future-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\nul {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n#upcoming-bookings-button {\n  border: none;\n  width: 15em;\n  height: 4em; }\n\n#past-bookings-button {\n  border: none;\n  width: 15em;\n  height: 4em;\n  border-left: solid 2px black; }\n\ninput[type=\"checkbox\"] {\n  margin: 3.5vh; }\n\n.selected {\n  background-color: #c7c0c0; }\n\n.middle {\n  display: flex;\n  flex-direction: column; }\n\n.book-room {\n  margin-top: 3em; }\n\n#booking-button {\n  margin-top: 2em;\n  width: 20em;\n  height: 3em; }\n\n.error {\n  color: red; }\n\n.manager-profile-page {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-content: space-between; }\n\n.manager-card {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: centerr;\n  flex-wrap: wrap;\n  width: 15em;\n  height: 15vh; }\n\n.middle-manager {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: space-between;\n  width: 50em; }\n\n.style {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly; }\n\n#search-customer-form {\n  display: flex;\n  justify-content: center;\n  margin-top: 5em; }\n\n#logout-button {\n  margin-top: .5em;\n  margin-bottom: 1em; }\n\n.hidden {\n  display: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9Cb29raW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9kb2NzL0N1c3RvbWVyLmpzIiwid2VicGFjazovLy8uL2RvY3MvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9kb2NzL1Jvb20uanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9Vc2VyLVJlcG8uanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9Vc2VyLmpzIiwid2VicGFjazovLy8uL2RvY3MvY3NzL2Jhc2Uuc2Nzcz9lY2ZmIiwid2VicGFjazovLy8uL2RvY3MvaW1hZ2VzL21hbi13YXRjaGluZy1zdW5zZXQtZ3JhbmQtY2FueW9uLmpwZyIsIndlYnBhY2s6Ly8vLi9kb2NzL2ltYWdlcy9wcm9maWxlLXBpYy5wbmciLCJ3ZWJwYWNrOi8vLy4vZG9jcy9pbWFnZXMvdHVyaW5nLWxvZ28ucG5nIiwid2VicGFjazovLy8uL2RvY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9jc3MvYmFzZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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RUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2RvY3MvaW5kZXguanNcIik7XG4iLCJjbGFzcyBCb29raW5ncyB7XG4gIGNvbnN0cnVjdG9yKGJvb2tpbmdzRGF0YSkge1xuICAgIHRoaXMuYm9va2luZ3NEYXRhID0gYm9va2luZ3NEYXRhO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmdzO1xuIiwiaW1wb3J0IFVzZXJSZXBvIGZyb20gJy4vVXNlci1SZXBvJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5cbmNsYXNzIEN1c3RvbWVyIGV4dGVuZHMgVXNlciB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBwcmV2aW91c0Jvb2tpbmdzLCBmdXR1cmVCb29raW5ncykge1xuICAgIHN1cGVyKGlkLCBuYW1lLCBwcmV2aW91c0Jvb2tpbmdzLCBmdXR1cmVCb29raW5ncyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXI7IiwiaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuXG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgVXNlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51c2VybmFtZSA9ICdtYW5hZ2VyJztcbiAgICB0aGlzLnBhc3N3b3JkID0gJ292ZXJsb29rMjAyMCc7XG4gIH1cblxuICBzZWFyY2hGb3JDdXN0b21lcihzZWFyY2hlZEN1c3RvbWVyLCB1c2VyUmVwbykge1xuICAgIGNvbnN0IGZvdW5kQ3VzdG9tZXIgPSB1c2VyUmVwby5maW5kKHVzZXIgPT4ge1xuICAgICAgcmV0dXJuIHNlYXJjaGVkQ3VzdG9tZXIgPT09IHVzZXIubmFtZTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mKGZvdW5kQ3VzdG9tZXIpID09PSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kQ3VzdG9tZXJcbiAgfTtcbiAgXG4gIGRlbGV0ZUJvb2tlZFJvb20odXNlciwgZGF0ZSkge1xuICAgIGNvbnNvbGUubG9nKHVzZXIuZnV0dXJlQm9va2luZ3MpXG4gICAgdXNlci5mdXR1cmVCb29raW5ncyA9IHVzZXIuZnV0dXJlQm9va2luZ3MuZmlsdGVyKGZ1dHVyZUJvb2tpbmcgPT4ge1xuICAgICAgcmV0dXJuIGZ1dHVyZUJvb2tpbmcuZGF0ZSAhPT0gZGF0ZTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZWRcIilcbiAgICBjb25zb2xlLmxvZyh1c2VyLmZ1dHVyZUJvb2tpbmdzKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlcjsiLCJjbGFzcyBSb29tIHtcbiAgY29uc3RydWN0b3Iocm9vbURhdGEpIHtcbiAgICB0aGlzLnJvb21EYXRhID0gcm9vbURhdGE7XG4gICAgdGhpcy5zaW5nbGVSb29tcztcbiAgICB0aGlzLmp1bmlvclN1aXRlcztcbiAgICB0aGlzLnN1aXRlcztcbiAgICB0aGlzLnJlc2lkZW50aWFsU3VpdGVzO1xuICB9XG5cbiAgc29ydFJvb21zQnlUeXBlKCkge1xuICAgIHRoaXMuc2luZ2xlUm9vbXMgPSB0aGlzLnJvb21EYXRhLmZpbHRlcihyb29tID0+IHtcbiAgICAgIHJldHVybiByb29tLnJvb21UeXBlID09PSAnc2luZ2xlIHJvb20nO1xuICAgIH0pO1xuICAgIHRoaXMuanVuaW9yU3VpdGVzID0gdGhpcy5yb29tRGF0YS5maWx0ZXIocm9vbSA9PiB7XG4gICAgICByZXR1cm4gcm9vbS5yb29tVHlwZSA9PT0gJ2p1bmlvciBzdWl0ZSc7XG4gICAgfSk7XG4gICAgdGhpcy5zdWl0ZXMgPSB0aGlzLnJvb21EYXRhLmZpbHRlcihyb29tID0+IHtcbiAgICAgIHJldHVybiByb29tLnJvb21UeXBlID09PSAnc3VpdGUnO1xuICAgIH0pO1xuICAgIHRoaXMucmVzaWRlbnRpYWxTdWl0ZXMgPSB0aGlzLnJvb21EYXRhLmZpbHRlcihyb29tID0+IHtcbiAgICAgIHJldHVybiByb29tLnJvb21UeXBlID09PSAncmVzaWRlbnRpYWwgc3VpdGUnO1xuICAgIH0pO1xuICB9XG4gIFxuICAvL2ZpbHRlclJvb21zQnlUeXBlKHJvb21UeXBlKSB7XG4gICAgLy90aGlzLnJvb21EYXRhLmZpbHRlcihyb29tRGF0YSlcbiAgLy99XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb207IiwiY2xhc3MgVXNlclJlcG8ge1xuICBjb25zdHJ1Y3RvcihjdXN0b21lcnMpIHtcbiAgICB0aGlzLmN1c3RvbWVycyA9IGN1c3RvbWVycztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUmVwbztcblxuIiwiY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBwcmV2aW91c0Jvb2tpbmdzLCBmdXR1cmVCb29raW5ncykge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJldmlvdXNCb29raW5ncyA9IHByZXZpb3VzQm9va2luZ3MgfHwgW107XG4gICAgdGhpcy5mdXR1cmVCb29raW5ncyA9IGZ1dHVyZUJvb2tpbmdzIHx8IFtdO1xuICB9XG5cbiAgYm9va1Jvb20ocG90ZW50aWFsQm9va2luZywgYm9va2luZ3NMaXN0KSB7XG4gICAgbGV0IGFscmVhZHlCb29rZWQ7XG4gICAgYm9va2luZ3NMaXN0LmZvckVhY2goKGJvb2tpbmcpID0+IHtcbiAgICAgIGFscmVhZHlCb29rZWQgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBib29raW5nLnJvb21OdW1iZXIsXG4gICAgICAgIHBvdGVudGlhbEJvb2tpbmcucm9vbU51bWJlcixcbiAgICAgICAgYm9va2luZy5kYXRlLFxuICAgICAgICBwb3RlbnRpYWxCb29raW5nLmRhdGVcbiAgICAgICk7XG4gICAgICBpZiAoXG4gICAgICAgIGJvb2tpbmcucm9vbU51bWJlciA9PT0gcG90ZW50aWFsQm9va2luZy5yb29tTnVtYmVyICYmXG4gICAgICAgIGJvb2tpbmcuZGF0ZSA9PSBwb3RlbnRpYWxCb29raW5nLmRhdGVcbiAgICAgICkge1xuICAgICAgICBhbHJlYWR5Qm9va2VkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJxd29laWZuYXdlb2l3cWVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGFscmVhZHlCb29rZWQgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiWW91ciByb29tIGhhcyBhbHJlYWR5IGJlZW4gYm9va2VkXCIpO1xuICAgICAgLy9yZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZnV0dXJlQm9va2luZ3MucHVzaChwb3RlbnRpYWxCb29raW5nKTtcbiAgICAgIC8vcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBhbHJlYWR5Qm9va2VkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL21hbi13YXRjaGluZy1zdW5zZXQtZ3JhbmQtY2FueW9uLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcHJvZmlsZS1waWMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy90dXJpbmctbG9nby5wbmdcIjsiLCJpbXBvcnQgQm9va2luZ3MgZnJvbSBcIi4vQm9va2luZ3NcIjtcbmltcG9ydCBcIi4vY3NzL2Jhc2Uuc2Nzc1wiO1xuaW1wb3J0IEN1c3RvbWVyIGZyb20gXCIuL0N1c3RvbWVyXCI7XG5cbmltcG9ydCBcIi4vaW1hZ2VzL21hbi13YXRjaGluZy1zdW5zZXQtZ3JhbmQtY2FueW9uLmpwZ1wiO1xuaW1wb3J0IFwiLi9pbWFnZXMvdHVyaW5nLWxvZ28ucG5nXCI7XG5pbXBvcnQgXCIuL2ltYWdlcy9wcm9maWxlLXBpYy5wbmdcIjtcbmltcG9ydCBSb29tIGZyb20gXCIuL1Jvb21cIjtcbmltcG9ydCBVc2VyUmVwbyBmcm9tIFwiLi9Vc2VyLVJlcG9cIjtcbmltcG9ydCBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcblxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiBRVUVSWSBTRUxFQ1RPUlMgfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRpbmdcIik7XG5cbmNvbnN0IHRvZ2dsZUxvZ2luVmlld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLXZpZXctYnV0dG9uXCIpO1xuY29uc3QgY3VzdG9tZXJVc2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VzdG9tZXItdXNlcm5hbWUtaW5wdXRcIik7XG5jb25zdCB1c2VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyLXBhc3N3b3JkLWlucHV0XCIpO1xuY29uc3QgdXNlckxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLWxvZ2luLWJ1dHRvblwiKTtcblxuY29uc3QgbWFuYWdlclVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYW5hZ2VyLXVzZXJuYW1lLWlucHV0XCIpO1xuY29uc3QgbWFuYWdlclBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYW5hZ2VyLXBhc3N3b3JkLWlucHV0XCIpO1xuY29uc3QgbWFuYWdlckxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYW5hZ2VyLWxvZ2luLWJ1dHRvblwiKTtcblxuY29uc3QgY3VzdG9tZXJMb2dpblZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbWVyLWxvZ2luXCIpO1xuY29uc3QgbWFuYWdlckxvZ2luVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFuYWdlci1sb2dpblwiKTtcbmNvbnN0IGN1c3RvbWVyTG9nb3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lci1sb2dvdXQtYnV0dG9uXCIpO1xuY29uc3QgbWFuYWdlckxvZ291dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFuYWdlci1sb2dvdXQtYnV0dG9uXCIpO1xuXG5jb25zdCBob21lcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZXBhZ2VcIik7XG5jb25zdCB1c2VyUHJvZmlsZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItcHJvZmlsZS1wYWdlXCIpO1xuY29uc3QgcHJldmlvdXNCb29raW5nc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpb3VzLWJvb2tpbmdzXCIpO1xuY29uc3QgZnV0dXJlQm9va2luZ3NTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmdXR1cmUtYm9va2luZ3NcIik7XG5cbmNvbnN0IG1hbmFnZXJQcm9maWxlUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFuYWdlci1wcm9maWxlLXBhZ2VcIik7XG5jb25zdCBtYW5hZ2VyU2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFuYWdlci1zaWRlLWJhclwiKTtcbmNvbnN0IHJvb21zQXZhaWxhYmxlVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb21zLWF2YWlsYWJsZS10b2RheVwiKTtcbmNvbnN0IHJldmVudWVUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmV2ZW51ZS10b2RheVwiKTtcbmNvbnN0IHJvb21PY2N1cGllZFBlcmNlbnRhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNyb29tLW9jY3VwaWVkLXBlcmNlbnRhZ2VcIlxuKTtcbmNvbnN0IGRlbGV0ZUJvb2tpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZS1ib29raW5nLWJ1dHRvblwiKTtcblxuY29uc3QgdXBjb21pbmdCb29raW5nc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3VwY29taW5nLWJvb2tpbmdzLWJ1dHRvblwiXG4pO1xuY29uc3QgcGFzdEJvb2tpbmdzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXN0LWJvb2tpbmdzLWJ1dHRvblwiKTtcblxuY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLXBpY2tlclwiKTtcbmNvbnN0IHJvb21GaWx0ZXJEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vbS1maWx0ZXItZHJvcGRvd25cIik7XG5jb25zdCBzZWFyY2hSb29tc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLXJvb21zLWJ1dHRvblwiKTtcbmNvbnN0IGJvb2tpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2tpbmctYnV0dG9uXCIpO1xuXG5jb25zdCBzZWFyY2hDdXN0b21lckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWN1c3RvbWVyLWJ1dHRvblwiKTtcblxuLy8gfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fiBFVkVOVCBMSVNURU5FUlMgfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBoYW5kbGVMb2FkKTtcblxudG9nZ2xlTG9naW5WaWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVVc2VyTG9naW4pO1xuXG51c2VyTG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVVzZXJMb2dpbik7XG5tYW5hZ2VyTG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1hbmFnZXJMb2dpbik7XG5cbnVwY29taW5nQm9va2luZ3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dVcGNvbWluZ0Jvb2tpbmdzKTtcbnBhc3RCb29raW5nc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Bhc3RCb29raW5ncyk7XG5cbnNlYXJjaFJvb21zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5QXZhaWxhYmxlUm9vbXMpO1xuYm9va2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQm9va2luZyk7XG5cbnNlYXJjaEN1c3RvbWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTZWFyY2hGb3JDdXN0b21lcik7XG5cbmN1c3RvbWVyTG9nb3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDdXN0b21lckxvZ291dCk7XG5tYW5hZ2VyTG9nb3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVNYW5hZ2VyTG9nb3V0KTtcblxuZGVsZXRlQm9va2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGVsZXRlQm9va2luZyk7XG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+IFNDUklQVFMgfn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+XG5cbmxldCBjdXJyZW50Q3VzdG9tZXJJZDtcblxuZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgZ2V0RGF0ZSgpO1xuICBmZXRjaEFsbEN1c3RvbWVycygpO1xuICBmZXRjaEFsbEJvb2tpbmdzKCk7XG4gIGZldGNoUm9vbURhdGEoKTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hBbGxDdXN0b21lcnMoKSB7XG4gIGZldGNoKFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvdXNlcnMvdXNlcnNcIilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gbG9hZEFsbEN1c3RvbWVycyhkYXRhLnVzZXJzKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XG59XG5cbmZ1bmN0aW9uIGZldGNoQWxsQm9va2luZ3MoKSB7XG4gIGZldGNoKFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3NcIilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coeyBkYXRhIH0pO1xuICAgICAgbG9hZEFsbEJvb2tpbmdzKGRhdGEuYm9va2luZ3MpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xufVxuXG5mdW5jdGlvbiBsb2FkQWxsQ3VzdG9tZXJzKGN1c3RvbWVyc0xpc3QpIHtcbiAgZ2xvYmFsLnVzZXJSZXBvID0gbmV3IFVzZXJSZXBvKGN1c3RvbWVyc0xpc3QpO1xufVxuXG5mdW5jdGlvbiBsb2FkQWxsQm9va2luZ3MoYm9va2luZ3NMaXN0KSB7XG4gIGdsb2JhbC5ib29raW5ncyA9IG5ldyBCb29raW5ncyhib29raW5nc0xpc3QpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVVc2VyTG9naW4oKSB7XG4gIGlmICh2ZXJpZnlDdXN0b21lclVzZXJuYW1lKCkgJiYgdmVyaWZ5UGFzc3dvcmQodXNlclBhc3N3b3JkKSkge1xuICAgIGxvYWRDdXN0b21lcigpO1xuICAgIGRpc3BsYXlDdXN0b21lclZpZXcoXG4gICAgICBcIiNwYXN0LWJvb2tpbmdzLWRhdGVcIixcbiAgICAgIFwiI2Z1dHVyZS1ib29raW5ncy1kYXRlXCIsXG4gICAgICBcIiN0b3RhbC1zcGVudFwiXG4gICAgKTtcbiAgICB0b2dnbGVMb2dpblBhZ2UodXNlclByb2ZpbGVQYWdlKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5TG9naW5FcnJvck1lc3NhZ2UodXNlckxvZ2luQnV0dG9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNYW5hZ2VyTG9naW4oKSB7XG4gIGlmICh2ZXJpZnlNYW5hZ2VyVXNlcm5hbWUoKSAmJiB2ZXJpZnlQYXNzd29yZChtYW5hZ2VyUGFzc3dvcmQpKSB7XG4gICAgZ2xvYmFsLmN1cnJlbnRNYW5hZ2VyID0gbmV3IE1hbmFnZXIoKTtcbiAgICBkaXNwbGF5TWFuYWdlclZpZXcoKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5TG9naW5FcnJvck1lc3NhZ2UobWFuYWdlckxvZ2luQnV0dG9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJpZnlDdXN0b21lclVzZXJuYW1lKCkge1xuICBsZXQgY3VzdG9tZXIgPSB1c2VyUmVwby5jdXN0b21lcnMuZmluZCgodXNlcikgPT4ge1xuICAgIHJldHVybiBjdXN0b21lclVzZXJuYW1lLnZhbHVlID09IGBjdXN0b21lciR7dXNlci5pZH1gO1xuICB9KTtcbiAgcmV0dXJuIGN1c3RvbWVyO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlNYW5hZ2VyVXNlcm5hbWUoKSB7XG4gIHJldHVybiBtYW5hZ2VyVXNlcm5hbWUudmFsdWUgPT09IFwibWFuYWdlclwiO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlQYXNzd29yZChpbnB1dExvY2F0aW9uKSB7XG4gIHJldHVybiBpbnB1dExvY2F0aW9uLnZhbHVlID09PSBcIm92ZXJsb29rMjAyMFwiO1xufVxuXG5mdW5jdGlvbiBsb2FkQ3VzdG9tZXIoKSB7XG4gIGN1cnJlbnRDdXN0b21lcklkID0gdmVyaWZ5Q3VzdG9tZXJVc2VybmFtZSgpLmlkO1xuICBjb25zdCBjdXJyZW50Q3VzdG9tZXJOYW1lID0gdmVyaWZ5Q3VzdG9tZXJVc2VybmFtZSgpLm5hbWU7XG4gIGNvbnN0IGN1cnJlbnRDdXN0b21lclBhc3RCb29raW5ncyA9IHNvcnRGdXR1cmVCb29raW5ncyhjdXJyZW50Q3VzdG9tZXJJZCk7XG4gIGNvbnN0IGN1cnJlbnRDdXN0b21lckZ1dHVyZUJvb2tpbmdzID0gc29ydFBhc3RCb29raW5ncyhjdXJyZW50Q3VzdG9tZXJJZCk7XG4gIGdsb2JhbC5jdXJyZW50Q3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXIoXG4gICAgY3VycmVudEN1c3RvbWVySWQsXG4gICAgY3VycmVudEN1c3RvbWVyTmFtZSxcbiAgICBjdXJyZW50Q3VzdG9tZXJQYXN0Qm9va2luZ3MsXG4gICAgY3VycmVudEN1c3RvbWVyRnV0dXJlQm9va2luZ3NcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgZ2xvYmFsLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgbGV0IHVuZm9ybWF0dGVkRGF0ZSA9IGN1cnJlbnREYXRlLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcbiAgY3VycmVudERhdGUgPSB1bmZvcm1hdHRlZERhdGUucmVwbGFjZUFsbChcIi1cIiwgXCIvXCIpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIGN1cnJlbnREYXRlKTtcbn1cblxuZnVuY3Rpb24gbG9hZEFsbEN1cnJlbnRDdXN0b21lckJvb2tpbmdzKGN1c3RvbWVySUQpIHtcbiAgcmV0dXJuIGJvb2tpbmdzLmJvb2tpbmdzRGF0YS5maWx0ZXIoKGJvb2tpbmcpID0+IHtcbiAgICByZXR1cm4gYm9va2luZy51c2VySUQgPT09IGN1c3RvbWVySUQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzb3J0RnV0dXJlQm9va2luZ3MoY3VzdG9tZXJJRCkge1xuICByZXR1cm4gbG9hZEFsbEN1cnJlbnRDdXN0b21lckJvb2tpbmdzKGN1c3RvbWVySUQpLmZpbHRlcigoYm9va2luZykgPT4ge1xuICAgIHJldHVybiBib29raW5nLmRhdGUgPD0gY3VycmVudERhdGU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzb3J0UGFzdEJvb2tpbmdzKGN1c3RvbWVySUQpIHtcbiAgcmV0dXJuIGxvYWRBbGxDdXJyZW50Q3VzdG9tZXJCb29raW5ncyhjdXN0b21lcklEKS5maWx0ZXIoKGJvb2tpbmcpID0+IHtcbiAgICByZXR1cm4gYm9va2luZy5kYXRlID4gY3VycmVudERhdGU7XG4gIH0pO1xufVxuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+IERPTSB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuZnVuY3Rpb24gdG9nZ2xlVXNlckxvZ2luKCkge1xuICBsZXQgbG9naW5CdXR0b25NZXNzYWdlVXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIubG9naW4tYnV0dG9uLW1lc3NhZ2UtdXNlclwiXG4gICk7XG4gIGxvZ2luQnV0dG9uTWVzc2FnZVVzZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgbGV0IGxvZ2luQnV0dG9uTWVzc2FnZU1hbmFnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmxvZ2luLWJ1dHRvbi1tZXNzYWdlLW1hbmFnZXJcIlxuICApO1xuICBsb2dpbkJ1dHRvbk1lc3NhZ2VNYW5hZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIGN1c3RvbWVyTG9naW5WaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIG1hbmFnZXJMb2dpblZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUxvZ2luRXJyb3JNZXNzYWdlKGJ1dHRvbkxvY2F0aW9uKSB7XG4gIGJ1dHRvbkxvY2F0aW9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICBcImFmdGVyZW5kXCIsXG4gICAgYDxicj48cCBjbGFzcz1cImVycm9yXCIgaWQ9XCJsb2dpbi1lcnJvci1tZXNzYWdlXCI+VGhlIHVzZXJuYW1lIG9yIHBhc3N3b3JkIHlvdSBlbnRlcmVkIGlzIGluY29ycmVjdC4gUGxlYXNlIHRyeSBhZ2Fpbi48L3A+YFxuICApO1xuICBzZXRUaW1lb3V0KCgpID0+IHJlbW92ZUVycm9yTWVzc2FnZSgpLCAzMDAwKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JNZXNzYWdlKCkge1xuICBsZXQgbG9naW5FcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ2luLWVycm9yLW1lc3NhZ2VcIik7XG4gIGxvZ2luRXJyb3JNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lclZpZXcobG9jYXRpb24xLCBsb2NhdGlvbjIsIGxvY2F0aW9uMykge1xuICBkaXNwbGF5UGFzdEN1c3RvbWVyQm9va2luZ3MobG9jYXRpb24xKTtcbiAgZGlzcGxheVVwY29taW5nQ3VzdG9tZXJCb29raW5ncyhsb2NhdGlvbjIpO1xuICBkaXNwbGF5VG90YWxTcGVudEJ5Q3VzdG9tZXIobG9jYXRpb24zKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTG9naW5QYWdlKHVzZXIpIHtcbiAgaGVhZGluZy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICBob21lcGFnZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB1c2VyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQYXN0Q3VzdG9tZXJCb29raW5ncyhsb2NhdGlvbikge1xuICBjb25zdCBkYXRlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7bG9jYXRpb259YCk7XG4gIGN1cnJlbnRDdXN0b21lci5wcmV2aW91c0Jvb2tpbmdzLmZvckVhY2goKGJvb2tpbmcpID0+IHtcbiAgICBsZXQgZGF0ZUJvb2tlZCA9IGA8cD4ke2Jvb2tpbmcuZGF0ZX08L3A+YDtcbiAgICBkYXRlU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgZGF0ZUJvb2tlZCk7XG4gIH0pO1xuXG4gIGN1cnJlbnRDdXN0b21lci5wcmV2aW91c0Jvb2tpbmdzLmZvckVhY2goKGJvb2tpbmcpID0+IHtcbiAgICBjb25zdCBwcmV2aW91c1N0YXkgPSBhbGxSb29tcy5yb29tRGF0YS5maW5kKChyb29tKSA9PiB7XG4gICAgICByZXR1cm4gcm9vbS5udW1iZXIgPT09IGJvb2tpbmcucm9vbU51bWJlcjtcbiAgICB9KTtcbiAgICBjb25zdCByb29tTnVtYmVyID0gcHJldmlvdXNTdGF5Lm51bWJlcjtcbiAgICBjb25zdCByb29tVHlwZSA9IHByZXZpb3VzU3RheS5yb29tVHlwZTtcbiAgICBjb25zdCBiZWRTaXplID0gcHJldmlvdXNTdGF5LmJlZFNpemU7XG4gICAgY29uc3QgYmVkUXVhbnRpdHkgPSBwcmV2aW91c1N0YXkubnVtQmVkcztcbiAgICBjb25zdCByb29tQ29zdCA9IHByZXZpb3VzU3RheS5jb3N0UGVyTmlnaHQ7XG4gICAgY29uc3QgYmlkZXRCb29sZWFuID0gcHJldmlvdXNTdGF5LmJpZGV0ID8gXCJJbmNsdWRlZFwiIDogXCJOb3QgSW5jbHVkZWRcIjtcblxuICAgIGNvbnN0IHJvb21OdW1iZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXN0LXJvb20tbnVtYmVyXCIpO1xuICAgIGNvbnN0IHJvb21UeXBlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFzdC1yb29tLXR5cGVcIik7XG4gICAgY29uc3QgYmVkU2l6ZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3QtYmVkLXNpemVcIik7XG4gICAgY29uc3QgYmVkQ291bnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXN0LWJlZC1jb3VudFwiKTtcbiAgICBjb25zdCByb29tQ29zdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3QtY29zdC1wZXItbmlnaHRcIik7XG4gICAgY29uc3QgYmlkZXRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXN0LWJpZGV0XCIpO1xuXG4gICAgcm9vbU51bWJlclNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6bm9uZTtcIj4ke3Jvb21OdW1iZXJ9PC9saT5gXG4gICAgKTtcbiAgICByb29tVHlwZVNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6bm9uZTtcIj4ke3Jvb21UeXBlfTwvbGk+YFxuICAgICk7XG4gICAgYmVkU2l6ZVNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6bm9uZTtcIj4ke2JlZFNpemV9PC9saT5gXG4gICAgKTtcbiAgICBiZWRDb3VudFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6bm9uZTtcIj4ke2JlZFF1YW50aXR5fTwvbGk+YFxuICAgICk7XG4gICAgcm9vbUNvc3RTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICBgPGxpIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOm5vbmU7XCI+JCR7cm9vbUNvc3R9PC9saT5gXG4gICAgKTtcbiAgICBiaWRldFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6bm9uZTtcIj4ke2JpZGV0Qm9vbGVhbn08L2xpPmBcbiAgICApO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGRpc3BsYXlVcGNvbWluZ0N1c3RvbWVyQm9va2luZ3MobG9jYXRpb24pIHtcbiAgY29uc3QgZGF0ZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2xvY2F0aW9ufWApO1xuICBjdXJyZW50Q3VzdG9tZXIuZnV0dXJlQm9va2luZ3MuZm9yRWFjaCgoYm9va2luZykgPT4ge1xuICAgIGxldCBkYXRlQm9va2VkID0gYDxwPiR7Ym9va2luZy5kYXRlfTwvcD5gO1xuICAgIGRhdGVTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBkYXRlQm9va2VkKTtcbiAgfSk7XG5cbiAgY3VycmVudEN1c3RvbWVyLmZ1dHVyZUJvb2tpbmdzLmZvckVhY2goKGJvb2tpbmcpID0+IHtcbiAgICBjb25zdCB1cGNvbWluZ1N0YXkgPSBhbGxSb29tcy5yb29tRGF0YS5maW5kKChyb29tKSA9PiB7XG4gICAgICByZXR1cm4gcm9vbS5udW1iZXIgPT09IGJvb2tpbmcucm9vbU51bWJlcjtcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgdXBjb21pbmdTdGF5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgdXBjb21pbmdTdGF5IH0pO1xuICAgICAgY29uc3Qgcm9vbU51bWJlciA9IHVwY29taW5nU3RheS5udW1iZXI7XG4gICAgICBjb25zdCByb29tVHlwZSA9IHVwY29taW5nU3RheS5yb29tVHlwZTtcbiAgICAgIGNvbnN0IGJlZFNpemUgPSB1cGNvbWluZ1N0YXkuYmVkU2l6ZTtcbiAgICAgIGNvbnN0IGJlZFF1YW50aXR5ID0gdXBjb21pbmdTdGF5Lm51bUJlZHM7XG4gICAgICBjb25zdCByb29tQ29zdCA9IHVwY29taW5nU3RheS5jb3N0UGVyTmlnaHQ7XG4gICAgICBjb25zdCBiaWRldEJvb2xlYW4gPSB1cGNvbWluZ1N0YXkuYmlkZXQgPyBcIkluY2x1ZGVkXCIgOiBcIk5vdCBJbmNsdWRlZFwiO1xuXG4gICAgICBjb25zdCByb29tTnVtYmVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnV0dXJlLXJvb20tbnVtYmVyXCIpO1xuICAgICAgY29uc3Qgcm9vbVR5cGVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmdXR1cmUtcm9vbS10eXBlXCIpO1xuICAgICAgY29uc3QgYmVkU2l6ZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Z1dHVyZS1iZWQtc2l6ZVwiKTtcbiAgICAgIGNvbnN0IGJlZENvdW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnV0dXJlLWJlZC1jb3VudFwiKTtcbiAgICAgIGNvbnN0IHJvb21Db3N0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnV0dXJlLWNvc3QtcGVyLW5pZ2h0XCIpO1xuICAgICAgY29uc3QgYmlkZXRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmdXR1cmUtYmlkZXRcIik7XG5cbiAgICAgIHJvb21OdW1iZXJTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7cm9vbU51bWJlcn08L2xpPmBcbiAgICAgICk7XG4gICAgICByb29tVHlwZVNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICBgPGxpIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOm5vbmU7XCI+JHtyb29tVHlwZX08L2xpPmBcbiAgICAgICk7XG4gICAgICBiZWRTaXplU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICAgIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6bm9uZTtcIj4ke2JlZFNpemV9PC9saT5gXG4gICAgICApO1xuICAgICAgYmVkQ291bnRTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7YmVkUXVhbnRpdHl9PC9saT5gXG4gICAgICApO1xuICAgICAgcm9vbUNvc3RTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiQke3Jvb21Db3N0fTwvbGk+YFxuICAgICAgKTtcbiAgICAgIGJpZGV0U2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICAgIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6bm9uZTtcIj4ke2JpZGV0Qm9vbGVhbn08L2xpPmBcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvdGFsU3BlbnRCeUN1c3RvbWVyKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHRvdGFsU3BlbnRCeUN1c3RvbWVyID0gYWxsUm9vbXMucm9vbURhdGEucmVkdWNlKCh0b3RhbFNwZW50LCByb29tKSA9PiB7XG4gICAgY3VycmVudEN1c3RvbWVyLnByZXZpb3VzQm9va2luZ3MuZm9yRWFjaCgoYm9va2luZykgPT4ge1xuICAgICAgaWYgKHJvb20ubnVtYmVyID09PSBib29raW5nLnJvb21OdW1iZXIpIHtcbiAgICAgICAgdG90YWxTcGVudCArPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbFNwZW50KTtcbiAgfSwgMCk7XG5cbiAgY29uc3QgdG90YWxTcGVuZGluZ1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2xvY2F0aW9ufWApO1xuICB0b3RhbFNwZW5kaW5nU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgXCJiZWZvcmVlbmRcIixcbiAgICBgPHAgaWQ9XCJzcGVuZGluZy1tZXNzYWdlXCI+VG90YWwgU3BlbnQgJCR7dG90YWxTcGVudEJ5Q3VzdG9tZXJ9PC9wPmBcbiAgKTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hSb29tRGF0YSgpIHtcbiAgZmV0Y2goXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9yb29tcy9yb29tc1wiKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBsb2FkQWxsUm9vbURhdGEoZGF0YS5yb29tcykpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xufVxuXG5mdW5jdGlvbiBsb2FkQWxsUm9vbURhdGEoYWxsUm9vbURhdGEpIHtcbiAgY29uc29sZS5sb2coeyBhbGxSb29tRGF0YSB9KTtcbiAgZ2xvYmFsLmFsbFJvb21zID0gbmV3IFJvb20oYWxsUm9vbURhdGEpO1xuICBhbGxSb29tcy5zb3J0Um9vbXNCeVR5cGUoKTtcbn1cblxuZnVuY3Rpb24gc2hvd1VwY29taW5nQm9va2luZ3MoKSB7XG4gIHVwY29taW5nQm9va2luZ3NCdXR0b24uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICBwYXN0Qm9va2luZ3NCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICBmdXR1cmVCb29raW5nc1NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgcHJldmlvdXNCb29raW5nc1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Bhc3RCb29raW5ncygpIHtcbiAgdXBjb21pbmdCb29raW5nc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIHBhc3RCb29raW5nc0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gIGZ1dHVyZUJvb2tpbmdzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBwcmV2aW91c0Jvb2tpbmdzU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hGb3JSb29tcyhzZWxlY3RlZERhdGUsIHNlbGVjdGVkUm9vbVR5cGUpIHtcbiAgY29uc3QgYXZhaWxhYmxlUm9vbXMgPSBhbGxSb29tc1tzZWxlY3RlZFJvb21UeXBlXS5maWx0ZXIoKHJvb20pID0+IHtcbiAgICBsZXQgYm9va2VkUm9vbSA9IGJvb2tpbmdzLmJvb2tpbmdzRGF0YS5maW5kKChib29raW5nKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBib29raW5nLmRhdGUgPT09IHNlbGVjdGVkRGF0ZSAmJiByb29tLm51bWJlciA9PT0gYm9va2luZy5yb29tTnVtYmVyXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBib29rZWRSb29tID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhdmFpbGFibGVSb29tcztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUF2YWlsYWJsZVJvb21zKCkge1xuICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGRhdGVJbnB1dC52YWx1ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIi9cIik7XG4gIGxldCByb29tVHlwZVNlbGVjdGlvbjtcbiAgaWYgKHJvb21GaWx0ZXJEcm9wZG93bi52YWx1ZSA9PT0gXCJhbGwtcm9vbXNcIikge1xuICAgIHJvb21UeXBlU2VsZWN0aW9uID0gXCJyb29tRGF0YVwiO1xuICB9IGVsc2UgaWYgKHJvb21GaWx0ZXJEcm9wZG93bi52YWx1ZSA9PT0gXCJzaW5nbGUtcm9vbVwiKSB7XG4gICAgcm9vbVR5cGVTZWxlY3Rpb24gPSBcInNpbmdsZVJvb21zXCI7XG4gIH0gZWxzZSBpZiAocm9vbUZpbHRlckRyb3Bkb3duLnZhbHVlID09PSBcImp1bmlvci1zdWl0ZVwiKSB7XG4gICAgcm9vbVR5cGVTZWxlY3Rpb24gPSBcImp1bmlvclN1aXRlc1wiO1xuICB9IGVsc2UgaWYgKHJvb21GaWx0ZXJEcm9wZG93bi52YWx1ZSA9PT0gXCJzdWl0ZVwiKSB7XG4gICAgcm9vbVR5cGVTZWxlY3Rpb24gPSBcInN1aXRlc1wiO1xuICB9IGVsc2UgaWYgKHJvb21GaWx0ZXJEcm9wZG93bi52YWx1ZSA9PT0gXCJyZXNpZGVudGlhbC1zdWl0ZVwiKSB7XG4gICAgcm9vbVR5cGVTZWxlY3Rpb24gPSBcInJlc2lkZW50aWFsU3VpdGVzXCI7XG4gIH1cblxuICBjb25zdCBhdmFpbGFibGVCb29raW5nc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2F2YWlsYWJsZS1ib29raW5ncy1zZWN0aW9uXCJcbiAgKTtcbiAgYXZhaWxhYmxlQm9va2luZ3NTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIGJvb2tpbmdCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICBjb25zdCBzZWxlY3RvclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvb20tdG8tc2VsZWN0XCIpO1xuICBjb25zdCByb29tTnVtYmVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVlcmllZC1yb29tLW51bWJlclwiKTtcbiAgY29uc3Qgcm9vbVR5cGVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWVyaWVkLXJvb20tdHlwZVwiKTtcbiAgY29uc3QgYmVkU2l6ZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXJpZWQtYmVkLXNpemVcIik7XG4gIGNvbnN0IGJlZENvdW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVlcmllZC1iZWQtY291bnRcIik7XG4gIGNvbnN0IHJvb21Db3N0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVlcmllZC1jb3N0LXBlci1uaWdodFwiKTtcbiAgY29uc3QgYmlkZXRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWVyaWVkLWJpZGV0XCIpO1xuXG4gIHNlbGVjdG9yU2VjdGlvbi5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJyb29tLXRvLXNlbGVjdFwiPlNlbGVjdDwvcD4nO1xuICByb29tTnVtYmVyU2VjdGlvbi5pbm5lckhUTUwgPSBcIjxwPlJvb20gTnVtYmVyPC9wPlwiO1xuICByb29tVHlwZVNlY3Rpb24uaW5uZXJIVE1MID0gXCI8cD5Sb29tIFR5cGU8L3A+XCI7XG4gIGJlZFNpemVTZWN0aW9uLmlubmVySFRNTCA9IFwiPHA+QmVkIFNpemU8L3A+XCI7XG4gIGJlZENvdW50U2VjdGlvbi5pbm5lckhUTUwgPSBcIjxwPk51bWJlciBPZiBCZWRzPC9wPlwiO1xuICByb29tQ29zdFNlY3Rpb24uaW5uZXJIVE1MID0gXCI8cD5Db3N0IFBlciBOaWdodDwvcD5cIjtcbiAgYmlkZXRTZWN0aW9uLmlubmVySFRNTCA9IFwiPHA+QmlkZXQ/PC9wPlwiO1xuXG4gIGlmIChmb3JtYXR0ZWREYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgIGxldCByZXF1aXJlZERhdGVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXF1aXJlZC1kYXRlLW1lc3NhZ2VcIik7XG4gICAgcmVxdWlyZWREYXRlTWVzc2FnZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVxdWlyZWREYXRlTWVzc2FnZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIH0sIDMwMDApO1xuICB9IGVsc2Uge1xuICAgIHNlYXJjaEZvclJvb21zKGZvcm1hdHRlZERhdGUsIHJvb21UeXBlU2VsZWN0aW9uKS5mb3JFYWNoKFxuICAgICAgKGF2YWlsYWJsZVJvb20pID0+IHtcbiAgICAgICAgY29uc3Qgcm9vbU51bWJlciA9IGF2YWlsYWJsZVJvb20ubnVtYmVyO1xuICAgICAgICBjb25zdCByb29tVHlwZSA9XG4gICAgICAgICAgYXZhaWxhYmxlUm9vbS5yb29tVHlwZSA9PT0gXCJzaW5nbGUgcm9vbVwiXG4gICAgICAgICAgICA/IGF2YWlsYWJsZVJvb20ucm9vbVR5cGUuc2xpY2UoMCwgNylcbiAgICAgICAgICAgIDogYXZhaWxhYmxlUm9vbS5yb29tVHlwZTtcbiAgICAgICAgY29uc3QgYmVkU2l6ZSA9IGF2YWlsYWJsZVJvb20uYmVkU2l6ZTtcbiAgICAgICAgY29uc3QgYmVkUXVhbnRpdHkgPSBhdmFpbGFibGVSb29tLm51bUJlZHM7XG4gICAgICAgIGNvbnN0IHJvb21Db3N0ID0gYXZhaWxhYmxlUm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgICAgIGNvbnN0IGJpZGV0Qm9vbGVhbiA9IGF2YWlsYWJsZVJvb20uYmlkZXQgPyBcIkluY2x1ZGVkXCIgOiBcIk5vdCBJbmNsdWRlZFwiO1xuXG4gICAgICAgIHNlbGVjdG9yU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgICBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwic2VsZWN0b3JcIiBpZD0ke3Jvb21OdW1iZXJ9Pjxicj5gXG4gICAgICAgICk7XG4gICAgICAgIHJvb21OdW1iZXJTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICAgIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6bm9uZTtcIj4ke3Jvb21OdW1iZXJ9PC9saT5gXG4gICAgICAgICk7XG4gICAgICAgIHJvb21UeXBlU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgICBgPGxpIHN0eWxlPVwibGlzdC1zdHlsZS10eXBlOm5vbmU7XCI+JHtyb29tVHlwZX08L2xpPmBcbiAgICAgICAgKTtcbiAgICAgICAgYmVkU2l6ZVNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7YmVkU2l6ZX08L2xpPmBcbiAgICAgICAgKTtcbiAgICAgICAgYmVkQ291bnRTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICAgIGA8bGkgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6bm9uZTtcIj4ke2JlZFF1YW50aXR5fTwvbGk+YFxuICAgICAgICApO1xuICAgICAgICByb29tQ29zdFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiQke3Jvb21Db3N0fTwvbGk+YFxuICAgICAgICApO1xuICAgICAgICBiaWRldFNlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICAgICAgYDxsaSBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTpub25lO1wiPiR7YmlkZXRCb29sZWFufTwvbGk+YFxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQm9va2luZygpIHtcbiAgbGV0IGZvcm1hdHRlZERhdGUgPSBkYXRlSW5wdXQudmFsdWUucmVwbGFjZUFsbChcIi1cIiwgXCIvXCIpO1xuICBsZXQgc2VsZWN0ZWRSb29tcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdG9yXCIpKTtcbiAgaWYgKHR5cGVvZiBjdXJyZW50Q3VzdG9tZXJJZCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGN1cnJlbnRDdXN0b21lcklkID0gY3VycmVudEN1c3RvbWVyLmlkO1xuICB9XG4gIHNlbGVjdGVkUm9vbXMuZm9yRWFjaCgoc2VsZWN0ZWRSb29tKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkUm9vbS5jaGVja2VkKSB7XG4gICAgICBsZXQgcm9vbVRvQm9vayA9IHtcbiAgICAgICAgdXNlcklEOiBjdXJyZW50Q3VzdG9tZXJJZCxcbiAgICAgICAgZGF0ZTogZm9ybWF0dGVkRGF0ZSxcbiAgICAgICAgcm9vbU51bWJlcjogcGFyc2VJbnQoc2VsZWN0ZWRSb29tLmlkKSxcbiAgICAgIH07XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJlbnRDdXN0b21lci5ib29rUm9vbShyb29tVG9Cb29rLCBib29raW5ncy5ib29raW5nc0RhdGEpID09PSBmYWxzZVxuICAgICAgKSB7XG4gICAgICAgIHBvc3RCb29raW5nKHJvb21Ub0Jvb2spO1xuICAgICAgICBsZXQgYm9va1Jvb21TdWNjZXNzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIjYm9vay1yb29tLXN1Y2Nlc3MtbWVzc2FnZVwiXG4gICAgICAgICk7XG4gICAgICAgIGJvb2tSb29tU3VjY2Vzc01lc3NhZ2UuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYm9va1Jvb21TdWNjZXNzTWVzc2FnZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhlIGJvb2tpbmcgYWxyZWFkeSBleGlzdHMsIGNhbnQgcG9zdFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3N0Qm9va2luZyhkYXRhVG9Qb3N0KSB7XG4gIGZldGNoKFxuICAgIFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3NcIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhVG9Qb3N0KSxcbiAgICB9XG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigobWVzc2FnZSkgPT4gY29uc29sZS5sb2coXCJib29raW5nIHdhcyBwb3N0ZWRcIikpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xufVxuXG4vLyB+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+IE1hbmFnZXIgRGFzaGJvYXJkIH5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG5mdW5jdGlvbiBkaXNwbGF5TWFuYWdlclZpZXcoKSB7XG4gIHRvZ2dsZUxvZ2luUGFnZShtYW5hZ2VyUHJvZmlsZVBhZ2UpO1xuICByb29tc0F2YWlsYWJsZVRvZGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIHJldmVudWVUb2RheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICByb29tT2NjdXBpZWRQZXJjZW50YWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIHJvb21zQXZhaWxhYmxlVG9kYXkuaW5uZXJIVE1MID0gYDxwPk51bWJlciBPZiBSb29tcyBBdmFpbGFibGUgVG9kYXk8L3A+PGJyPiR7ZGlzcGxheVJvb21zQXZhaWxhYmxlVG9kYXkoKX1gO1xuICBkaXNwbGF5VG9kYXlzVG90YWxSZXZlbnVlKCk7XG4gIHJvb21PY2N1cGllZFBlcmNlbnRhZ2UuaW5uZXJIVE1MID0gYDxwPlBlcmNlbnRhZ2UgT2YgUm9vbXMgT2NjdXBpZWQgVG9kYXk8L3A+PGJyPiR7ZGlzcGxheVJvb21PY2N1cGllZFBlcmNlbnRhZ2UoKX1gO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Um9vbXNBdmFpbGFibGVUb2RheSgpIHtcbiAgbGV0IGF2YWlsYWJsZVJvb21zID0gYWxsUm9vbXMucm9vbURhdGEuZmlsdGVyKChyb29tKSA9PiB7XG4gICAgbGV0IHJvb21BdmFpbGFibGUgPSB0cnVlO1xuICAgIGJvb2tpbmdzLmJvb2tpbmdzRGF0YS5mb3JFYWNoKChib29raW5nKSA9PiB7XG4gICAgICBpZiAoYm9va2luZy5kYXRlID09PSBjdXJyZW50RGF0ZSAmJiBib29raW5nLnJvb21OdW1iZXIgPT09IHJvb20ubnVtYmVyKSB7XG4gICAgICAgIHJvb21BdmFpbGFibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcm9vbUF2YWlsYWJsZTtcbiAgfSk7XG4gIHJldHVybiBhdmFpbGFibGVSb29tcy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RheXNUb3RhbFJldmVudWUoKSB7XG4gIGxldCB0b2RheXNSZXZlbnVlID0gYm9va2luZ3MuYm9va2luZ3NEYXRhLnJlZHVjZSgodG90YWxSZXZlbnVlLCBib29raW5nKSA9PiB7XG4gICAgYWxsUm9vbXMucm9vbURhdGEuZm9yRWFjaCgocm9vbSkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnREYXRlID09PSBib29raW5nLmRhdGUpIHtcbiAgICAgICAgdG90YWxSZXZlbnVlICs9IHJvb20uY29zdFBlck5pZ2h0O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHRvdGFsUmV2ZW51ZSk7XG4gIH0sIDApO1xuICBjb25zdCB0b2RheXNSZXZlbnVlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmV2ZW51ZS10b2RheVwiKTtcbiAgdG9kYXlzUmV2ZW51ZVNlY3Rpb24uaW5uZXJIVE1MID0gYDxwPlRvZGF5J3MgVG90YWwgUmV2ZW51ZTwvcD48YnI+PGJyPjxwPiQke3RvZGF5c1JldmVudWV9PC9wPmA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlSb29tT2NjdXBpZWRQZXJjZW50YWdlKCkge1xuICBjb25zdCBwZXJjZW50T2ZPY2N1cGllZFJvb21zID1cbiAgICAoZGlzcGxheVJvb21zQXZhaWxhYmxlVG9kYXkoKSAvIGFsbFJvb21zLnJvb21EYXRhLmxlbmd0aCkgKiAxMDA7XG4gIHJldHVybiBgPHA+JHtwZXJjZW50T2ZPY2N1cGllZFJvb21zfSU8L3A+YDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VhcmNoRm9yQ3VzdG9tZXIoKSB7XG4gIGZpbmRDdXN0b21lckJ5TmFtZSgpO1xuICBtYW5hZ2VyU2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xufVxuXG5mdW5jdGlvbiBmaW5kQ3VzdG9tZXJCeU5hbWUoKSB7XG4gIGNvbnN0IGN1c3RvbWVyU2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyLXNlYXJjaC1maWVsZFwiKTtcbiAgY29uc3QgcXVlcmllZEN1c3RvbWVyID0gY3VycmVudE1hbmFnZXIuc2VhcmNoRm9yQ3VzdG9tZXIoXG4gICAgY3VzdG9tZXJTZWFyY2hGaWVsZC52YWx1ZSxcbiAgICB1c2VyUmVwby5jdXN0b21lcnNcbiAgKTtcbiAgaWYgKCFxdWVyaWVkQ3VzdG9tZXIpIHtcbiAgICBsZXQgdW5pZGVudGlmaWVkVXNlck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjdW5pZGVudGlmaWVkLXVzZXItbWVzc2FnZVwiXG4gICAgKTtcbiAgICB1bmlkZW50aWZpZWRVc2VyTWVzc2FnZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdW5pZGVudGlmaWVkVXNlck1lc3NhZ2UuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9LCAzMDAwKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBxdWVyaWVkQ3VzdG9tZXJQYXN0Qm9va2luZ3MgPSBzb3J0UGFzdEJvb2tpbmdzKHF1ZXJpZWRDdXN0b21lci5pZCk7XG4gICAgY29uc3QgcXVlcmllZEN1c3RvbWVyRnV0dXJlQm9va2luZ3MgPSBzb3J0RnV0dXJlQm9va2luZ3MoXG4gICAgICBxdWVyaWVkQ3VzdG9tZXIuaWRcbiAgICApO1xuICAgIGdsb2JhbC5jdXJyZW50Q3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXIoXG4gICAgICBxdWVyaWVkQ3VzdG9tZXIuaWQsXG4gICAgICBxdWVyaWVkQ3VzdG9tZXIubmFtZSxcbiAgICAgIHF1ZXJpZWRDdXN0b21lckZ1dHVyZUJvb2tpbmdzLFxuICAgICAgcXVlcmllZEN1c3RvbWVyUGFzdEJvb2tpbmdzXG4gICAgKTtcblxuICAgIGRpc3BsYXlDdXN0b21lclZpZXcoXG4gICAgICBcIiNwYXN0LWJvb2tpbmdzLWRhdGVcIixcbiAgICAgIFwiI2Z1dHVyZS1ib29raW5ncy1kYXRlXCIsXG4gICAgICBcIiN0b3RhbC1zcGVudFwiXG4gICAgKTtcbiAgICBjb25zdCB1cGNvbWluZ0Jvb2tpbmdzVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjdXBjb21pbmctYm9va2luZ3MtdGl0bGVcIlxuICAgICk7XG4gICAgY29uc3QgcHJldmlvdXNCb29raW5nc1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI3ByZXZpb3VzLWJvb2tpbmdzLXRpdGxlXCJcbiAgICApO1xuICAgIHVwY29taW5nQm9va2luZ3NUaXRsZS5pbm5lclRleHQgPSBgVXBjb21pbmcgQm9va2luZ3MgRm9yICR7Y3VycmVudEN1c3RvbWVyLm5hbWV9YDtcbiAgICBwcmV2aW91c0Jvb2tpbmdzVGl0bGUuaW5uZXJUZXh0ID0gYFByZXZpb3VzIEJvb2tpbmdzIEZvciAke2N1cnJlbnRDdXN0b21lci5uYW1lfWA7XG4gICAgdXNlclByb2ZpbGVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgbWFuYWdlclNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDdXN0b21lckxvZ291dCgpIHtcbiAgbG9nb3V0KHVzZXJQcm9maWxlUGFnZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1hbmFnZXJMb2dvdXQoKSB7XG4gIGN1c3RvbWVyTG9nb3V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHVzZXJQcm9maWxlUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBsb2dvdXQobWFuYWdlclByb2ZpbGVQYWdlKTtcbn1cblxuZnVuY3Rpb24gbG9nb3V0KHVzZXIpIHtcbiAgdG9nZ2xlTG9naW5QYWdlKHVzZXIpO1xuICAvL21hbmFnZXJQcm9maWxlUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICBsZXQgc3BlbmRpbmdNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGVuZGluZy1tZXNzYWdlXCIpO1xuICBpZiAodHlwZW9mIHNwZW5kaW5nTWVzc2FnZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChzcGVuZGluZ01lc3NhZ2UgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgc3BlbmRpbmdNZXNzYWdlLnJlbW92ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUJvb2tpbmdGcm9tQXBpKGlkKSB7XG4gIGZldGNoKFxuICAgIFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3NcIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQgfSksXG4gICAgfVxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXG4gICAgLy8udGhlbihtZXNzYWdlID0+IGNvbnNvbGUubG9nKCdib29raW5nIHdhcyBwb3N0ZWQnKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUJvb2tpbmcoKSB7XG4gIGNvbnN0IHJvb21OdW1iZXJUb0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vbS1udW1iZXItdG8tZGVsZXRlXCIpO1xuICBjb25zdCBkYXRlVG9EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtdG8tZGVsZXRlXCIpO1xuICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGRhdGVUb0RlbGV0ZS52YWx1ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIi9cIik7XG4gIGNvbnN0IGJvb2tpbmdUb0RlbGV0ZSA9IGJvb2tpbmdzLmJvb2tpbmdzRGF0YS5maW5kKChib29raW5nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGJvb2tpbmcuZGF0ZSA9PT0gZm9ybWF0dGVkRGF0ZSAmJlxuICAgICAgYm9va2luZy5yb29tTnVtYmVyID09IHJvb21OdW1iZXJUb0RlbGV0ZS52YWx1ZVxuICAgICk7XG4gIH0pO1xuICBjdXJyZW50TWFuYWdlci5kZWxldGVCb29rZWRSb29tKGN1cnJlbnRDdXN0b21lciwgZm9ybWF0dGVkRGF0ZSk7XG4gIC8vZGVsZXRlQm9va2luZ0Zyb21BcGkoYm9va2luZ1RvRGVsZXRlLmlkKTtcbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciB1cmxFc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvbWFuLXdhdGNoaW5nLXN1bnNldC1ncmFuZC1jYW55b24uanBnXCIpKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgVGltZXMsIHNlcmlmOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7IH1cXG5cXG50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuaDEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0OEE4MTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbiAgcGFkZGluZzogMWVtOyB9XFxuXFxuaDIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMGVtO1xcbiAgaGVpZ2h0OiAyZW07IH1cXG5cXG4uaG9tZXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuI3RvZ2dsZS12aWV3LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDV2aDsgfVxcblxcbi5pbnB1dHMge1xcbiAgZm9udC1zaXplOiAyZW07IH1cXG5cXG4uY3VzdG9tZXItbG9naW4sIC5tYW5hZ2VyLWxvZ2luIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ4QTgxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7IH1cXG5cXG4jd2VsY29tZS1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogM2VtOyB9XFxuXFxuLmxvZ2luIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHdpZHRoOiAxNXZoO1xcbiAgaGVpZ2h0OiAzdmg7IH1cXG5cXG4udGFiIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsgfVxcblxcbi51c2VyLXByb2ZpbGUtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5zaWRlLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ4QTgxO1xcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiA1ZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBoZWlnaHQ6IDIwMHZoO1xcbiAgd2lkdGg6IDJlbTsgfVxcblxcbi5zaWRlYmFyLXByb2ZpbGUtcGljIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcblxcbi51c2VyLWNhcmQge1xcbiAgbWFyZ2luLXRvcDogNmVtO1xcbiAgd2lkdGg6IDUwZW07XFxuICBoZWlnaHQ6IDU1dmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuI3Bhc3QtYm9va2luZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxZW07IH1cXG5cXG4jdXBjb21pbmctYm9va2luZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxZW07IH1cXG5cXG4ucGFzdC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5mdXR1cmUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG51bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbiN1cGNvbWluZy1ib29raW5ncy1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDE1ZW07XFxuICBoZWlnaHQ6IDRlbTsgfVxcblxcbiNwYXN0LWJvb2tpbmdzLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTVlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCBibGFjazsgfVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgbWFyZ2luOiAzLjV2aDsgfVxcblxcbi5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjMGMwOyB9XFxuXFxuLm1pZGRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5ib29rLXJvb20ge1xcbiAgbWFyZ2luLXRvcDogM2VtOyB9XFxuXFxuI2Jvb2tpbmctYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG4gIHdpZHRoOiAyMGVtO1xcbiAgaGVpZ2h0OiAzZW07IH1cXG5cXG4uZXJyb3Ige1xcbiAgY29sb3I6IHJlZDsgfVxcblxcbi5tYW5hZ2VyLXByb2ZpbGUtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5tYW5hZ2VyLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcnI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMTVlbTtcXG4gIGhlaWdodDogMTV2aDsgfVxcblxcbi5taWRkbGUtbWFuYWdlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNTBlbTsgfVxcblxcbi5zdHlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XFxuXFxuI3NlYXJjaC1jdXN0b21lci1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDVlbTsgfVxcblxcbiNsb2dvdXQtYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IC41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCwgbmVlZFF1b3Rlcykge1xuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==