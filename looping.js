printTriangle = (angka) => {
    let segitiga = '';

    column = angka
    for (let i = 1; i <= angka; i++) {
      for (let j = 1; j <= column; j++) {
        segitiga += `${j} `
      }
      segitiga += '\n'
      column -= 1
    }
    return segitiga;
  }
  console.log(printTriangle(5));