function binomialCoefficient(n, k) {
  let res = 1;
  // Since C(n, k) = C(n, n-k)
  if (k > n - k) k = n - k;

  for (let i = 0; i < k; ++i) {
    res *= n - i;
    res /= i + 1;
  }

  return res;
}

function catalan(n) {
  let c = binomialCoefficient(2 * n, n);
  return c / (n + 1);
}

function numberOfBinaryTreeTopologies(n) {
  let count = catalan(n);
  return count;
}

// let n = 3;
// console.log(numberOfBinaryTreeTopologies(n));
// Do not edit the line below.

exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;
