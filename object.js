// Object Literal
var obj = {}; /* Empty object */
obj.a = 10; /* Insert key value */
console.log(obj);

var obj2 = {
    a: 10,
    b: 20,
}
obj2.b = 30; /* Replace value */
obj2.c = 40; /* Insert a new value */
console.log(obj2);

// Object constructor
var obj3 = Object();
obj3.d = 50; /* Insert new value */
console.log(obj3);

var obj4 = new Object();
obj4.e = 60; /* Insert new value */
console.log(obj4);