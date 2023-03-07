//Two Sum EASY

//How it works: loops one time to stay on the current number i, then loops again to compare the other numbers in the array against it, being x. If there is a pair where x + i === the target, and they are not the same index, then create a variable called answer, containing an array of i and x, and returns it.
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let x = 0; x < nums.length; x++) {
      if (nums[i] + nums[x] === target && i != x) {
        let answer = [i, x];
        console.log(answer);
        return answer;
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);

//Palindrome Number

//How it works: Check to see if given number is palendrone. First make variable to call it num of what the function is recieving. Then convert that number into a string so we can manipulate it. Then split the string at each character so it is now an array with each character at a new index. Then use the array method of reverse to reverse the order of the array. Then we rejoin the array into a string with nothing between them. Then check to see if the string variable is equal to the reverse variable called joined. If yes return true, if not return false.
var isPalindrome = function (x) {
  let num = x;
  let string = num.toString();
  let splitString = string.split("");
  let reversed = splitString.reverse();
  let joined = reversed.join("");
  if (string === joined) {
    return true;
  } else {
    return false;
  }
};

isPalindrome(121);

//Remove Duplicates from sorted Array

//How it works: Run a loop through the array of numbers. then check each index, if that current index is uqual to the index plus one, then splice that index(the plus one index) from the array using array.splice. Then suptract one from the loop interator in this case i--. This is done so if there are lets say 4 of one number, it checks the array over and over again until there is only one of that number in the array.

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

//Sqrt(x)

//How it works: First check edge cases, If the number x is one or zero than return x. Then make a variable called squared and a variable called i. Set them both to 0. Then run a while loop where the condition is as long as x is greater than the squared. Then increment i by 1. then set squared to i * i. Then check if squared is equal to x. If so return i. Once the while loop is done running. Return i-1.

var mySqrt = function (x) {
  if (x === 1 || x === 0) {
    return x;
  }
  let squared = 0;
  let i = 0;
  while (squared < x) {
    i++;
    squared = i * i;
    if (squared === x) {
      return i;
    }
  }
  return i - 1;
};

mySqrt(4);

//Remove Element

//How it works: First start a loop through the given array of nums. Then we check to see if the numbers at that index in the array is equal to the target value, if it is, splice that index and i-- so we check all the values. then return the length of the value.(Note: returning just the nums array at the end does return the correct array but the problem on leetCode wants the length)

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

//Move zeroes

//How it works:Set a variable to keep track of the ammount of zeros there are in the array. Then loop through the array and check if the current index is equal to zero. If it is the splice that valie and i-- to make sure we hit all the values in the array. And then also zero count variable ++. After thats done running, make a while loop that depends on the zero counter being greater than zero. In that while loop do array.push(0) to add a zero to the end of the array and zero counter -- to decrease the ammount zero we have to add to the end of the array.

var moveZeroes = function (nums) {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      zeroCount++;
    }
  }
  while (zeroCount > 0) {
    nums.push(0);
    zeroCount--;
  }
};

moveZeroes([0, 1, 0, 3, 12]);
