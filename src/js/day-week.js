export function dayOfWeek(date) {
  if ( date === 0 ) {
    date = "Sunday";
  } else if ( date === 1 ) {
    date = "Monday";
  } else if ( date === 2 ) {
    date = "Tuesday";
  } else if ( date === 3 ) {
    date = "Wednesday";
  } else if ( date === 4 ) {
    date = "Thursday";
  } else if ( date === 5 ) {
    date = "Friday";
  } else {
    date = "Saturday";
  }
  return date;
}
