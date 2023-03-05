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
