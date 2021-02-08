'use strict';
const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
// function repeater(str, options) {
let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
let resultStr = [];

if(typeof(str)!='string'){
  str = '' + str;
}

if (addition == false || addition == null || addition == undefined){
  addition = '' + addition;
}

if(repeatTimes && addition){
  for(let i=0; i<repeatTimes; i++){
    resultStr.push(str);
    for(let a=0; a<additionRepeatTimes; a++){
      resultStr.push(addition);
      if(a!=additionRepeatTimes-1 && additionSeparator){
        resultStr.push(additionSeparator); 
        } else if (a!=additionRepeatTimes-1 && !additionSeparator){
          resultStr.push('|');
        }
    }    
    if(i!=repeatTimes-1 && separator){
      resultStr.push(separator); 
      } else if (i!=repeatTimes-1 && !separator){
        resultStr.push('+');
      }
  }  
}
else if(repeatTimes && !addition){
  for(let i=0; i<repeatTimes; i++){
    resultStr.push(str); 
    if(i!=repeatTimes-1 && separator){
    resultStr.push(separator); 
    } else if (i!=repeatTimes-1 && !separator){
      resultStr.push('+');
    }
  }  
}
else if(!repeatTimes && !additionRepeatTimes && addition){
    resultStr.push(str); 
    resultStr.push(addition);
}
  return resultStr.join('');

};



// console.log(repeater('9UXKEEt8Aq', { repeatTimes: 4, separator: '1L467Kdqx2', addition: 'IMqCarClDg', additionRepeatTimes: 8, additionSeparator: 'U7L9D0f8pb' }));
// , '9UXKEEt8Aq IMqCarClDg U7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg')

