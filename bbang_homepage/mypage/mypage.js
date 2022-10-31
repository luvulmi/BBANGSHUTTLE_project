'use strict';

const date = new Date();
const $input = document.querySelectorAll('.bx_term input[type="date"]');

function getDate(date) {s
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