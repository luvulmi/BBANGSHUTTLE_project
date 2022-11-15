// ============== 리뷰 탭 ===============
const reviewTab = document.querySelector('.review_tab'),
    reviewBtn = reviewTab.querySelectorAll('.review_tab a'),
    writeReview = document.querySelector('.write_review'),
    unReview = document.getElementById('un_review');

let prereviewBtn = reviewBtn[0],
    preContent1 = unReview;

// 버튼 클릭 시 동작할 함수
function Btn_click2(e) {
    e.preventDefault();
    let currentContent = writeReview.querySelector(e.target.getAttribute('href'));

    if (e.target.hasAttribute('href')) {
        console.log()
        prereviewBtn.parentNode.classList.remove('active');
        e.target.parentNode.classList.add('active');

        preContent1.style.display = "none";
        currentContent.style.display = "block";

        prereviewBtn = e.target;
        preContent1 = currentContent;
    }
}

// 첫번째 내용 보이기
unReview.style.display = "block";
// 클릭 이벤트
reviewTab.addEventListener('click', Btn_click2);