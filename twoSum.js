// Brute Froce Algorithm

const twoSum = (nums,target)=> {
    let difference=0;
    for(let i=0;i<nums.length;i++){
        difference = target - nums[i];
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]== difference){
                return [nums[i],nums[j]]
            }
        }
    }
    return null;
}
console.log(twoSum([1,3,4,6,8],10));


// Optimized Approach
const twoSumOptimal = (nums,target)=>{
    let difference=0;
    let numsMap = {};

    for(let i=0;i<nums.length; i++){
        difference = target - nums[i] 
        if(numsMap.hasOwnProperty(difference)){
            return [numsMap[difference],i]
        }
        numsMap[nums[i]] = i;
    }
    return null;
};

console.log(twoSumOptimal([1,3,4,6,8],10))