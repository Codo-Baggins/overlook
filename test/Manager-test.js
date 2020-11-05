import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';
import Manager from '../src/Manager';
import UserRepo from '../src/User-Repo';
import Customer from '../src/Customer';
// let currentUser;
// let id;
// let name;
// let previousBookings;
// let futureBookings;
let user1;
let user2;
let userData;
let allCustomers;
let currentManager;
let currentCustomer;
let futureBookings;

describe('Manager', () => {
  beforeEach(() => {
    futureBookings = [
      {id:"5fwrgu4i7k55hl6t8", userID:1, date:"2020/12/15", roomNumber: 12, roomServiceCharges:[]},
      {id:"5fwrgu4i7k55hl6t9", userID:1, date:"2021/02/05", roomNumber: 15, roomServiceCharges:[]},
      {id:"5fwrgu4i7k55hl6t7", userID:1, date:"2021/09/05", roomNumber: 33, roomServiceCharges:[]}
    ];
    user1 = {id: 1, name: 'Bob Gu'};
    user2 = {id: 2, name: 'Will Mitchell'};
    userData = [user1, user2];
    currentCustomer = new Customer(1, "Bob Gu", [], futureBookings);
    allCustomers = new UserRepo(userData);
    currentManager = new Manager(user1);
  });

  it('should be a function', () => {
    expect(Manager).to.be.a('function');
  });

  it('should instantiate the Manager class', () => {
    expect(currentManager).to.be.an.instanceOf(Manager);
  });

  it('should have a username', () => {
    expect(currentManager.username).to.equal('manager');
  });

  it('should have a password', () => {
    expect(currentManager.password).to.equal('overlook2020');
  });

  it('should be able to search for a customer', () => {
    expect(currentManager.searchForCustomer('Bob Gu', userData)).to.deep.equal(user1);
  });

  it('should be able to delete a booked room for a customer', () => {
    currentManager.deleteBookedRoom(currentCustomer, "2021/09/05")
    expect(currentCustomer.futureBookings).to.deep.equal([
      {id:"5fwrgu4i7k55hl6t8", userID:1, date:"2020/12/15", roomNumber: 12, roomServiceCharges:[]},
      {id:"5fwrgu4i7k55hl6t9", userID:1, date:"2021/02/05", roomNumber: 15, roomServiceCharges:[]}
    ]);
  });
});
