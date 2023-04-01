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

//Search Insert Position

//How it works: First check edge case if target is less than first num in array and return 0 if so. Then loop through array to see if target is in array, if so return the index. Then check to see if target is not in array to see where it would be, we check nums[i] is less than target and if nums[i+1] would be above the target, then return i+1 because that would be the position of the number. If if meets none of those cases, return the nums.length because it would be at the end of the array.

var searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target && nums[i + 1] > target) {
      let palce = i + 1;
      return palce;
    }
  }
  return nums.length;
};

searchInsert([1, 3, 5, 6], 5);

//Plus one

//How it works: We first join the array of numbers using .join. which is also going to be a BigInt value. Then Add 1 using the BigInt. Not my solution

var plusOne = function (digits) {
  return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
};

plusOne([4, 3, 2, 1]);

//Build Array from Permutation

//How it works: We first create a new blank array variable. Then loop through the given array and push to the new array with the format it wants. Then return the newly built array.

var buildArray = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};

buildArray([0, 2, 1, 5, 3, 4]);

//Concatentation of Array

//How it works: Basically all this wants us to do it make a function that makes on array doubled. We can do this by simply running nums.concat(nums) which will concatinate the given array onto the given array, making it double.

var getConcatenation = function (nums) {
  return nums.concat(nums);
};

getConcatenation([1, 2, 1]);

//Shuffle the Array

//How it works: First create a new blank array and name it something. Then create a variable that is equal to n. Then run a loop through the array that pushed first i then the new variable index. And also x ++ so increase the variable. Then just return the newly created array.

var shuffle = function (nums, n) {
  let newArr = [];
  let x = n;
  for (let i = 0; i < n; i++) {
    newArr.push(nums[i]);
    newArr.push(nums[x]);
    x++;
  }
  return newArr;
};

shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);

//Number of good pairs

//How it works: First make a variable set to zero to keep track of the number of good pairs we count. Then we run a double for loop so that we can check one index vs all the other indexes in the array. Then run an if statment within the loops that sets our conditionals, in this case being if nums[i] == nums[j] and that i less than j then increase the number of goodPairs by 1. Then once the loops are done running, return the number of good pairs.

var numIdenticalPairs = function (nums) {
  let goodPairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        goodPairs++;
      }
    }
  }
  return goodPairs;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]);

//Running Sum of 1d Array

//How it works: First create a new empty array. Then scream a global variable for the current sum. Then run a for loop, in the loop add nums[i] to the summ then push the sum to the new array. When the loop is done return the array.

var runningSum = function (nums) {
  let newArr = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    newArr.push(sum);
  }
  return newArr;
};

runningSum([1, 2, 3, 4]);

//Richest Customer Wealth

//How it Works: First create a number variable set to 0, this will act as the highest account balence and will be returned at the end. Then create another variable set to zero, this will be used as the running sum of the account were in and be used to compare against the highest account. Then run a double for loop the first being based on the accounts array given and then inner loop being based on the length of the account[i] length which is the length of the inner account array indexes. Within the inner loop add the index of the accounts individual arrays to the curret sum and then check if the current sum is bigger than the highest account ballence, if it is the set the new account high to that sum. Then within the outer loop, reset the running sum to 0, we do this so that we reset the running sum every time we move on to a new account. Then once theyre done running, return the highest account variable.

var maximumWealth = function (accounts) {
  let bigBaller = 0;
  let currentSum = 0;
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      currentSum += accounts[i][j];
      if (currentSum > bigBaller) {
        bigBaller = currentSum;
      }
    }
    currentSum = 0;
  }
  return bigBaller;
};

maximumWealth([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]);

//Kid with the greatest number of candies

//How it works: We want to return an array of boolean values based on if you gave an index of the candies array, the value of extra candies, If they would have the highest amount of candies of the array. First we create a new empty array. Then Create a double for loop. Within the first for loop, before the second loop starts, we create a variable with a true value. Then in the second loop we run a check to see if the first loops index on the array, plus the extra candies value would be less than all the other values in the array. If at any point, this becomes true, then set the moreCandy variable to false. Then at the end of the first loop but outside of the second loop, we will push to the new array we made whatever value the more candy variable has. Then return the array we made.

var kidsWithCandies = function (candies, extraCandies) {
  booArray = [];
  for (let i = 0; i < candies.length; i++) {
    let moreCandy = true;
    for (let x = 0; x < candies.length; x++) {
      if (candies[i] + extraCandies < candies[x]) {
        moreCandy = false;
      }
    }
    booArray.push(moreCandy);
  }
  return booArray;
};

kidsWithCandies([2, 3, 5, 1, 3], 3);

//Maximum Number of Words Found in Sentences

