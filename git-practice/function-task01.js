// [문제: 쇼핑몰 결제 금액 계산기]

// 상황: 쇼핑몰에서 물건의 가격과 개수를 받아 총 금액을 계산하고,
// 콜백 함수를 통해 무료 배송 확인이나 할인 쿠폰 적용 같은 추가 처리를 하려고 합니다.

// ==========================================
// 1단계: 기본 계산 함수 만들기 (뼈대 구축)
// ==========================================
// 1. `processOrder`라는 이름의 화살표 함수를 만드세요.
// 2. 매개변수: `price` (물건 가격), `quantity` (개수), `callback` (콜백 함수)
// 3. 기능:
//    - 가격과 개수를 곱해서 `total`(총 금액)을 구하세요.
//    - `callback` 함수가 있다면, `total`을 인자로 넘겨서 실행하고 그 결과를 리턴하세요.
//    - `callback` 함수가 없다면, 그냥 `total`을 리턴하세요.

const processOrder = (price, quantity, callback) => {
    let totalPrice = price * quantity;
    if (callback) {
        return callback(totalPrice);
    }
    return totalPrice;
};

// console.log(processOrder(1000, 5));

// ==========================================
// 2단계: 무료 배송 확인하기 (Boolean 반환)
// ==========================================
// 위에서 만든 `processOrder` 함수를 호출하여 아래 로직을 작성하세요.
// 1. 상품 가격: 2500원, 개수: 30개
// 2. 콜백 함수 내용:
//    - 총 금액이 50,000원 이상이면 true(무료배송 가능), 아니면 false를 리턴하세요.
// 3. 반환된 결과를 `isFreeShipping` 변수에 담고 콘솔에 출력하세요.

// const isFreeShipping = processOrder(2500, 30, (totalPrice) => {
//     return totalPrice >= 50000 ? "무료배송 가능" : false;
// });

// console.log(isFreeShipping);

// ==========================================
// 3단계: VIP 할인 쿠폰 적용하기 (String 반환)
// ==========================================
// 다시 한 번 `processOrder` 함수를 호출하되, 이번에는 10% 할인을 적용합니다.
// 1. 상품 가격: 50000원, 개수: 2개
// 2. 콜백 함수 내용:
//    - 전달받은 총 금액에서 10%를 깎으세요. (힌트: total * 0.9)
//    - 계산된 할인 금액 뒤에 "원 결제 완료"라는 문구를 붙여 리턴하세요.
//      (예: "90000원 결제 완료")
// 3. 반환된 결과를 `paymentResult` 변수에 담고 콘솔에 출력하세요.

const paymentResult = processOrder(50000, 2, (totalPrice) => {
    let salePrice = totalPrice - totalPrice * 0.1;
    return salePrice + "원 결제 완료";
});

console.log(paymentResult);
