// Write your solution in this file!
const employee = {
    name: "Yasir Irzooqi",
    streetAddress: "Millet Caddesi"

};

// non-destructive update

function updateEmployeeWithKeyAndValue(employee, key, value) {
   return {
     ...employee,
     [key]: value
   };
 }
 


// destructive update 

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
 {
    employee[key] = value;
    return employee;
 }

 // non-destructive function
 function deleteFromEmployeeByKey(employee, key) {
    
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;

 }

//destructive function

 function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee;
 }
 
 // updates
 
const updatedEmployee = updateEmployeeWithKeyandValue(employee, "position", "Manager");
const copiedEmployee  = {...employee,position: "Manager" }
const destructivelyupdatedEmployee = destructivelyUpdateEmployeeWithKeyandValue(employee, "position", "Manager");