const fizzBuzz = (
  start = 1,
  end = 100,
  triggers = [
    {
      divisor: 3,
      message: "Fizz",
    },
    {
      divisor: 5,
      message: "Buzz",
    },
  ]
) => {
  for (let i = start; i < end + 1; i++) {
    let result = "";
    triggers.forEach((trigger) => {
      if (i % trigger.divisor == 0) {
        result += trigger.message;
      }
    });
    console.log(result || i);
  }
};

// fizzBuzz();

fizzBuzz(1, 10, [
  { divisor: 2, message: "kutya" },
  { divisor: 3, message: "macska" },
]);
