const Engineer = require('../lib/Engineer');


test('create Engineer', () =>{
    const engineer = new Engineer ();
    
    expect(typeof(engineer)).toBe("object");
});

test('Checking engineer name', () =>{
    const engineer = new Engineer ('Chris');
    
    expect(engineer.name).toBe('Chris');
});

test('Checking engineer ID', () =>{
    const engineer = new Engineer ("Chris",123);
    
    expect(engineer.id).toBe(123);
});

test('Checking Engineers Email', () =>{
    const engineer = new Engineer ("Chris",123,"chris@gmail.com");
    
    expect(engineer.email).toBe("chris@gmail.com");
});

test ("Checking Engineer's github", () => {
    const engineer = new Engineer("Chris", 12345, "chris@gmial.com","Chrisgithub.com");

    expect(engineer.github).toBe("Chrisgithub.com");
});