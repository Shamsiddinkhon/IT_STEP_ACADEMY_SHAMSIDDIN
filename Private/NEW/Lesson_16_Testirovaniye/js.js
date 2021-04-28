// Variant TDD i BDD

class Fraction {
    
  constructor(numerator, denominator) {
    (this.numerator = numerator),
     (this.denominator = denominator);
  }
  numerator
    denominator
  reduction() {
    // let num = [this.numerator, this.denominator];

    // while (num[0] !== 0 && num[1] !== 0) {
    //   if (num[0] > num[1]) {
    //     num[0] = num[0] % num[1];
    //   } else {
    //     num[1] = num[1] % num[0];
    //   }
    // }

    // let divider = num[0] + num[1];
    // console.log(this.numerator);
    // console.log(this.denominator);

    // this.numerator = this.numerator / divider;
    // this.denominator = this.denominator / divider;
    // console.log(this.numerator);
    // console.log(this.denominator);

    let a = this.numerator
    let b = this.denominator

    while(a != 0 && b != 0) {
        if(a > b)
            a %= b
        else
        b %= a
    }
 


  }
  isInteger() {
     return this.numerator % this.denominator === 0
  }

  static addition(fraction1, fraction2) {}

  static subtraction(fraction1, fraction2) {}

  static multiplication(fraction1, fraction2) {}

  static division(fraction1, fraction2) {}
}

let fraction1 = new Fraction(24, 6);
let fraction2 = new Fraction(24, 6);
console.log(fraction1);
fraction1.reduction();
fraction1.isInteger()
console.log(fraction1);

