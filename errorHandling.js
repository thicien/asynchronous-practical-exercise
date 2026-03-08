try {
    let num = 10;
    let result = num / 0;
    if (result === Infinity) {
        throw new Error("This is not divisible by zero");
    }
    console.log(result);
} catch (error) {
    console.log(error.message);
}