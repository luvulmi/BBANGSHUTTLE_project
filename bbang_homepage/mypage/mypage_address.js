// ======================== popup =========================
const popup = document.getElementById('popup'),
  closeButton = popup.querySelector('.close'),
  nomore = popup.querySelector('#nomore');

// 하루동안 안보기 체크 경우
if (document.cookie.match('close')) {
  popup.style.display = 'none';
}

// 닫기 버튼 눌렀을 때 닫히기
closeButton.addEventListener('click', function () {
  if (nomore.checked) { // 하루동안 안보기 눌렀을 경우
    let date = new Date(Date.now() + (86400 * 1000));
    document.cookie = 'popup=close;expires=' + date.toUTCString();
  }

  popup.style.display = 'none';
});