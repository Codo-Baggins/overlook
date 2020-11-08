import chai from 'chai';
const expect = chai.expect;
import Bookings from '../src/Bookings';

let room1, room2, room3;
let allBookings;
let bookings;

describe('Bookings', () => {
  beforeEach(() => {
    allBookings = [room1, room2, room3];
    bookings = new Bookings(allBookings);
  });

  it('should be a function', () => {
    expect(Bookings).to.be.a('function');
  });

  it('should instantiate the UserRepo class', () => {
    expect(bookings).to.be.an.instanceOf(Bookings)
  });

  it('should be able to take an array of customers', () => {
    expect(bookings.bookingsData).to.deep.equal([room1, room2, room3])
  });
})