function isp1() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("ISP 1 is connected"), 2000));
}
function isp2() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("ISP 2 is connected"), 3000));
}
function isp3() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("ISP 3 is connected"), 1000));
}
async function internet() {
    const connection = await Promise.race([isp1(), isp2(), isp3()]);
    console.log(connection);
} catch(error) {
    console.error("All IsPs are down");
}