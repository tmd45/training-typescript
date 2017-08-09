// TypeScript in 5 minutes
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
function greeter(person) {
    return "Hello, " + person;
}
var user = "Yoko TAMADA";
// typescript-in-5-minutes/greeter.ts(11,35): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
// var user = [0, 1, 2];
document.body.innerHTML = greeter(user);
