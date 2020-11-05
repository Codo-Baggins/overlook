import User from "./User";

class Manager extends User {
  constructor() {
    super();
    this.username = 'manager';
    this.password = 'overlook2020';
  }

  searchForCustomer(searchedCustomer, userRepo) {
    return userRepo.find(user => {
      return searchedCustomer === user.name;
    });
  };
  
  deleteBookedRoom(user, date) {
    user.futureBookings = user.futureBookings.filter(futureBooking => {
      return futureBooking.date !== date;
    });
  };
};

export default Manager;