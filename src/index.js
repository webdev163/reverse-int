module.exports = function reverse (n) {
  const arr = Array.from(String(Math.abs(n)), Number);
  return arr.reverse().join('')
}
