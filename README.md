# [Overlook](https://codo-baggins.github.io/overlook/)

- Contributors: 
  - Joe Lopez

## Overview

- Overlook is an application that allows travelers to book hotel reservations for themselves. Upon login the application gives users a detailed overview of their spending habits along with previous and upcoming hotel reservations that they have.  Managers can also log into the site and view hotel statistics for any given day.  Managers also have the abiltity to search for users and book/delete hotel reservations for that user.  

## Getting Started 

1. Fork the repo by clicking the "Fork" button in the top right corner of the page
2. Clone down your forked repo to your local machine by using the command `git clone [replace this with the SSH key for your repo]` in your terminal
3. `cd` into the cloned down directory on your local machine 
4. Run `npm start` in your terminal to boot up a server 
5. Copy the localHost url link provided by the terminal and paste it into your browser

## How to Navigate

1. Upon loading the page you will be met with a login screen. There are two ways to login here, as a manager or as a customer.  Let's start out by logging in as a customer.  

2. In the "username" field, type in the word "customer", followed by a number 1-50 (no spaces in between). Then type "overlook2020" into the password field.  Once these fields are filled out, click the "Login" button.  

3. Entering the site you will see a future bookings window. It may be empty for now, as there currently may be no scheduled bookings.  However, we can view all of the past bookings for the customer by clicking the "Past Bookings" button in the top left corner of the page. 

4. Let's go ahead and book a room.  Scroll down to the "Search Rooms" field and select a future date from the date-picker.  Then select a type of room that you wish to stay in.  Once these fields are filled out, you can click the "Search For Rooms" button. 

5. A list of available rooms for your chosen criteria will appear in a window below.  You can choose any room for that date or even multiple if you so choose.  Once you have selected the room you would like to book, click the "Book Room" button.

6. Now, lets login as a manager.  Click the "Logout" button in the top right corner of the page.  The button should bring you back to the homescreen. 

7. Click the "Login As Manager" button in the upper-middle section of the page.  In the "username" field, type "manager" and in the password field type "overlook2020"

8. Upon logging in, you will see a manager dashboard that provides the statistics for that day including total revenue and number of rooms available. 

9. Scroll down to the "Search for customer" field and type in the name of a valid customer (Leatha Ullrich is an example you may use). Click the "Search for Customers" button

10. You will then be provided with all of the user's information just as if you were logged in as a customer.  From there, you can view their upcoming bookings and even delete them!  

11. In the top left corner of the page, select a date and room number in the "Delete booking" form field that corresponds with a user's upcoming room booking.  Click the "remove booking" button and viola! The booking has been removed from their future bookings.  

12. You can logout now and log back in as that user and see that the booking will have been removed from their list of upcoming bookings!


# Future Iterations

- Create the ability to delete bookings from the bookings API
- Make "Logout" less buggy for a Manager
- Change sizing to be dynamic to account for tablets, smartphones, etc. 
- Clean up SASS and JS (very WET and messy)
