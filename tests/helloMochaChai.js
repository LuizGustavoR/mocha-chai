
const chai = require('chai');
const should = chai.should();

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

        c.should.equal(20);
        
    });

    it('Subtraction of two numbers', function(){
        let a = 10;
        let b = 10;

        c = a - b;

        c.should.equal(0);

    });

    it('Multiplication of two numbers', function(){

        let a = 10;
        let b = 10;

        c = a * b;

        c.should.equal(100);

    });

    it('Division of two numbers', function(){

        let a = 10;
        let b = 10;

        c = a / b;

        c.should.equal(1);

    });

    it('Remove Callback to pending function');

});