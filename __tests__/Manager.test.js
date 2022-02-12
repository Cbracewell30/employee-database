const Manager = require("../lib/Manager");

test ('Check for Manager Object', () => {
const manager = new Manager ();

expect(typeof(manager)).toBe("object");

}); 

test ('Check for Manager name', () => {
const manager = new Manager ("Chris");

expect(manager.name).toBe("Chris");
});

test ('Check for Manager ID', () => {
    const manager = new Manager ("Chris",12563);

    expect(manager.id).toBe(12563);
});

test ('Check Manager email', () => {
    const manager = new Manager ("Chris",12563,"chrisb@gmail.com");

    expect(manager.email).toBe("chrisb@gmail.com");
});

test ('Check for Manager office', () => {
    const manager = new Manager ("Chris",12563,"chrisb@gmail.com","Developer office");

    expect(manager.office).toBe("Developer office")
});