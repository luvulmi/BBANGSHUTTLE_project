'use strict';
// ================ 날짜 설정 ================
const date = new Date(),
  nowYear = date.getFullYear(),
  nowDay = date.getDate();

const nowMonth = date.getMonth() + 1;

// 최근 날짜
const bx_term = document.querySelector('.bx_term'),
  dateBtn = bx_term.querySelectorAll('.bx_term button');

let lastTwo = nowMonth - 2;
let lastThree = nowMonth - 3;

dateBtn[0].dataset.month = nowMonth - 1 >= 10 ? nowMonth - 1 : `0${nowMonth - 1}`;
dateBtn[1].dataset.month = lastTwo >= 10 ? lastTwo : `0${lastTwo}`;
dateBtn[2].dataset.month = lastThree >= 10 ? lastThree : `0${lastThree}`;

lastTwo = lastTwo >= 10 ? `${lastTwo}월` : `0${lastTwo}월`;
lastThree = lastThree >= 10 ? `${lastThree}월` : `0${lastThree}월`;

dateBtn[1].textContent = lastTwo;
dateBtn[2].textContent = lastThree;

// 기간 설정
const $input = document.querySelectorAll('.date_input_wrap input[type="date"]');

function getDate(date) {
  let YYYY = date.getFullYear();

  let MM = date.getMonth() + 1;
  MM = MM >= 10 ? MM : `0${MM}`;

  let DD = date.getDate();
  DD = DD >= 10 ? DD : `0${DD}`;

  return `${YYYY}-${MM}-${DD}`;
}

const lastMonth = new Date(date.getTime() - 2678400000);

$input[0].value = getDate(lastMonth);
$input[1].value = getDate(date);

// 최근 날짜 버튼 클릭 시
let preBtn = dateBtn[0];


bx_term.addEventListener('click', function (e) {
  const eBtn = e.target;

  if (eBtn.tagName === 'BUTTON') {
    $input[0].value = `${nowYear}-${eBtn.dataset.month}-${nowDay}`;

    preBtn.classList.remove('active');
    eBtn.classList.add('active');

    preBtn = eBtn;
  }
});

// ================= 쿠폰 탭 ===============
const couponTab = document.querySelector('.coupon_tab'),
  couponBtn = couponTab.querySelectorAll('.coupon_tab a'),
  useCoupon = document.querySelector('.use_coupon'),
  useCoupon1 = document.getElementById('usable_coupon');

let precouponBtn = couponBtn[0],
  preContent = useCoupon1;

// 버튼 클릭 시 동작할 함수
function Btn_click(e) {
  e.preventDefault();
  let currentContent = useCoupon.querySelector(e.target.getAttribute('href'));
  console.log(currentContent);

  if (e.target.hasAttribute('href')) {
    precouponBtn.parentNode.classList.remove('active');
    e.target.parentNode.classList.add('active');

    preContent.style.display = "none";
    currentContent.style.display = "block";

    precouponBtn = e.target;
    preContent = currentContent;
    console.log(preContent);
  }
}

// 첫번째 내용 보이기
useCoupon1.style.display = "block";
// 클릭 이벤트
couponTab.addEventListener('click', Btn_click);
