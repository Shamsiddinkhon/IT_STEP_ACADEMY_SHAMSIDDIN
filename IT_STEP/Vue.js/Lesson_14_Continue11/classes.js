// class User {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
//   getCart() {}
//   order() {}
// }

// let user1 = new User("Shams", 24);
// class Moderator extends User {
//   constructor(name, age) {
//       super(name, age)
//     this.isModerator = true;
//   }
// }
// let moderator1 = new Moderator("Shams", 24);
// console.log(moderator1);

class FamyliInfo {
  constructor(lastnameOfFamyly, members) {
    this.lastnameOfFamyly = lastnameOfFamyly;
    this.members = members;
  }
}
class GrandMom extends FamyliInfo {
  constructor(lastnameOfFamyly, members, gmomname, gmomlastname, gmomage) {
    super(lastnameOfFamyly, members);
    this.gmomname = gmomname;
    this.gmomlastname = gmomlastname;
    this.gmomage = gmomage;
  }
}
class Father extends GrandMom {
  constructor(
    lastnameOfFamyly,
    members,
    gmomname,
    gmomlastname,
    gmomage,
    fname,
    flastname,
    fage
  ) {
    super(lastnameOfFamyly, members, gmomname, gmomlastname, gmomage);
    this.fname = fname;
    this.flastname = flastname;
    this.fage = fage;
  }
}
class Mother extends Father {
  constructor(
    lastnameOfFamyly,
    members,
    gmomname,
    gmomlastname,
    gmomage,
    fname,
    flastname,
    fage,
    mname,
    mlastname,
    mage
  ) {
    super(
      lastnameOfFamyly,
      members,
      gmomname,
      gmomlastname,
      gmomage,
      fname,
      flastname,
      fage
    );
    this.mname = mname;
    this.mlastname = mlastname;
    this.mage = mage;
  }
}
class Children extends Mother {
  constructor(
    lastnameOfFamyly,
    members,
    gmomname,
    gmomlastname,
    gmomage,
    fname,
    flastname,
    fage,
    mname,
    mlastname,
    mage,
    chname,
    chlastname,
    chage
  ) {
    super(
      lastnameOfFamyly,
      members,
      gmomname,
      gmomlastname,
      gmomage,
      fname,
      flastname,
      fage,
      mname,
      mlastname,
      mage
    );
    this.chname = chname;
    this.chlastname = chlastname;
    this.chage = chage;
  }
}
let children = new Children(
  "Famyli",
  4,
  "GrandMom",
  "GrandMom",
  83,
  "Father",
  "Father",
  45,
  "GrandMother",
  "GrandMother",
  49,
  "Child",
  "Child",
  24
);

console.log(children);
