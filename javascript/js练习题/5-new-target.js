// function foo(){
//   console.log(new.target);
// }
// foo();
// new foo();

class father{
  constructor(){
    console.log(new.target);
  }
}
console.log(typeof(new father()));