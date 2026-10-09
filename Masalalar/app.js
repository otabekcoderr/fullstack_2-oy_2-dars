// let yosh = +prompt("Yoshingizni kiriting");

// if (yosh >= 60) {
//   console.log("Pensaga chiqing");
// } else if (40 <= yosh && yosh < 60) {
//   console.log("Orta yoshsiz");
// } else if (25 <= yosh && yosh < 40) {
//   console.log("Ishni qiling");
// } else if (18 <= yosh && yosh < 25) {
//   console.log("Uylaning");
// } else if (7 <= yosh && yosh < 18) {
//   console.log("O'qishizni o'qing");
// } else if (0 <= yosh && yosh < 7) {
//   console.log("Kashayizni yeng");
// } else {
//   console.log("Oldin tug'ulib oling");
// }

//2-masala

// let num1 = +prompt("birinchi sonni kiriting");
// let num2 = +prompt("ikkinchi sonni kiriting");

// let max = Number(num1 < num2) + num1 + 1 || (Number(num1 > num2) + num1 - 1);
// let min = Number(num1 > num2) + num1 - 1;
// console.log(max);
// console.log(min);

let a = +prompt("Birinchi sonni kiriting");
let b = +prompt("Ikkinchi sonni kiriting");
let amal = +prompt("Amal kiriting: 1-qo'shish,2-ayirish,3-bo'lish,4-ko'paytirish");

switch(amal){
    case 1:
        console.log(`Natija: ${a+b}`);
        break;
    case 2:
        console.log(`Natija: ${a-b}`);
        break;
    case 3:
        console.log(`Natija: ${a/b}`);
        break;
    case 4:
        console.log(`Natija: ${a*b}`);
        break;
    default:
        console.log("Boshqa amal yo'q");
        
}