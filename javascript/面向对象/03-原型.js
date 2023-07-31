// function Person(){};
// let friend = new Person();
// Person.prototype = {
//   constructor: Person,
//   say(){
//     console.log(this);
//   }
// }
// friend.say();

class David {
  constructor(){

  }
  static read(){
    console.log('wudiren');
  }
}
class erzi extends David{
  static read(){
    super.read();
  }
}

erzi.read();