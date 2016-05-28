// Everything in here is only executed on the server

import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { image, helpers } from 'faker';
import { Employees } from '../imports/collections/employees';


Meteor.startup(() => {
  // great place to generate data

  // query the collection for data and store to const
  const numberRecords = Employees.find({}).count();
  console.log(numberRecords);

  // add check to make sure no data exists, if it does, no data
  // should be added
  if (!numberRecords) {
    // Generate some data using lodash and faker
    // the _.times lodash method will run our function 5000 times!
    _.times(5000, () => {
      // the faker helpers.createCard() method will create a
      // profile consisting of a name, email, and phone
      const { name, email, phone } = helpers.createCard();

      // insert generated data into database
      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }

  // set up publication
  Meteor.publish('employees', () => {
    // Limit the employees to 20 for the client
    return Employees.find({}, { limit: 20 });
  });
});
