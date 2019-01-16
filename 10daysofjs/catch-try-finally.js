/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  let toReturn = s;
  try {
    toReturn = s.split('').reverse().join('');
  } catch(e) {
    console.log(e.message);
  } finally {
    console.log(toReturn);;
  }
}


reverseString("1234");