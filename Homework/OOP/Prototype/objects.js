function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  // this.login = () => {
  //   console.log(this.email, "has logged in");
  // };
}

// we can use the prototype to create a method inside an object
User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};

var userOne = new User("ryu@ninja.com", "Ryu");
var userTwo = new User("yoo@gmail.com", "yoo");

console.log(userOne);
userTwo.login();
