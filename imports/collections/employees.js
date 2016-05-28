// Declare collection

// Import mongoDB
import { Mongo } from 'meteor/mongo';

// export collection without using default (we want to export more
// than one collection)
export const Employees = new Mongo.Collection('employees');
// use faker and lodash to generate fake data
// fake data is stored in server (much faster)
