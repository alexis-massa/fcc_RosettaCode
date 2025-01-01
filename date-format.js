/**
 * Return an array with two date strings of the current date with the following specifications:
 * - The first string's date order should be the year number, month number, and day number separated by dashes (-).
 * - The first string's year should be four digits in length.
 * - The first string's month and day should not contain any leading zeros.
 * - The second string's weekday and month names should not be abbreviated.
 * - The second string's day should not contain any leading zeros.
 *
 * Example outputs:
 * ```
 * ['2007-11-23', 'Friday, November 23, 2007']
 * ['2021-3-2', 'Tuesday, March 2, 2021']
 * ```
 */

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
function getDateFormats() {
  let now = new Date()
  return [
    `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`,
    `${new Intl.DateTimeFormat("en-US", options).format(now)}`
  ];
}

console.log(getDateFormats())
