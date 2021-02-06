'use strict';
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
    throw 'Error';
  }

    let itemArray = [...arr];
 
       for(let i=0; i<arr.length;i++){
         if(arr[i] == '--double-next'){
           itemArray.splice(i,1,arr[i+1]);          
         }
          else if(arr[i] == '--double-prev'){
           itemArray.splice(i,1,itemArray[i-1]);
          }
          else if(arr[i] == '--discard-next'){    
            itemArray.splice(i+1,1,null);
          } 
          else if(arr[i] == '--discard-prev'){
            if(i-1<0){
              itemArray.splice(0, 1, null);
            }else{
              itemArray.splice(i-1, 1, null); 
            }
          }
      }
 
      const arrDel= ['--double-next','--double-prev','--discard-prev','--discard-next', undefined, null];
      itemArray = itemArray.filter((item)=>{
          return !arrDel.includes(item);
      }); 
 
      return itemArray; 

};