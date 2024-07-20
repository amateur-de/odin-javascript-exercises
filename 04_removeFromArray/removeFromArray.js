const removeFromArray = function(nums , ...numsToBeRemoved) {
    let indexNumsToBeRemoved = 0
      while(indexNumsToBeRemoved < numsToBeRemoved.length)
      {
        const index = nums.indexOf(numsToBeRemoved[indexNumsToBeRemoved])
        if(index === -1)
        {
            ++indexNumsToBeRemoved
            continue
        }
        else
        {
            nums.splice(index , 1)
        }
      }
      return nums
};


// Do not edit below this line
module.exports = removeFromArray;
