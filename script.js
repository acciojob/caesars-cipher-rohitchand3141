// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(str) {
var decoded = '';
for (var i = 0; i < str.length; i++) {
var ascii = str[i].charCodeAt();
if (ascii >= 65 && ascii <= 90) {
decoded += String.fromCharCode((ascii - 65 + 13) % 26 + 65);
} else if (ascii >= 97 && ascii <= 122) {
decoded += String.fromCharCode((ascii - 97 + 13) % 26 + 97);
} else {
decoded += str[i];
}
}
return decoded;
}

// Testing the function
console.log(rot13("EBG13 rknzcyr.")); // "ROT13 example."
console.log(rot13("Guvf fragrapr vf sha!")); // "This sentence is fun!"

module.exports = rot13;
