import UserRepo from './User-Repo';
import User from './User';

class Customer extends User {
  constructor(id, name, previousBookings, futureBookings) {
    super(id, name, previousBookings, futureBookings);
  }
}

export default Customer;