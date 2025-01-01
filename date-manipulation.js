/**
 * Given a date string in EST, output the given date as a string with 12 hours added to the time. Time zone should be preserved.
 * Example input: `"March 6 2009 7:30pm EST"`
 * Example output: `"March 7 2009 7:30am EST"`
 */
function add12Hours(dateString) {
  const date = new Date(dateString + ' EST');
  date.setHours(date.getHours() + 12);

  const options = { 
    year: 'numeric', month: 'long', day: 'numeric', 
    hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'EST' 
  };

  const formatted = date.toLocaleString('en-US', options);
  const [monthDayYear, timePeriod] = formatted.split(', ');
  const [year, _x, time, period] = timePeriod.split(' ');

  return `${monthDayYear.replace(',', '')} ${year} ${time}${period.toLowerCase()} EST`;
}

console.log(add12Hours('January 17 2017 11:43am EST'))
