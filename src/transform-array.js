'use strict';
// const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
//   let itemPos =-1;
//    if (Array.isArray(arr)){
//       const arrDel= ['--double-next','--double-prev','--discard-prev','--discard-next'];
//       const itemArray = arr.filter((item)=>{
//           return !arrDel.includes(item);
//       });

//       for(let i=0; i<arr.length;i++){
//         if(arr[i] == '--double-next'){
//           itemPos = itemArray.indexOf(arr[i+1]);          
//           let res = (itemPos != -1) ? itemArray.splice(itemPos,0,arr[i+1]) : false;            
//         }
//         else if(arr[i] == '--double-prev'){
//           itemPos = itemArray.indexOf(arr[i-1]);          
//           let res = (itemPos != -1) ? itemArray.splice(itemPos,0,arr[i-1]) : false;
//          }
//         else if(arr[i] == '--discard-prev'){
//           itemPos = itemArray.indexOf(arr[i-1]);          
//           let res = (itemPos != -1) ? itemArray.splice(itemPos,1) : false;
 
//         }
//         else if(arr[i] == '--discard-next'){
//           itemPos = itemArray.indexOf(arr[i+1]);          
//           let res = (itemPos != -1) ? itemArray.splice(itemPos,1) : false;
//         }     
//      }
//      return itemArray; 
//    }
//    else{
//      throw Error;
//    }
// };










function transform(arr) {
  let itemPos =[];
   if (Array.isArray(arr)){
      const arrDel= ['--double-next','--double-prev','--discard-prev','--discard-next'];
      const itemArray = arr.filter((item)=>{
          return !arrDel.includes(item);
      });    
       

      for(let i=0; i<arr.length;i++){
        if(arr[i] == '--double-next'){
          // itemPos = itemArray.indexOf(arr[i+1]); 
          const itemPos = getAllIndexes(itemArray, arr[i+1]);         
          let res = (itemPos[0] != -1) ? itemArray.splice(itemPos[0],0,arr[i+1]) : false;
          itemPos.splice(itemPos[0],1);            
        }
        else if(arr[i] == '--double-prev'){
          // itemPos = itemArray.indexOf(arr[i-1]);
          const itemPos = getAllIndexes(itemArray, arr[i-1]);           
          let res = (itemPos[0] != -1) ? itemArray.splice(itemPos[0],0,arr[i-1]) : false;
          itemPos.splice(itemPos[0],1); 
         }
        else if(arr[i] == '--discard-prev'){
          const itemPos = getAllIndexes(itemArray, arr[i-1]);
          // itemPos = itemArray.indexOf(arr[i-1]);          
          let res = (itemPos[0] != -1) ? itemArray.splice(itemPos[0],1) : false;
          itemPos.splice(itemPos[0],1); 
        }
        else if(arr[i] == '--discard-next'){
          const itemPos = getAllIndexes(itemArray, arr[i+1]);
          // itemPos = itemArray.indexOf(arr[i+1]);          
          let res = (itemPos[0] != -1) ? itemArray.splice(itemPos[0],1) : false;
          itemPos.splice(itemPos[0],1);
        }     
     }
     return itemArray; 
   }
   else{
     throw Error;
   }

}

function getAllIndexes(arr, val) {
  let indexes = [], i;
  for(i = 0; i < arr.length; i++){
      if (arr[i] === val){
          indexes.push(i);
      }
  }
  if (indexes.length!=0){
     return indexes;
  }else{
    indexes[0]=-1;
     return indexes; 
  }
}






 console.log(transform([ 
  '--double-prev',
  1,
  '--discard-prev',
  'GHI',
  '--discard-next',
  333,
  '--discard-prev',
  { '0': 'first', '1': 'second', length: 2 },
  '--double-prev',
  1,
  '--double-prev',
  'DEF',
  { '0': 'first', '1': 'second', length: 2 },
  { '0': 'first', '1': 'second', length: 2 },
  1.233,
  333,
  'GHI',
  '--discard-prev'
  ]));



// [ '-1': '--double-prev' ]
// !!!!!
// []


// [
//   '--double-prev',
//   1,
//   '--discard-prev',
//   'GHI',
//   '--discard-next',
//   333,
//   '--discard-prev',
//   { '0': 'first', '1': 'second', length: 2 },
//   '--double-prev',
//   1,
//   '--double-prev',
//   'DEF',
//   { '0': 'first', '1': 'second', length: 2 },
//   { '0': 'first', '1': 'second', length: 2 },
//   1.233,
//   333,
//   'GHI',
//   '--discard-prev'
// ]
// !!!!!
// [
//   'GHI',
//   { '0': 'first', '1': 'second', length: 2 },
//   { '0': 'first', '1': 'second', length: 2 },
//   1,
//   1,
//   'DEF',
//   { '0': 'first', '1': 'second', length: 2 },
//   { '0': 'first', '1': 'second', length: 2 },
//   1.233,
//   333
// ]

