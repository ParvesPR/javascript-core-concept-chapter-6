var obj = {
    a: 40,
    b: 50,
    c: 60
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj)); /* Return two dimensional array */

// Create a new object
var obj2 = Object.assign({}, obj)
obj2.a = 80;
console.log(obj);
console.log(obj2);