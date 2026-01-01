const  processOrder = (price, quantity, callback) => {
    let total = price * quantity;
    if (callback) {
        return callback(total);
    }
    return total;
};

const isFreeShipping = processOrder(2500, 30, (total) => {
    if(total >= 50000) {
        return "무료배송 가능";
    }
    return false;
});

console.log(isFreeShipping);

const paymentResult = processOrder(50000, 2, (total) => {
    return total - (total * 0.1);
});

console.log(paymentResult + "원 결제 완료")