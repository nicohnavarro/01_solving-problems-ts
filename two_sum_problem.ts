// Given [6,5,4,3,8,9,2] & target = 9 return [1,2] -> index of
// the sum according to the target

function twoSum(nums: number[], target: number): number[] {
  let numIndexes: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (complement in numIndexes) {
      return [numIndexes[complement], i];
    }

    numIndexes[nums[i]] = i;
  }

  throw new Error("Not found solution");
}

const example = [2, 4, 5, 6, 7, 3];
const target = 9;

console.log(twoSum(example, target));
