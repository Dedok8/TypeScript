"use strict";
// 1. Чернетка товару:
//  Описати тип Auto (id, марка, колір, рік_випуску, власник).
// Потім описати DraftAuto для збереження неповних описів даних про авто у localStorage.
const autoUser = {
  id: 1,
  brand: "BMW",
  owner: "Ivan",
};
function saveAuto(auto) {
  return localStorage.setItem("data", JSON.stringify(auto));
}
const res = saveAuto(autoUser);
console.log(res);
