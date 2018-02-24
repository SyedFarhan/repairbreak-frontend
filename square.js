square = (x, y) => {
  let squared = x;

  for (i = 1; i < y; i++) {
    squared = x * squared;
  }
  console.log(squared);
}

square(3,-3);
