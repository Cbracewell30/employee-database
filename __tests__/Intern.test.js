const Intern = require('../lib/Intern');

test('Creating Intern object', () => {
const intern = new Intern ();

expect(typeof(intern)).toBe("object");
});

test('Creating Intern Name', () => {

    const intern = new Intern('John');

    expect(intern.name).toBe("John");
});

test('Creating Intern ID ', () => {
const intern = new Intern('John', 2589);

expect(intern.id).toBe(2589);
});

test ('Creating Intern Email', ()=> {
    const intern = new Intern ("John", 4589, "Johns@gmail.com");


    expect(intern.email).toBe("Johns@gmail.com");
});

test ('Adding interns School', () =>{
    const intern = new Intern ("John",4589, "Johns@gmail.com", "Development University" );


expect(intern.school).toBe("Development University");

})

