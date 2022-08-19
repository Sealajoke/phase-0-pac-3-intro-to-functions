// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }

  sayHello()
  function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  sayHelloToGuadalupe()

  function sayHelloToLiz() {
    console.log("Hello, Liz");
  }

  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }

  sayHelloToGuadalupe();
  sayHelloToLiz();
  sayHelloToSamip();

  function doSomething(nothing) {
    console.log("thing")
  }

  doSomething("seeMe")

  function doSomething(thing) {
    console.log("thingISHere");
  }
  
  doSomething("anything");
  doSomething("keeel")

  function sayHello(firstName) {
    console.log(`Hello, ${firstName}`)
  }

  sayHello("Seun")
  sayHello("Ali")
  sayHello("Ajokeola")
  
  function say(greeting, FirstName) {
    console.log(`${greeting}, ${FirstName}!`)
  }

  say("Goodbye", "Julio")
  say("Julio", "Goodbye")

  function say(greeting, firstName) {
    console.log("First Name:", firstName)
    console.log("Greeting:", greeting)
    console.log(`${greeting}, ${firstName}!`)

  }

  function add(x, y){
    return x + y
  }
  console.log(add(1, 2))

  function add(r, u) {
    return r + u
  }
  console.log(add(3, 7))

  const sum = add(11, 2);
const message = `The sum of your numbers is: ${sum}.`;
console.log(message)

function say(greeting, firstName){
  console.log("I was called")
  return `${greeting}, ${firstName}!`;
 
}

console.log(say("good evening", "Modupe"))
//say("good evening", "Modeupe")

function introduction(name){
  return `Hi, my name is ${name}.`
  
}
console.log(introduction("Aliu"))