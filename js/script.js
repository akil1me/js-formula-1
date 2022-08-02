var introStart = "Assalomu aleykum";
var firstName = "Ismingiz";
var lastName = "Familyangiz";
var age = "Yoshingiz nechida";

var elBody = document.querySelector("body");
var elTitle = document.createElement("h1");
var elText = document.createElement("p");
var elLink = document.createElement("a");

elBody.appendChild(elTitle);
elBody.appendChild(elText);
elBody.appendChild(elLink);

elTitle.setAttribute("class", "visually-hidden");
elText.setAttribute("class", "parahraph");
elLink.setAttribute("class", "link");
elLink.setAttribute("href", "./index.html");

elTitle.textContent = "Formula 1";

var intro = alert(introStart);
var question1 = prompt(firstName).trim();
var question2 = prompt(lastName).trim();
var question3 = Number(prompt(age).trim());

if (isNaN(question3)) {
  alert("Qiymat sonda berilsin!!!");
  elText.textContent = `${question1} ${question2}, siz qiymatni son shaklida berishingiz kerak `;
  elLink.textContent = "qayta urinib ko`ring";
}
else if (question3 < 18) {
  elText.textContent = `${question1} ${question2}, sizni yoshingiz tug'ri kelmaydi uzur`;
  elLink.textContent = "qayta urinib ko`ring";
}
else if (question3 >= 18 && question3 <= 40) {
  elText.textContent = `${question1} ${question2}, sizni yoshingiz bizni talabga tugri keladi, siz bilan yaqin orada a'loqaga chiqamiz`;
  elLink.textContent = "qayta urinib ko`ring";
}
else if (question3 > 41) {
  elText.textContent = `${question1} ${question2}, sizni yoshingiz bizni talabga tug'ri kelmadi, juda kattasiz uzur`;
  elLink.textContent = "qayta urinib ko`ring";
}
else if (question3 < 0) {
  elText.textContent = `${question1} ${question2}, siz manfiq qiymat kiritdingiz, qayta urinig iltimos`;
  elLink.textContent = "qayta urinib ko`ring";
}
else {
  alert("Iltimos yoshingizni kiriting(bo`sh qoldirmang)");
  elText.textContent = `${question1} ${question2}, Iltimos yoshingizni kiriting(bo'sh qoldirmang)`;
  elLink.textContent = "qayta urinib ko`ring";
}