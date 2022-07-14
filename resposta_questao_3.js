const validationString = (string) => {
  let array = string.split("");
  let pattern = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < array.length; i++) {
    let character = array[i];
    let nextCharacter = array[i + 1];

    if (nextCharacter && pattern[character] == nextCharacter) {
      array.splice(i, 2);
      i = -1;
    }
  }

  return array;
};

const validation = (string = "") => {
  let sequence = validationString(string);

  if (sequence.length) {
    console.log("Sequência nao é válida");
  } else {
    console.log("A sequência é válida");
  }
};

validation("{([])}");
