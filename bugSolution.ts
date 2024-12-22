function printName(name = "Anonymous"): void {
  console.log(name);
}

printName(); // Prints "Anonymous"
printName(undefined); // Prints "Anonymous"

//Alternative solution with input validation
function printNameWithValidation(name?: string): void {
  const nameToPrint = name === undefined ? "Anonymous" : name;
  console.log(nameToPrint);
}

printNameWithValidation(); //Prints "Anonymous"
printNameWithValidation(undefined); //Prints "Anonymous"
printNameWithValidation("John Doe"); //Prints "John Doe"