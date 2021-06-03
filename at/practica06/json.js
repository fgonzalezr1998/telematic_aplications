'use strict'

// JSON to JavaScript object:

let obj = JSON.parse('{ "persons": [{"name":"John", "age": 30, "city":"New York", "selected": true}, {"name":"John", "age": 30, "city":"New York", "selected": true}]}');
console.log(obj);

// JavScript object to JSON:

console.log(JSON.stringify(obj));
