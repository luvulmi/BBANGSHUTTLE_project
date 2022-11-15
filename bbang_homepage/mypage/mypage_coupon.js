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

  if (e.target.hasAttribute('href')) {
    precouponBtn.parentNode.classList.remove('active');
    e.target.parentNode.classList.add('active');

    preContent.style.display = "none";
    currentContent.style.display = "block";

    precouponBtn = e.target;
    preContent = currentContent;
  }
}

// 첫번째 내용 보이기
useCoupon1.style.display = "block";
// 클릭 이벤트
couponTab.addEventListener('click', Btn_click);