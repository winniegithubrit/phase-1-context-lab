/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord);
  }
function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}
function createTimeInEvent(dateStamp) {
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(dateStamp.split(" ")[1]),
      date: dateStamp.split(" ")[0],
    });
    return this;
  }
  
  function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(dateStamp.split(" ")[1]),
      date: dateStamp.split(" ")[0],
    });
  
    return this;
  }
  function hoursWorkedOnDate(date) {
    let employeeInTime = this.timeInEvents.find(function (event) {
      return event.date === date;
    });
  
    let employeeOutTime = this.timeOutEvents.find(function (event) {
      return event.date === date;
    });
  
    return (
      (employeeOutTime.hour - employeeInTime.hour) / 100
    );
  }
  function wagesEarnedOnDate(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date);
    let wages = hoursWorked * this.payPerHour;
    return parseFloat(wages.toString());
  }
  
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((employee) => {
      return employee.firstName === firstName;
    });
  }
  
  function calculatePayroll(arrayOfEmployees) {
    return arrayOfEmployees.reduce((acc, record) => {
      return acc + allWagesFor.call(record);
    }, 0);
  }
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

