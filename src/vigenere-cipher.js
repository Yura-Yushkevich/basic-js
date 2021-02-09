'use strict';
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(typeMash) {
    this.typeMash = typeMash === false ? false : true;
    this.arrEN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.square = [];
  }

  encrypt(message, key) {
    if(!message || !key){
      throw 'Error';
    }
    this.getSquare();
    let str = "";

    message = message.toUpperCase();
    key = key.toUpperCase();
       
    key = this.getFullKey(message, key);

    if (message.length !== key.length){
      return false;
    }       
    
    for (let i = 0; i < message.length; i++) {
      if (this.arrEN.indexOf(message[i])== -1){
        str +=message[i];
      }
      else{
        str += this.square[this.arrEN.indexOf(message[i])][this.arrEN.indexOf(key[i])];
      }    
    }
      if(!this.typeMash){
        str = str.split('').reverse().join('');
      }

      return str;
  }    


  decrypt(message, key) {
    if(!message || !key){
      throw 'Error';
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    key = this.getFullKey(message, key);

    this.getSquare();
    let str = "";

    if (message.length !== key.length) return false;
    
    for (let i = 0; i < message.length; i++) {
        let row = this.arrEN.indexOf(key[i]);
       
        if(row == -1){
          str += message[i];
        }else{
          let coll = this.square[row].indexOf(message[i]);
          if(coll == -1){
            str += message[i];
          }else{
            str += this.arrEN[coll];
          }          
        }
    }
    if(!this.typeMash){
      str = str.split('').reverse().join('');
    }
    return str; 
  }


  getSquare () {
    for (let i = 0; i < this.arrEN.length; i++) {
        this.square[i] = this.arrEN.slice(i).concat(this.arrEN.slice(0, i));        
    }
  }

  getFullKey(message, key){
    let newKey = [];
    let count=0;
      for (let k=0; k<message.length;k++){
        if(count == key.length){
          count = 0;
        }
        if(message[k] === ' '){
          newKey.push(' ');
        }else{
          newKey.push(key[count]);
          count++;
        }
      }
        return newKey;
  }
}



module.exports = VigenereCipheringMachine;


const directMachine = new VigenereCipheringMachine();
console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'));
// , 'LEARN FRONTEND DEVELOPMENT :)'));
// , 'AEIHQX SX DLLU!');