//How it works: We are given an array of strings. First we create a variable that will contain the string with the most ammount of words. Then we run a for loop that will cycle the array. Then create a variable based on the array index that will be an array of the different words, we get this by using the split method and splitting by every space, this creates an array of the words stored in a variable. Then we run a for loop on that array. X will represent the ammount of words in that array and also serves as the loop variable so we dont have to create a seperate one. Note that we set the loop condition to be less than or equal to x to get a correct count. Then in that loop say if x if greater than the high variable, let that variable equal x. This will count the number of words in the array we created and if higher will set a new high. Then return the high variable

var mostWordsFound = function (sentences) {
  let high = 0;
  for (let i = 0; i < sentences.length; i++) {
    let wordArr = sentences[i].split(" ");
    for (let x = 0; x <= wordArr.length; x++) {
      if (x > high) {
        high = x;
      }
    }
  }
  return high;
};

mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]);

//How Many Numbers Are Smaller Than the Current Number

//How it works: We want to return an array where each index is how many numbers in the original array are smaller that that number in the original arrays index. We start by creating a blank array variable. Then run a for loop based on the nums length. Then each time that loop runs create a count set to zero. Then run an inner for loop that will run through the array and an if statment that says, if the j index is less than the i index and i and j are not the same. Increase the count by one. This comprares one index of the array to all the others in the array, if they are smaller than the index were comparing, the increase the number of numbers its smaller than. Then, outside of the inner loop push the count to our new array. Then just return the array when the for loops are done.

var smallerNumbersThanCurrent = function (nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i] && j != i) {
        count++;
      }
    }
    newArr.push(count);
  }
  return newArr;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);

//1313. Decompress Run-Length Encoded List

//How it works: We want to return an array based on pairs in the array. (see leetcode for more deatails) We start by created a new blank array. Then we run a standard for loop through the array. Then create two variables called freq and val. Value is what well be pushing to the array and freq is the ammount of times we will push it. The values are defined in the leetcode problem. Then we say while freq is greater than 0, push the value into the array and freq --. We do that so freq goes down and will stop the while loop when the correct amount of values are pushed. Then just return the new array.

var decompressRLElist = function (nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let freq = nums[2 * i];
    let val = nums[2 * i + 1];
    while (freq > 0) {
      newArr.push(val);
      freq--;
    }
  }
  return newArr;
};

decompressRLElist([1, 2, 3, 4]);

//1389. Create Target Array in the Given Order

//How it works:We are tasked with returning an array which the value of an index is the nums[i] and the index of index[i].First we create a new arr. Then loop through either nums or index, both work because they will be the same size. Thne use the splice method which will insert a value at a specified index. The first argument we give is index[i] because this is where we want it to be placed in the new array, and then we give it 0 because this peramater is for how many elements from the array you want to delete. And finally we give it nums[i] because this is the element we want to push into the array. Then when its done we can just return new array.

var createTargetArray = function (nums, index) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    newArr.splice(index[i], 0, nums[i]);
  }
  return newArr;
};

createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 3, 4]);

//2535. Difference Between Element Sum and Digit Sum of an Array

//How it works: We want to create two sums, one of all the indexes added, and the other of every digit. First create two variables to store the sums. Then run a loop through the given array, this loop will count all digits. So because some indexes like "15" are two digits they will need to be split. We first convert each index to a string. Then split that string to make a new array that splits numbers like "15" into 1 and 5. Then run a loop through that new array, converting each index back into a number using parseInt method. Then adding that number into the sum2 total. Then back in global scope, run a a loop that will simply add each index of the given array into sum1. Then subtract sum1 from sum2, and use a Math method to get the absolute value of the difference. And return it

var differenceOfSum = function (nums) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    let string = nums[i].toString();
    let split = string.split("");

    for (let j = 0; j < split.length; j++) {
      let num = parseInt(split[j]);

      sum2 += num;
    }
  }
  for (let x = 0; x < nums.length; x++) {
    sum1 += nums[x];
  }
  let sum = sum1 - sum2;
  let final = Math.abs(sum);
  return final;
};

differenceOfSum([1, 15, 6, 3]);

//1528. Shuffle String

//How it works: We want to return the string written with each character index matching the value of the indexes in the given array. For examble the first letter of the given string is c, and we want it to be in the 4 index of the new string. We start by created space for a new string called newString. Then we split the string into an array using the split method and store this in a variable. Then we loop through the given array. Then run an inside loop through the split string array. Then we say if i is equal to indices[j] then add that j index of the string array onto our newString variable. This will create a new string in the wanted order. Now we just return the new array.

var restoreString = function (s, indices) {
  newString = "";
  let sArr = s.split("");
  for (let i = 0; i < indices.length; i++) {
    for (let j = 0; j < sArr.length; j++) {
      if (i == indices[j]) {
        newString += sArr[j];
      }
    }
  }
  return newString;
};

restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);

//1773. Count Items Matching a Rule

//How it works:We want to check if any of the arrays in the larger array match the rulekey and the rulevale. We know that the zero index will be the type, the first index will be the color and the last wil be the name. We start by setting a variable count to 0 to keep track of the number of matches we have. Then run a loop through the items array. Then we right three if statment. One for each rulekey because there are three and then check if the index of the inner array assigned to that key matches the given value. If so, increase count by one. Then when loop is done, return the count

var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey == "type" && items[i][0] == ruleValue) {
      count++;
    }
    if (ruleKey == "color" && items[i][1] == ruleValue) {
      count++;
    }
    if (ruleKey == "name" && items[i][2] == ruleValue) {
      count++;
    }
  }
  return count;
};

countMatches(
  [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  "color",
  "silver"
);

//2367. Number of Arithmetic Triplets

//How it works: We want to see if any 3 unique numbers in the array of nums are arithmetic triplits. The definition is defined in the leetcode problem. First we set a number variable to keep track of the ammount of triploits we have. Then run 3 for loops, this will loop through every combination of 3 indexis. Within the inner loop, create an if statement with the conditions if i < j and j < k and nums[j] - nums[i] == diff and nums[k] - nums[j] == diff. If so increase the count by one. Then return the count.

var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        if (
          i < j &&
          j < k &&
          nums[j] - nums[i] == diff &&
          nums[k] - nums[j] == diff
        ) {
          count++;
        }
      }
    }
  }
  return count;
};

arithmeticTriplets([0, 1, 4, 6, 7, 10], 3);

//1662. Check If Two String Arrays are Equivalent

//How it works:We are trying to figure out if an array of string put together would equal each other, in the examble ab + c is the same as a + bc. We start by creating two new variables of empty string that will store the conjoined strings. Then we run a for loop through the first given array and add each index onto the first new string. Then do the same for the second array. Then compare the two string and if they are the same, return true, otherwise return false.

var arrayStringsAreEqual = function (word1, word2) {
  let new1 = "";
  let new2 = "";
  for (let i = 0; i < word1.length; i++) {
    new1 += word1[i];
  }
  for (let i = 0; i < word2.length; i++) {
    new2 += word2[i];
  }
  if (new1 === new2) {
    return true;
  } else {
    return false;
  }
};

arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);

//136. Single Number

//How it works: Were trying to return the number in the array that only appears once. If the length is only 1, return the only element. Then we create an empty object. Then run a for loop through nums. This will store the number along with the ammount of times it appears in the array. Then run another loop and if the freq of that num is 1. Return that num, otherwise return null.

var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const freq = {};
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (const num of nums) {
    if (freq[num] === 1) {
      console.log(num);
      return num;
    }
  }
  return null; // no unique number found
};

//1816. Truncate Sentence

//How it works:We are given a string and a number to work with. We want to cut the sentence off at k number of words. First we create a new variable that is the given string split by a space using the split string method. This gives us an array of all the words in the sentence. Then we will alocate a variable that will be the new sentence. Then we run a foor loop with the conditional being that i is less than k. This is so that we only add the words to the ammount of less than k. In the loop we will add each index of the array onto the new sentence variable. Then if i is not less than k-1, meaning this will apply to every work exept the last, then add a space onto the new senetence. We do this conditionally because we do not want to add a space to the end of the new sentence. Then return the new setence.
var truncateSentence = function (s, k) {
  let arr = s.split(" ");
  let newS = "";
  for (let i = 0; i < k; i++) {
    newS += arr[i];
    if (i != k - 1) {
      newS += " ";
    }
  }
  return newS;
};

truncateSentence("Hello how are you Contestant", 4);

//2006. Count Number of Pairs With Absolute Difference K

//How it works: We want to know how many pairs of numbers in the array nums will equal K with their absolute values. First we create a variable with it being initialized at 0. This will store the ammount of pairs that match the rules. Then we run a double for loop, this will look at every pair of numbers in the array. Then within the two loops, create a variable that stores that absolue value of nums i - nums j , we get the absolute value by using the built it math javascript operatopr abs which takes in two arguments and the minus symbol that will return the absolute value. Then we check to see if that number is equal to k and if i is less than j because that is what the problem deems is a valid matching pair. Then if they are correct, increase the count by 1. Then return the count.
var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let absNum = Math.abs(nums[i] - nums[j]);
      if (absNum == k && i < j) {
        count++;
      }
    }
  }
  return count;
};

countKDifference([1, 2, 2, 1], 1);

//344.Reverse String

//How it works:Given an array of single character strings, return it in the reverse order, still in array form. We return s.reverse(), this is an array method that return the array in reverse order.
var reverseString = function (s) {
  return s.reverse();
};

reverseString(["h", "e", "l", "l", "o"]);
