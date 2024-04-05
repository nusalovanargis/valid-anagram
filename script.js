/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const obj = {};

  for (const char of s) {
    obj[char] = ++obj[char] || 1;
  }

  for (const char of t) {
    if (obj[char]) obj[char]--;
    else return false;
  }

  return true;
}
