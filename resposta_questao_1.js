const valueInput = [123];

const validateOrder = (numbers) => {
  for (var i = 0; i < numbers.length; i++) {
    let input = numbers[i] + "";
    let number = input.split("");
    let order = true;

    for (var e = 0; e < number.length - 1; e++) {
      if (Math.abs(parseInt(number[e]) - parseInt(number[e - 1])) > 1) {
        order = false;
        break;
      }
    }

    if (order) {
      console.log("Está ordenado");
    } else {
      console.log("Não está ordenado");
    }
  }
};

validateOrder(valueInput);
