import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';
// import UserRepo from '../src/User-Repo';

let currentUser;
let id;
let 

describe('UserRepo', function() {
  beforeEach(() => {
    currentCustomers = [user1, user2, user3]
    userData = new UserRepo(currentCustomers);
  });

  it('should be a function', function() {
    expect(UserRepo).to.be.a('function');
  });

  it('should instantiate the UserRepo class', () => {
    expect(userData).to.be.an.instanceOf(UserRepo)
  })

  it('should be able to take an array of customers', () => {
    expect(userData.customers).to.deep.equal([user1, user2, user3])
  })
})