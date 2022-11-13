'use strict';

const faq = document.querySelector('.faq_board'),
  faqList = faq.querySelectorAll('.faq_board li');

// 모두 숨기기
function hide() {
  for (let q of faqList) {
    q.classList.add('hide');
  }
}

hide();

// 누를 시 이벤트
for (let p of faqList) {
  p.addEventListener('click', function () {
    if (p.classList.contains('hide')) {
      hide();
      this.classList.remove('hide');
    } else {
      p.classList.add('hide');
    }
  });
}