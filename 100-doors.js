/**
 * There are 100 doors in a row that are all initially closed.
 * You make 100 passes by the doors.
 * The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it).
 * The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it.
 * The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.
 */
function getFinalOpenedDoors(numDoors) {
  const result = []
  for (let i = 1; i * i <= numDoors; i++) {
    result.push(i * i)
  }
  return result
}
// Explaination : Only doors numbered by a perfect square will be opened cause they will be toggled an odd number of times
console.log(getFinalOpenedDoors(100))
