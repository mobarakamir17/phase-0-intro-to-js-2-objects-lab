let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update employee object with a new key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  // Function to destructively update employee object with a new key-value pair
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key-value pair from employee object and return a new object
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to destructively delete a key-value pair from employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
console.log(updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe")); // { name: "Jane Doe", streetAddress: "123 Main St" }
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Jane Doe")); // { name: "Jane Doe", streetAddress: "123 Main St" }
console.log(deleteFromEmployeeByKey(employee, "name")); // { streetAddress: "123 Main St" }
console.log(destructivelyDeleteFromEmployeeByKey(employee, "name")); // { streetAddress: "123 Main St" }