const sampleNums = [1, 2, 3, 4, 5];

function sumFor(nums) {
  let result = 0;
  for (let num of nums) {
    result += num;
  }
  return result;
}

console.log(sumFor(sampleNums));

function sumWhile(nums) {
  let result = 0;
  let counter = 0;
  while (counter < nums.length) {
    result += nums[counter];
    counter++;
  }
  return result;
}

console.log(sumWhile(sampleNums));

function sumRecursion(nums, numsLength) {
  if (numsLength > 0) {
    return sumRecursion(nums, numsLength - 1) + nums[numsLength - 1];
  } else {
    return 0;
  }
}

console.log(sumRecursion(sampleNums, sampleNums.length));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, (collection, item) => collection+item);
}

console.log(sumTheSimpleWay(sampleNums));