let a = {a:123};
// console.log(typeof a.valueOf());
console.log(a.valueOf().toString());

const obj = { 
  getArrow() { 
    console.log(this);
    return () => { 
      console.log(this); 
    }; 
  } 
}
obj.getArrow()();
