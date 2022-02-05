const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Player = require('../lib/Employee');


test('create employee', () =>{
    const employee = new Employee ('Chris');
    
    expect(employee.name).toBe('Chris');
    expect(employee.)
})

