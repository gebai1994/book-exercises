function allCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(allCaps('Hello, world'))
console.log(allCaps('Ali Gebai'))
console.log(allCaps('Mark Zuckerberg'))