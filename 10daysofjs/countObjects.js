/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
const getCount = (objects) => objects
  .filter(o => (o.x >= 1 && o.x <= 100 && o.y >= 1 && o.y <=100))
  .filter(o => o.x === o.y)
  .length;