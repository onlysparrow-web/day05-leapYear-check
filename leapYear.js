let reminder,
  nextLeapYear,
  checkYear = prompt("Enter the year you want to check", "");
checkYear = parseInt(checkYear);
reminder = checkYear % 4;
if (checkYear % 4 == 0) {
  alert("The given year is a leap year");
} else {
  alert("The given year is not a leapYear");

  nextLeapYear = checkYear - reminder + 4;
  alert("The next closed leapYear is: " + nextLeapyear);
}
