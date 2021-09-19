var ydob = document.getElementById("ydob");
var cd = document.getElementById("cd");
var btn = document.getElementById("btn");
var btn1 = document.getElementById("reload");
let show = () => {
  var bdate = new Date(document.getElementById("dob").value);
  var bday = bdate.getDate();
  var bmonth = bdate.getMonth() + 1;
  var byear = bdate.getFullYear();
  const today = new Date();
  const tday = today.getDate();
  const tmonth = today.getMonth();
  const tyear = today.getFullYear();
  ydob.innerHTML = `${bday}-${bmonth}-${byear}`;
  cd.innerHTML = `${tday}-${tmonth}-${tyear}`;
};

let isLeapYear = (year) => {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
};

let display = (bDate, bMonth, bYear) => {
  document.getElementById("years").textContent = bYear + " Years";
  document.getElementById("months").textContent = bMonth + " Months";
  document.getElementById("days").textContent = bDate + " days";
};

let cal_age = () => {
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let bdate = new Date(document.getElementById("dob").value);
  let bmonth, bday, byear;
  let birthDetails = {
    date: bdate.getDate(),
    month: bdate.getMonth() + 1,
    year: bdate.getFullYear(),
  };
  const today = new Date();
  const tday = today.getDate();
  const tmonth = today.getMonth() + 1;
  const tyear = today.getFullYear();

  isLeapYear(tyear);

  if (
    birthDetails.year > tyear ||
    (birthDetails.month > tmonth && birthDetails.year == tyear) ||
    (birthDetails.date > tday &&
      birthDetails.month == tmonth &&
      birthDetails.year == tyear)
  ) {
    alert("----- NO BORN YET ------");
    display("-", "-", "-");
    return false;
  }

  byear = tyear - birthDetails.year;

  if (tmonth >= birthDetails.month) {
    bmonth = tmonth - birthDetails.month;
  } else {
    byear--;
    bmonth = 12 + tmonth - birthDetails.month;
  }

  if (tday >= birthDetails.date) {
    bday = tday - birthDetails.date;
  } else {
    bmonth--;
    let days = months[tmonth - 2];
    bday = days + tday - birthDetails.date;
    if (bmonth < 0) {
      bmonth = 11;
      byear--;
    }
  }
  display(bday, bmonth, byear);
};

btn.addEventListener("click", function () {
  var bdate = new Date(document.getElementById("dob").value);
  var bday = bdate.getDate();
  var bmonth = bdate.getMonth() + 1;
  var byear = bdate.getFullYear();
  const today = new Date();
  const tday = today.getDate();
  const tmonth = today.getMonth();
  const tyear = today.getFullYear();
  ydob.innerHTML = `${bday}-${bmonth}-${byear}`;
  cd.innerHTML = `${tday}-${tmonth}-${tyear}`;
  document.getElementById("display").style.display = "block";
  document.querySelector("header").style.display = "none";
  cal_age();
});


btn1.addEventListener("click", function () {
  location.reload();
});
