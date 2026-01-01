const calculatePay = (hours, rate, callback) => {
    let totalPay = hours * rate;
    if (callback) {
        return callback(totalPay);
    }
    return totalPay;
}

const isHappy = calculatePay(8, 9860, (total) => {
    return total >= 70000;
});

const message = calculatePay(5, 12000, (total) => {
    return total * 1.5;
});

console.log(message + "원 지급 예정");