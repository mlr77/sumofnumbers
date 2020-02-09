function sumFor(l) {
  let sum = 0;
  for (let i = 0; i < l.length; i++) {
    sum += l[i];
  }
  return sum;
}

function sumWhile(l) {
  let sum = 0;
  let i = 0;
  while (i < l.length) {
    sum += l[i];
    i++;
  }
  return sum;
}

function sumRecursion(l) {
  if (l.length === 0) {
    return 0;
  }
  return l[0] + sumRecursion(l.slice(1, l.length));
}

function sumTheSimpleWay(l) {
  return _.reduce(l, function (memo, num) { return memo + num; }, 0);
}

const numbers = [1, 2, 3, 4, 5];

console.log(sumFor(numbers));

console.log(sumWhile(numbers));

console.log(sumRecursion(numbers));

console.log(sumTheSimpleWay(numbers));
// First Pass 35:00 minutes
