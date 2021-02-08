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

    message = message.toUpperCase();
    key = key.toUpperCase();

    if (message.length !== key.length){
      return false;
    } 
    this.getSquare();
    let str = "";
    for (let i = 0; i < message.length; i++) {
      if (this.arrEN.indexOf(message[i])== -1){
        str +=message[i];
      }
      str += this.square[this.arrEN.indexOf(message[i])][this.arrEN.indexOf(key[i])];
      console.log(str);      
    }
    return str;


  }    
  decrypt(message, key) {
    if(!message || !key){
      throw 'Error';
    }

    message = message.toUpperCase();
    key = key.toUpperCase();


    if (message.length !== key.length) return false;
    this.getSquare();
    let str = "";
    for (let i = 0; i < message.length; i++) {
        let row = this[arrEN].indexOf(key[i])
            coll = this.square[row].indexOf(message[i]);
        str += this[arrEN][coll];
    }
    return str;

  
  }


  getSquare () {
    for (let i = 0; i < this.arrEN.length; i++) {
        this.square[i] = this.arrEN.slice(i).concat(this.arrEN.slice(0, i));        
    }
  }
}

module.exports = VigenereCipheringMachine;


const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('attack at dawn!', 'alphonsefdethkl'));
// , 'AEIHQX SX DLLU!');