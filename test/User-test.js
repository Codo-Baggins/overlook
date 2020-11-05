import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';

let currentUser;
let id;
let name;
let previousBookings;
let futureBookings;

describe('UserRepo', function() {
  beforeEach(() => {
    id = 5;
    name = 'Bob';
    previousBookings = [{}, {}];
    futureBookings = [{}, {}, {}];
    currentUser = new User(id, name, previousBookings, futureBookings);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should instantiate the User class', () => {
    expect(currentUser).to.be.an.instanceOf(User);
  });

  it('should have an id', () => {
    expect(currentUser.id).to.equal(5);
  });

  it('should have name', () => {
    expect(currentUser.name).to.equal('Bob');
  });

  it('should have previous bookings', () => {
    expect(currentUser.previousBookings).to.deep.equal([{}, {}]);
  });

  it('should have future bookings', () => {
    expect(currentUser.futureBookings).to.deep.equal([{}, {}, {}]);
  });

  it('should be able to book a room', () => {
    currentUser.bookRoom({})
    expect(currentUser.futureBookings).to.deep.equal([{}, {}, {}, {}])
  });
})