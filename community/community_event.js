const eventTab = document.querySelector('.event_tab'),
  eventBtn = eventTab.querySelectorAll('.event_tab a'),
  eventlist = document.querySelector('.event_list'),
  event1 = document.getElementById('event_ing');

let preeventBtn = eventBtn[0],
  preContent1 = event1;

// 버튼 클릭 시 동작할 함수
function Btn_click2(e) {
  e.preventDefault();
  let currentContent1 = eventlist.querySelector(e.target.getAttribute('href'));

  if (e.target.hasAttribute('href')) {
    preeventBtn.parentNode.classList.remove('active');
    e.target.parentNode.classList.add('active');

    preContent1.style.display = "none";
    currentContent1.style.display = "block";

    preeventBtn = e.target;
    preContent1 = currentContent1;
  }
}

// 첫번째 내용 보이기
event1.style.display = "block";
// 클릭 이벤트
eventTab.addEventListener('click', Btn_click2);