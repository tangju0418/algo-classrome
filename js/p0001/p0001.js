export default function findSum(nums, target){
    const len = nums.length;
    let index0 = -1;
    let index1 = -1;
    let s = new Map();
    for( let i=0;i < nums.length;i++){
        let a = nums[i]
        if(s.has(target - a)){
            index0 = s.get(target - a)
            index1 = i
            break;
        }
        s.set(a, i)
        
    }
    // nums.forEach((a,index) => {
    //     for(let i=index+1; i< len; i++){
    //         if(a + nums[i] == target){
    //             index0 = index;
    //             index1 = i;
    //             return;
    //         }
    //     }
    // });
    return [index0, index1]
}