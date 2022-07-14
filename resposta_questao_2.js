const array = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];

const arrInteger = (array) => {
  const duplicatedArray = array.filter((item, index) => {
    return array.indexOf(item) !== index;
  });

  console.log(duplicatedArray);
};

arrInteger(array);
