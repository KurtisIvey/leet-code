/*

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

LINE EQUATION MUST BE USED
    The line equation being used in the code is the slope-intercept form of a line: y = mx + b, where m represents the slope of the line and b represents the y-intercept.

In the context of the code, the equation (x - x1) * yDif !== (y - y1) * xDif is comparing the slopes of two line segments. It checks if the slope between the current point (x, y) and the first point (x1, y1) is equal to the slope between the current point and the last point (x2, y2).

If the slopes are not equal, it means that the points are not collinear and do not lie on the same line segment. Therefore, the function returns false, indicating that the points do not form a straight line.


pseudocode:
    given an array of a length at least > 2 else return false
    determine the slope via comparing first two arrs
        x2-x1, y2-y1  , we'll create a var for each that it must apply to while iterating through main array

    if slope doesn't comply, we'll return false immediately,if it does throughout return true
*/

function checkStraightLine(coordinates) {
  if (coordinates.length < 2) return false; // If there are fewer than 2 points, it cannot form a line
  if (coordinates.length === 2) return true; // If there are only 2 points, they will always form a line

  // Extract the coordinates of the first and last points
  const x1 = coordinates[0][0];
  const y1 = coordinates[0][1];
  const x2 = coordinates[coordinates.length - 1][0];
  const y2 = coordinates[coordinates.length - 1][1];

  // Calculate the differences between x and y coordinates of the first and last points
  const xDif = x2 - x1;
  const yDif = y2 - y1;

  // Iterate through the intermediate points to check if they lie on the same line segment
  for (let i = 1; i < coordinates.length - 1; i++) {
    const x = coordinates[i][0];
    const y = coordinates[i][1];

    // Check if the current point lies on the line segment defined by the first and last points
    if ((x - x1) * yDif !== (y - y1) * xDif) {
      return false; // If any point deviates from the line segment, return false
    }
  }

  return true; // If all points lie on the same line segment, return true
}

console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [2, 0],
  ])
);
