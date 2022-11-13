const items = [
  { image: './images/item1.png', name: '상품 1', review: 20, score: '1.5' },
  { image: './images/item2.png', name: '상품 2', review: 185, score: '3.5' },
  { image: './images/item3.png', name: '상품 3', review: 40, score: '2.0' },
  { image: './images/item4.png', name: '상품 4', review: 21, score: '3.5' },
  { image: './images/item5.png', name: '상품 5', review: 168, score: '4.0' },
  { image: './images/item6.png', name: '상품 6', review: 244, score: '3.0' },
  { image: './images/item7.png', name: '상품 7', review: 158, score: '2.5' },
  { image: './images/item8.png', name: '상품 8', review: 368, score: '4.5' },
  { image: './images/item1.png', name: '상품 1', review: 20, score: '1.5' },
  { image: './images/item2.png', name: '상품 2', review: 185, score: '3.5' },
  { image: './images/item3.png', name: '상품 3', review: 40, score: '2.0' },
  { image: './images/item4.png', name: '상품 4', review: 21, score: '3.5' },
  { image: './images/item5.png', name: '상품 5', review: 168, score: '4.0' },
  { image: './images/item6.png', name: '상품 6', review: 244, score: '3.0' },
  { image: './images/item7.png', name: '상품 7', review: 158, score: '2.5' },
  { image: './images/item8.png', name: '상품 8', review: 368, score: '4.5' },
  { image: './images/item1.png', name: '상품 1', review: 20, score: '1.5' },
  { image: './images/item2.png', name: '상품 2', review: 185, score: '3.5' },
  { image: './images/item3.png', name: '상품 3', review: 40, score: '2.0' },
  { image: './images/item4.png', name: '상품 4', review: 21, score: '3.5' },
  { image: './images/item5.png', name: '상품 5', review: 168, score: '4.0' },
  { image: './images/item6.png', name: '상품 6', review: 244, score: '3.0' },
  { image: './images/item7.png', name: '상품 7', review: 158, score: '2.5' },
  { image: './images/item8.png', name: '상품 8', review: 368, score: '4.5' },
  { image: './images/item1.png', name: '상품 1', review: 20, score: '1.5' },
  { image: './images/item2.png', name: '상품 2', review: 185, score: '3.5' },
  { image: './images/item3.png', name: '상품 3', review: 40, score: '2.0' },
  { image: './images/item4.png', name: '상품 4', review: 21, score: '3.5' },
  { image: './images/item5.png', name: '상품 5', review: 168, score: '4.0' },
  { image: './images/item6.png', name: '상품 6', review: 244, score: '3.0' },
  { image: './images/item7.png', name: '상품 7', review: 158, score: '2.5' },
  { image: './images/item8.png', name: '상품 8', review: 368, score: '4.5' },
];

const $itemsDiv = document.querySelector('div#items');

for (let i = 0; i < items.length; i++) {
  const $itemDiv = document.createElement('div');
  $itemDiv.setAttribute('class', 'item');

  const $itemImage = document.createElement('img');
  $itemImage.src = items[i].image;
  $itemImage.alt = items[i].image.replace('./images/', '').replace('.png', '');

  const $itemImageDiv = document.createElement('div');
  $itemImageDiv.setAttribute('class', 'item-image');
  $itemImageDiv.appendChild($itemImage);

  $itemDiv.appendChild($itemImageDiv);

  const $itemName = document.createElement('p');
  $itemName.setAttribute('class', 'item-name');

  $itemName.textContent = items[i].name;
  $itemDiv.appendChild($itemName);

  const $itemReview = document.createElement('p');
  $itemReview.setAttribute('class', 'item-review');

  $itemReview.innerHTML = '리뷰수 ' + `<span>${items[i].review}</span>`;
  $itemDiv.appendChild($itemReview);

  const $itemScore = document.createElement('p');
  $itemScore.setAttribute('class', 'item-score');

  $itemScore.innerHTML = '평점 ' + `<span>${items[i].score}</span>`;
  $itemDiv.appendChild($itemScore);

  $itemsDiv.appendChild($itemDiv);
}
