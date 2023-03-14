const name1 = prompt("Enter name 1:");
const name2 = prompt("Enter name 2:");
const name3 = prompt("Enter name 3:");

console.log(`Welcome ${name1}, ${name2}, ${name3}!`);

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
}

// Example usage
const birthYear = 1990;
const age = calculateAge(birthYear);
console.log(age);

function printWelcomeAndAge(name, birthYear) {
  const age = calculateAge(birthYear);
  console.log(`Welcome ${name}, you are ${age}.`);
}

// Example usage
const name1 = "Harry";
const name2 = "Ron";
const name3 = "Hermiony";
const birthYear1 = 1985;
const birthYear2 = 1990;
const birthYear3 = 1995;

printWelcomeAndAge(name1, birthYear1);
printWelcomeAndAge(name2, birthYear2);
printWelcomeAndAge(name3, birthYear3);