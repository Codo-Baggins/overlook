class User {
  constructor(id, name, previousBookings, futureBookings) {
    this.id = id;
    this.name = name;
    this.previousBookings = previousBookings || [];
    this.futureBookings = futureBookings || [];
  }

  bookRoom(potentialBooking) {
    let alreadyBooked = false;
    this.futureBookings.forEach(booking => {
      if (booking.roomNumber === potentialBooking.roomNumber && booking.date === potentialBooking.date) {
        alreadyBooked = true;
      } 
    });
    if (alreadyBooked === true) {
      console.log("Your room has already been booked");
    } else {
      this.futureBookings.push(potentialBooking);
    }
  }
}

export default User;