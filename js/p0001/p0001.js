export default function findSum(nums, target){
    const len = nums.length;
    const s = new Map();

    for( let i=0;i < len;i++){
        let a = nums[i]
        let index = s.get(target - a)
        if(index != undefined){
            return [index, i]
        }
        s.set(a, i)
    }
}