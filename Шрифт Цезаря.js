function caesarCipher(str, shift) {
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const input = str.toUpperCase();
let result = '';
  
    for (let i = 0; i < input.length; i++) {
const char = input[i];
      
    if (alphabet.includes(char)) {
let index = alphabet.indexOf(char);
       
let newIndex = (index + shift) % 26;
if (newIndex < 0) {
newIndex += 26;
        }
       
        result += alphabet[newIndex];
      } else {
     
        result += char;
      }
    }
  
    return result;
  }
  
  
  const message = "UKD";
  const shift = 3; 
  const encryptedMessage = caesarCipher(message, shift);
  
  console.log(encryptedMessage);
  