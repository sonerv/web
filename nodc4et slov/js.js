let textarea = document.getElementById("sand");
let button = document.getElementById("find");

button.addEventListener ("click", function () {
  let dictionary = {};
  let text = textarea.value;
  let words = text.split(" ").filter(function (word) {
    return word.length > 4;
  }).map(function (word) {
    return word.toLowerCase();
  });
  words.forEach(function (word) {
    if (!(word in dictionary)) {
      dictionary[word] = 0;
    }
    dictionary[word] += 1;
  });
  let maxWord, maxCount = 0, word;
  for (word in dictionary) {
    if (dictionary[word] > maxCount) {
      maxCount = dictionary[word];
      maxWord = word;
    }
  }
  alert(maxWord);
})
