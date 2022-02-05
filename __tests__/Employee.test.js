const Employee = require('../lib/Employee');


test('create employee', () =>{
    const employee = new Employee ();
    
    expect(typeof(employee)).toBe("object");
});

test('Checking employee name', () =>{
    const employee = new Employee ('Chris');
    
    expect(employee.name).toBe('Chris');
});

test('Checking Employee ID', () =>{
    const employee = new Employee ("Chris",123);
    
    expect(employee.id).toBe(123);
})

test('Checking Email', () =>{
    const employee = new Employee ("Chris",123, "chris@gmail.com");
    
    expect(employee.email).toBe("chris@gmail.com");
})
