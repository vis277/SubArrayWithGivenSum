/**
 * iterate in the loop and inside that iterate in another loop
 * find the sum;
 * if sum is greater than S break the loop and iterate again
 * if sum===S
 * return the appropriate indexes of the loop
 * 
 */

 let N = 5; 
 let  S = 12;

 let A=[1,2,3,7,5];


 function subarray(arr,n,s){
    
    for(let i=0;i<n;i++){
       let sum=0;
        for(let j=i;j<n;j++){
          
            sum=sum+arr[j];
           //  console.log("LN24",sum);
            if(sum===s){
                return [i+1,j+1];
            }
            if(sum>s){
             
                break;
            }
        }
    }
   return [-1];
 }
 console.log(subarray(A,N,S));