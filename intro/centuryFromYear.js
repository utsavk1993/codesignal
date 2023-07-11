/* Given a year, return to the century it is in. The first century spans from the year 1 up to and including the year 100,
 * the second - from the year 101 up to and including the year 200, etc.
 * Example: For the year = 1905, the output should be solution(year) = 20. For the year = 1700, the output should be solution(year) = 17.
 */

const solution = year => Math.ceil(year / 100);
