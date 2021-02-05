// const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
//   const resultArr =[];
//    if (Array.isArray(arr)){
//      for(let i=0; i<arr.length;i++){      
//        if (arr[i] == '--discard-next'){
//         let nextItem = arr[i+1];
//         if(nextItem == '--discard-next' || nextItem == '--discard-prev' || nextItem == '--double-prev' || nextItem == '--double-next'){
//           continue;
//         }
//         else{
//           arr.splice([i+1],1);
//         } 
//        }
//        else if (arr[i] == '--discard-prev'){
//         let prevItem = arr[i-1];
//         if(prevItem == '--discard-next' || prevItem == '--discard-prev' || prevItem == '--double-prev' || prevItem == '--double-next'){
//           continue;
//         }
//         else{
//           arr.splice([i-1],1);
//         }     
//        }
//        else if (arr[i] == '--double-next'){
//         let nextItem = arr[i+1]; 
//         if(nextItem == '--discard-next' || nextItem == '--discard-prev' || nextItem == '--double-prev' || nextItem == '--double-next'){
//           continue;
//         }else{
//           resultArr.push(arr[i+1]);
//         }          
//        }
//        else if (arr[i] == '--double-prev'){
//           let prevItem = arr[i-1];
//           if (prevItem == '--discard-next' || prevItem == '--discard-prev' || prevItem == '--double-prev' || prevItem == '--double-next'){
//             continue;
//           }
//           else{
//             resultArr.push(prevItem);
//           }
//        }
//        else{
//          resultArr.push(arr[i]);
//        }       
//      }
//    }else{
//      throw Error;
//    }
//    return resultArr; 
// };










function transform(arr) {
  const resultArr =[];
   if (Array.isArray(arr)){
     for(let i=0; i<arr.length;i++){
       if(arr[i] == '--double-next'){
        resultArr.push(arr[i+1]);
        resultArr.push(arr[i+1]);
       }else if(arr[i] == '--discard-prev'){
        if(arr[i-2] == '--discard-next'){
          continue;
        }else{
          resultArr.pop();
        }         
       }else if(arr[i] == '--discard-next'){
        i++;        
      }else if(arr[i] == '--double-prev'){
        if(arr[i-2] == '--discard-next' || arr[i-2] == '--double-next'){
          continue;
        }else{
          resultArr.push(arr[i-1]);
          resultArr.push(arr[i-1]);
        }
      }
       else{
        resultArr.push(arr[i]);
       }      

     }
   }else{
     throw Error;
   }
   return resultArr; 
 };


 console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]));