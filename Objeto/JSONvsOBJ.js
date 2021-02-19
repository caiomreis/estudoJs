const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

console.log(JSON.stringify(obj))

// formas de manipular

console.log(JSON.parse('{"a": 1, "b": 2, "c":3}'))
console.log(JSON.parse('{"a": 1.7, "b": "string", "c":true,"d":{},"e":[]}'))