import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';


const PER_PAGE = 20;
const EmployeeList = (props) => {
// prop.employees => an array of employee objects
  return (
    <div>
      <div className='employee-list'>
        {props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee} />)}
      </div>
      <button onClick={() => Meteor.subscribe('employees', 40) }
        className='btn btn-primary'>
        Load More...
      </button>
    </div>
  );
};

// export the EmployeeList wrapped in a container
export default createContainer(() => {
  // setup subscription
  Meteor.subscribe('employees', PER_PAGE);

  // return object which will be sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() };

}, EmployeeList);
