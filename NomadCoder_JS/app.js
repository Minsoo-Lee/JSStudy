const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
const daysOfWeekString = ["mon", "tue", "wed", "thu", "fri", "sat"];

const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"]

console.log(daysOfWeek, nonsense, daysOfWeekString);

// Get Item from Array
console.log(daysOfWeekString[4]);

// Add one more day to the array
daysOfWeekString.push("sun");
console.log(daysOfWeekString);