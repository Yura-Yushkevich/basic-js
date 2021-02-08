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
    console.log(key);

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
    this.getSquare();
    let str = "";

    if (message.length !== key.length) return false;
    
    for (let i = 0; i < message.length; i++) {
        let row = this.arrEN.indexOf(key[i]);
        let coll = this.square[row].indexOf(message[i]);
        str += this.arrEN[coll];
    }
    return str;

  
  }


  getSquare () {
    for (let i = 0; i < this.arrEN.length; i++) {
        this.square[i] = this.arrEN.slice(i).concat(this.arrEN.slice(0, i));        
    }
  }

  getFullKey(message, key){
    // let newKey = [];
    // let tempMessage = message.split(' ');

    
    // for (let i=0; i < tempMessage.length; i++){
    //   let raz = tempMessage[i].length - key.length;
    //   if (raz < 0 ){
    //     newKey.push(key.substr(0, key.length - (-raz)));
    //   }
    //   else if ((raz > 0 )){
    //     let keyPlus = key;
    //     for (let k=0; k < raz; k++){           
    //       keyPlus +=keyPlus[k];
    //       // console.log(keyPlus);
    //     }
    //     newKey.push(keyPlus);
    //   }
            
    // }
    // return newKey.join(' ');


  let newKey = [];
    for (let k=0; k<message.length;k++){
      for
    }


}

module.exports = VigenereCipheringMachine;


const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
// , 'AEIHQX SX DLLU!');