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

export default User;
