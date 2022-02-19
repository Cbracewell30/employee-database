const Employee = require('../lib/Employee');

// Testing employee creation
test('create employee', () =>{
    const employee = new Employee ();
    
    expect(typeof(employee)).toBe("object");
});

// checking the employee name function
test('Checking employee name', () =>{
    const employee = new Employee ('Chris');
    
    expect(employee.name).toBe('Chris');
});

// cehcking the employee id function
test('Checking Employee ID', () =>{
    const employee = new Employee ("Chris",123);
    
    expect(employee.id).toBe(123);
})

// checking the employee email function
test('Checking Email', () =>{
    const employee = new Employee ("Chris",123,"chris@gmail.com");
    
    expect(employee.email).toBe("chris@gmail.com");
})
