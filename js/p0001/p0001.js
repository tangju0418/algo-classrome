export default function findSum(nums, target){
    const len = nums.length;
    const s = new Map();

    for( let i=0;i < nums.length;i++){
        let a = nums[i]
        if(s.has(target - a)){
            return [s.get(target - a), i]
        }
        s.set(a, i)
    }
}