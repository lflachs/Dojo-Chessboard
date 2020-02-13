function chessboard() {
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const newArray = [];
  letters.forEach(element => {
    const array = [];
    for (let i = 1; i <= letters.length; i++) {
      array.push(element + " - " + i);
    }
    newArray.push(array);
  });
  return newArray;
}

console.log(chessboard());
module.exports = chessboard;
