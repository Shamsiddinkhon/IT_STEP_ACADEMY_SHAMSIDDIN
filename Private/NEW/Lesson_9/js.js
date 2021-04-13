// class Person { 
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     printPrint() {
//         alert(`Name: ${this.name}`, `Age: ${this.age}`)
//     }
// }

// let jack = new Person("Jack", 22);


// console.log(jack);

// ============== First
class Worker {
    constructor(name, surname,  rate, days) {
            this.name = name,
            this.surname = surname,
            this.rate = rate, 
            this.days = days

    }

    getSalary() {
        return this.days * this.rate
    }

    //=================== Secodn


    getName() {
        return this.name
    }
    getSurname() {
        return this.surname
    }
    getRate() {
        return this.rate
    }
    getDays() {
        return this.days
    }
    
    //=================== Third

    setDays(day) {
            this.days = day 
    }

}
let salary = new Worker ("Jack", "Jobs", 5, 20)

console.log(salary);
salary.getSalary()

//=================== Second
console.log(salary.getName())
console.log(salary.getSurname())
console.log(salary.getRate())
console.log(salary.getDays())
console.log(salary.getSalary())

//=================== Third
salary.setDays(50)


//=================== Four


class MyString {
    reverse(text) {
      let str = [];
      for (let letter of text) {
        str.push(letter);
      }

      for (
        let i = 0, j = str.length - 1;
        Math.floor(i < str.length / 2);
        i++, j--
      ) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
      let strJoin = "";
      for (let letter of str) {
        strJoin += letter;
      }
      return strJoin;
    }
  }
  var strs = new MyString();
  console.log(strs.reverse("Width"));




// let str = "test test2 test3";


// let words = str.split(" ");//[test, test2, test3] -3


// words[i] = words[i][0].toUpperCase() + words[i].slice(1);

// str = words.join(" ")

// console.log(str)

class Validator {
    constructor(email, domain, date, phone) {
        this.email = email
        this.domain = domain
        this.date=date
        this.phone = phone
    }
}

var validator = new Validator('phphtml@mail.ru','phphtml.net', '12.05.2020', '+375 (29) 817-68-92');

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей




