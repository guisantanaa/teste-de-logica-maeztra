const photoModeOrganization = (friends) => {
  let poses = 1;

  //formula de permutação
  for (let i = friends; i > 1; i--) {
    poses *= i;
  }

  console.log(
    `os ${friends} amigos podem tirar foto em ${poses} modos diferentes`
  );
};

photoModeOrganization(4);
