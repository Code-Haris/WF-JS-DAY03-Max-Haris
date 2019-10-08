text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
console.log(text_truncate('I am a hero from World of Warcraft'))
console.log(text_truncate('I am a hero from World of Warcraft',12))
alert(text_truncate('Before Truncate : I am a hero from World of Warcraft'))
alert('After Truncate, click ok to see :D')
alert(text_truncate('I am a hero from World of Warcraft',12))
