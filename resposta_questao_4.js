const yearsWorked = [
  [1900, 1990],
  [1960, 2010],
  [1930, 2010],
];

const validationRetirement = (yearsWorked) => {
  let start = [];
  let end = [];

  yearsWorked.forEach((element) => {
    if (element[0] > 0 && element[1] > 0 && element[0] < element[1]) {
      start.push(element[0]);
      end.push(element[1]);
    }
  });

  let moreStart = Math.max(...start);
  let moreEnd = Math.max(...end);

  if (moreStart < moreEnd) {
    console.log(`Houve mais trabalhadores no ano de ${moreStart}`);
  }
};

//executa função passando o array de anos de trabalho
validationRetirement(yearsWorked);
