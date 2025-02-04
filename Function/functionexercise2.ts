function isLeapyear(year: number): boolean {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  return false;
}
//arrow function
const isLeapYear1 = (year: number): boolean => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  return false;
};
//refactored arrow function
const isLeapYear2 = (year: number): number => {
  return year % 4 === 0 && year % 100 !== 0 ? 1 : 0;
};
