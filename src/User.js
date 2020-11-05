class User {
  constructor(id, name, previousBookings, futureBookings) {
    this.id = id;
    this.name = name;
    this.previousBookings = previousBookings || [];
    this.futureBookings = futureBookings || [];
  }

  bookRoom(room) {
    this.futureBookings.push(room);
  }
}

export default User;