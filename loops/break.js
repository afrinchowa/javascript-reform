// The Break Statement
// The break statement "jumps out" of loops and switches.

// The break statement terminates the execution of a loop or a switch statement.

// Break in Loops
// When break is encountered in a loop, the loop terminates immediately.

// The program control is transfered to the statements following the loop.

// No more loop iterations are executed.

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
