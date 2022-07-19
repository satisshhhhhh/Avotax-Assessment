function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;

  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    const queriesLeft = queries.length - (i + 1);
    totalWaitingTime += duration * queriesLeft;
  }

  return totalWaitingTime;
}

// var queries = [3, 2, 1, 2, 6];
// console.log(minimumWaitingTime(queries));

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
