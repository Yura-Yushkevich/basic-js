'use strict';

const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(typeof(date)=='object'){
    if (Object.prototype.toString.call(date) !== '[object Date]'){
      throw Error;
    }

    let dateMonth = date.getMonth();
    
    if(dateMonth < 2 && dateMonth >= 0 ||  dateMonth == 11){
      return 'winter';
    }
    else if(dateMonth >= 2 && dateMonth <= 4){
      return 'spring';
    }
    else if(dateMonth >= 5 && dateMonth <= 7){
      return 'summer';
    }
    else if(dateMonth >= 8 && dateMonth <= 10){
      return 'autumn';
    }
    else{
      return false;
    }
  }
  return 'Unable to determine the time of year!';
};



// function getSeason(date) {  
//   if(typeof(date)=='object'){
//     dateMonth = date.getMonth();

//     if(dateMonth < 2 && dateMonth >= 0 ||  dateMonth == 11){
//       return 'winter';
//     }
//     else if(dateMonth >= 2 && dateMonth <= 4){
//       return 'spring';
//     }
//     else if(dateMonth >= 5 && dateMonth <= 7){
//       return 'summer';
//     }
//     else if(dateMonth >= 8 && dateMonth <= 10){
//       return 'autumn';
//     }
//     else{
//       return false;
//     }
//   }
// };


// const [ 
//   winter, 
//   spring, 
//   summer, 
//   autumn,
// ] = [
//   new Date(2019, 11, 22, 23, 45, 11, 500),
//   new Date(2018, 4, 17, 11, 27, 4, 321),
//   new Date(2017, 6, 11, 23, 45, 11, 500),
//   new Date(1994, 8, 26, 3, 0, 11, 500),
// ];
// console.log(getSeason(winter));//, 'winter');
// console.log(getSeason(spring));//, 'spring');
// console.log(getSeason(summer));//, 'summer');


let x = new Date(1978, 2, 4, 5, 6, 7);
console.log(x);
