const { add, subtract, multiply, divide, clearAllfields} = require("./calculator");


//Testing Addition

describe("valid additions", () => {
    //Testing adding one digit numbers
    test("1 + 1 = 2", () => {
      expect(add(1, 1)).toEqual(2);
    });
  
    //Testing adding two digit numbers
    test("10 + 20 = 30", () => {
      expect(add(10, 20)).toEqual(30);
    });

    //Testing adding one positive and one negative number
    test("-2 + 1 = -1", () => {
        expect(add(-2, 1)).toEqual(-1);
      });
  });


  //Testing Subtraction

  describe("valid subtraction", () => {
    //Testing subtracting two numbers
    test("5 - 1 = 4", () => {
      expect(subtract(5, 1)).toEqual(4);
    });
  
    //Testing subtracting smaller number from a bigger number
    test("10 - 20 = -10", () => {
      expect(subtract(10, 20)).toEqual(-10);
    });
  });



  //Testing Multiplication

  describe("valid Multiplication", () => {
      //Testing multiplying two number
      test("2 * 4 = 8", () =>{
          expect(multiply(2, 4)).toEqual(8);
      });

      //Testing multiplying one negative and one positive number
      test("-10 * 4 = -40", () =>{
        expect(multiply(-10, 4)).toEqual(-40);
    });

    //Testing multiplying two negative numbers
    test("-11 * -12 = 132", () =>{
        expect(multiply(-11, -12)).toEqual(132);
    });
  });



//Testing Division

describe("valid Division", () => {
    //Testing dividing two numbers
    test("72 / 12 = 6", () =>{
        expect(divide(72, 12)).toEqual(6);
    });

    //Testing dividing by Zero gives error message Invalid
    test("9 / 0 = Invalid", () =>{
        let y = 0;
        expect(divide(9, 0)).toBe("Invalid");
    });

});



//Testing Clear All Fields

describe("valid ClearAllFields", () => {
    //Testing clearAllFields when there is a number displayed
    test("256 = 0", () =>{
         expect(clearAllfields(256)).toEqual(0);
    });
    
    //Testing clearAllFields when there is a number and a operator
    test("9999 + = 0", () =>{    
        expect(clearAllfields(9999, "+")).toEqual(0);
    });

});


//Testing Decimals

describe("valid Decimal", () => {
    //Testing adding two float number
    test("0.2 + 0.1 = 0.3", () => {
        expect(add(0.2, 0.1)).toBeCloseTo(0.3, 4);
    });

    //Testing multiplying one integer and one decimal number
    test("5 * 0.5 = 2.5", () => {
        expect(multiply(5, 0.5)).toBeCloseTo(2.5, 4);
    });
});


//Testing Equals/ Calculate

describe("valid Equals", () => {
    //Testing the subtraction calculation
    test("100 - 99.9 = 0.1", () => {
        expect(subtract(100, 99.9)).toBeCloseTo(0.1, 4);
    });

    //Testing the division calculation
    test("8888 / 44 = 202", () =>{
        expect(divide(8888, 44)).toEqual(202);
    });
});