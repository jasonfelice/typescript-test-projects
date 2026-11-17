 // Define a function type that takes a string argument and returns void
type PrintType = (a: string) => void;


 // Implement a function that matches the PrintType signature
function logMessage(message: string): void {
  console.log(message);
}


// Implement a function that takes a PrintType function as an argument and calls it with a string
function printMessage(print: PrintType): void {
  print("Hello, World!");
}


// Call the printMessage function with logMessage as the argument, which will log "Hello, World!" to the console
printMessage(logMessage);