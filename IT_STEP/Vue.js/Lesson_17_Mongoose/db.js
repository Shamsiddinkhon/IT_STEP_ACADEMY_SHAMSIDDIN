// class Database {
//     constructor() {
//       this._connect();
//     }

//     _connect() {
//       mongoose
//         .connect(`mongodb://${server}/${database}`)
//         .then(() => {
//           console.log("Database connection successful");
//         })
//         .catch((err) => {
//           console.error("Database connection error");
//         });
//     }
//   }

//   module.exports = new Database()

//////////////////////////////////////////////

// let promise = new Promise((resolve, reject) => {
//   //   resolve('The promise is done')
//   reject("The promise is not done");
// });
// promise.then((money) => {
//   console.log(money);
// }),
//   (err) => {
//     console.log(err);
//   };

//////////////////////////////////////////////
// class Username {
//   constructor(username) {
//     this.username = username;
//   }
//   checkUser() {
//     return new Promise((resolve, reject) => {
//         if (this.username == "Shams") resolve(true);
//         else reject(false);
//       });
//   }
// }

// let newUser = new Username("Shams");
// newUser
//   .checkUser()
//   .then((newUser) => {
//     console.log(newUser);
//   })
//   .catch((newUser) => {
//     console.log(newUser);
//   });
/////////////////////////////////////////////////////

// class Person {
//   constructor(name, classOf, sex, isStudent) {
//     this.name = name;
//     this.classOf = classOf;
//     this.sex = sex;
//     this.isStudent = isStudent;
//   }
//   identifySex() {
//     if (this.sex == "male") return "m";
//     else return "f";
//   }
//   identifyJob() {
//     if (this.isStudent) return "Student";
//     else {
//       delete this.classOf;
//       return "Professor";
//     }
//   }
//   identifyClass() {
//     if (this.isStudent) return 4 - (this.classOf - new Date().getFullYear());
//     else return null;
//   }
//   sort() {
//     let sex = this.identifySex();
//     let job = this.identifyJob();
//     let year = this.identifyClass();
//     return new Promise((resolve, reject) => {
//       if (sex === "f" && job === "student" && year == 1)
//         return resolve("1st year student Dorm for girls");
//       if (sex === "f" && job === "student" && year == 2)
//         return resolve("2nd year student Dorm for girls");
//       if (sex === "f" && job === "student" && year == 3)
//         return resolve("3rd year student Dorm for girls");
//       if (sex === "f" && job === "student" && year == 4)
//         return resolve("4th year student Dorm for girls");

//       if (sex === "m" && job === "student" && year == 1)
//         return "1st year student Dorm for boys";
//       if (sex === "m" && job === "student" && year == 2)
//         return "2nd year student Dorm for boys";
//       if (sex === "m" && job === "student" && year == 3)
//         return "3rd year student Dorm for boys";
//       if (sex === "m" && job === "student" && year == 4)
//         return "4th year student Dorm for boys";
//       if (sex === "f" && job === "professor") return "professor";
//       if (sex === "m" && job === "professor") return "professor";
//       if (year > 4 || year < 1) return "UYGA BOR";
//     });
//   }
// }

// let a = new Person("Shamsiddin", 2022, "male", true);
// let b = new Person("Muhriddin", 2023, "male", true);
// let c = new Person("Avaz", 2021, "male", true);
// let d = new Person("Ibrohim", 2024, "male", true);
// let e = new Person("Islom", 2025, "male", true);
// let arr = [a, b, c, d, e];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].sort());
// }

class Person {
  constructor(name, classOf, sex, isStudent) {
    this.name = name;
    this.classOf = classOf;
    this.sex = sex;
    this.isStudent = isStudent;
  }
  identifySex() {
    if (this.sex == "male") return "m";
    else return "f";
  }

  identifyJob() {
    if (this.isStudent) return "student";
    else {
      delete this.classOf;
      return "professor";
    }
  }

  identifyClass() {
    if (this.isStudent) return 4 - (this.classOf - new Date().getFullYear());
    else return null;
  }
  sort() {
    let sex = this.identifySex();
    let job = this.identifyJob();
    let year = this.identifyClass();
    return new Promise((resolve, reject) => {
      if (sex === "f" && job === "student" && year == 1)
        return resolve("1st year student Dorm for girls");
      if (sex === "f" && job === "student" && year == 2)
        return resolve("2nd year student Dorm for girls");
      if (sex === "f" && job === "student" && year == 3)
        return resolve("3rd year student Dorm for girls");
      if (sex === "f" && job === "student" && year == 4)
        return resolve("4th year student Dorm for girls");

      if (sex === "m" && job === "student" && year == 1)
        return resolve("1st year student Dorm for boys");
      if (sex === "m" && job === "student" && year == 2)
        return resolve("2nd year student Dorm for boys");
      if (sex === "m" && job === "student" && year == 3)
        return resolve("3rd year student Dorm for boys");
      if (sex === "m" && job === "student" && year == 4)
        return resolve("4th year student Dorm for boys");

      if (sex === "f" && job === "professor") return reject("professor");
      if (sex === "m" && job === "professor") return reject("professor");
      if (year > 4 || year < 1)
        return reject("It is not e student and professor");
    });
  }
}
let a = new Person("Shamsiddin", 2022, "male", true);
let b = new Person("Muhriddin", 2023, "male", true);
let c = new Person("Avaz", 2021, "male", true);
let d = new Person("Ibrohim", 2024, "male", true);
let e = new Person("Islom", 2025, "male", true);

let arr = [a, b, c, d, e];

for (let i = 0; i < arr.length; i++) {
  console.log(
    arr[i]
      .sort()
      .then((check) => {
        console.log(check);
      })
      .catch((check) => {
        console.log(check);
      })
  );
}
