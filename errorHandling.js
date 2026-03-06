function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }

    let result = a / b;
    console.log("Result:", result);

  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Division operation completed.");
  }
}

divideNumbers(10, 2);
divideNumbers(10, 0);