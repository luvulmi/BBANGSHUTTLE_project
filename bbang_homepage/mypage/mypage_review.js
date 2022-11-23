// ============== 리뷰 탭 ===============
const reviewTab = document.querySelector('.review_tab'),
    reviewBtn = reviewTab.querySelectorAll('.review_tab a'),
    writeReview = document.querySelector('.write_review'),
    myReview = document.getElementById('writeable_review');

let prereviewBtn = reviewBtn[0],
    preContent1 = myReview;

// 버튼 클릭 시 동작할 함수
function Btn_click2(e) {
    e.preventDefault();
    let currentContent1 = writeReview.querySelector(e.target.getAttribute('href'));

    console.log(currentContent1);
    if (e.target.hasAttribute('href')) {
        prereviewBtn.parentNode.classList.remove('active');
        e.target.parentNode.classList.add('active');

        preContent1.style.display = "none";
        currentContent1.style.display = "block";

        prereviewBtn = e.target;
        preContent1 = currentContent1;
    }
}

// 첫번째 내용 보이기
myReview.style.display = "block";
// 클릭 이벤트
reviewTab.addEventListener('click', Btn_click2);