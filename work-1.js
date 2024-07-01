function a (b) {
  if (typeof(b)==="number") {
    if(Number.isInteger(b)=== true) {
      let result = b + 10;
      return result;
    }
  }
}
console.log (a('조우식'));
console.log("1" + 1);