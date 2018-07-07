export default function findSum(arr, b){
    let len = arr.length;
    let index0 = -1;
    let index1 = -1;
    arr.forEach((a,index) => {
        for(let i=index+1; i< len; i++){
            if(a + arr[i] == b){
                index0 = index;
                index1 = i;
                return;
            }
        }
    });
    return [index0, index1]
}