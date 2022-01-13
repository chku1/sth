const textarea = document.getElementsByClassName("text")[0];
const countedWords = document.getElementsByClassName("countedWords")[0];

textarea.addEventListener("input", countWords);

function countWords() {
  let textareaContent = textarea.value;

  if (textareaContent.length > 250) {
    textarea.disabled = true;
  }

  let countWords = 0;

  for (let i = 0; i < textareaContent.length; i++) {
    let currentChar = textareaContent[i];

    if (currentChar == " ") {
      countWords += 1;
    }
  }

  if (
    textareaContent[textareaContent.length - 1] != " " &&
    textareaContent[textareaContent.length - 1] != undefined
  ) {
    countWords += 1;
  }

  countedWords.textContent = countWords;
}
