const employee = {}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...employee}
    newEmployee[key] = undefined;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    employee[key] = undefined;
    return employee;
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
}
