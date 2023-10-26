
const chai = require('chai');
const assert = chai.assert;

describe('Mathematical Operations - Test Suite', function(){

    // before('Executed BEFORE all test', function(){
    //     console.log('Executed BEFORE all test');
    // });

    // after('Executed AFTER all test', function(){
    //     console.log('Executed AFTER all test');
    // });

    // beforeEach('Executed BEFORE Each test', function(){
    //     console.log('Executed BEFORE Each test');
    // });

    // afterEach('Executed AFTER Each test', function(){
    //     console.log('Executed AFTER Each test');
    // });

    it('Addition of two numbers', async function(){

        let a = 10;
        let b = 10;

        c = a + b;

        assert.equal(c, 20);
        
    });

    it('Subtraction of two numbers', function(){
        let a = 10;
        let b = 10;

        c = a - b;

        assert.equal(c, 0);

    });

    it('Multiplication of two numbers', function(){

        let a = 10;
        let b = 10;

        c = a * b;

        assert.equal(c, 100);

    });

    it('Division of two numbers', function(){

        let a = 10;
        let b = 10;

        c = a / b;

        assert.equal(c, 1);

    });

    it('Remove Callback to pending function');

});