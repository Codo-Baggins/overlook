import User from "./User";

class Manager extends User {
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

export default Manager;