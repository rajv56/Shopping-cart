import { faker } from '@faker-js/faker';

// Generate random passenger details
const passenger = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  gender: faker.person.sexType(),
  dateOfBirth: faker.date.birthdate({ min: 18, max: 80, mode: 'age' }),
  email: faker.internet.email(),
  phone: faker.phone.number('##########'), // 10-digit phone
  passportNumber: faker.string.alphanumeric(8).toUpperCase(),
  country: faker.location.country(),
  city: faker.location.city(),
  seatNumber: `A${faker.number.int({ min: 1, max: 30 })}`,
  ticketNumber: faker.string.uuid(),
  bookingDate: faker.date.recent(),
};

console.log(passenger);