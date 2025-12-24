// Import faker for generating random test data
import { faker } from '@faker-js/faker';

// Generate a random date of birth (DOB)
const dob = faker.date.birthdate({ min: 18, max: 65, mode: 'age' }); // Returns a Date object for age between 18 and 65

// Generate a random 10-digit phone number
const phoneNumber = faker.phone.number('##########'); // 10 digits only

// Generate random calendar data (future date)
const futureDate = faker.date.future(); // Returns a future Date object

// Generate a random event title for calendar
const eventTitle = faker.word.words({ count: 3 }); // 3 random words

// Generate a random address
const address = faker.location.streetAddress();

// Generate a random city
const city = faker.location.city();

// Generate a random country
const country = faker.location.country();

// Generate a random zip code
const zipCode = faker.location.zipCode();

// Generate a random company name
const companyName = faker.company.name();

// Generate a random job title
const jobTitle = faker.person.jobTitle();

// Print all generated data
console.log('Date of Birth:', dob);
console.log('Phone Number:', phoneNumber);
console.log('Future Calendar Date:', futureDate);
console.log('Event Title:', eventTitle);
console.log('Address:', address);
console.log('City:', city);
console.log('Country:', country);
console.log('Zip Code:', zipCode);
console.log('Company Name:', companyName);
console.log('Job Title:', jobTitle);
