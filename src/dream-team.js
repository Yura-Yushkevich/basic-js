const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  if(Array.isArray(members)){
    for(let name of members){
      if (typeof(name) == 'string'){ 
        let nameShort = name.trim();
        result.push(nameShort[0].toUpperCase());
      }else{
        continue;
      }
    }
  }else{
    return false;
  }
  return result.sort().join('');
};


// function createDreamTeam(members) {
//   let result = [];
//   if(Array.isArray(members)){
//     for(let name of members){
//       if (typeof(name) == 'string'){ 
//         let nameShort = name.trim();
//         result.push(nameShort[0].toUpperCase());
//       }else{
//         continue;
//       }
//     }
//   }else{
//     return false;
//   }
//   return result.sort().join('');
// };

