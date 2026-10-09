//if1

// let num = +prompt("Butun son kiriting");
// num > 0? alert(`Siz kiritgan son (Musbat) va natija: ${num + 1}`): alert(`Siz kiritgan son (Manfiy) va natija ${num - 1}`);

//if2
// let a = 2;
// let b = 4;
// let c = -5;

//if3
// let a = 5;
// let b = 2;
// let c = 9;

// let min = a;
// let max = a;

// if(c<min) min=c;
// if(b<min) min=b;

// if(max<b) max = b;
// if(max<c) max = c
// console.log(`Eng kichik son: ${min}\nEng katta son ${max}`);

//if4

// let a = 3;
// let b = 5;
// let c = 5;

// if (a == b) {
//   console.log(`Tengi yo'q son uchinchi ya'ni ${c}`);
// } else if (b == c) {
//   console.log(`Tengi yo'q son birinchi raqam ya'ni ${a}`);
// } else if (a == c) {
//   console.log(`Tengi yo'q sob ikkinchi raqam ya'ni ${b}`);
// }

//if5

// let x = 34;
// if (x<-2 || x>2){
//     console.log(`Natija: ${2*x}`);
// }else{
//     console.log(`Natija: ${-3*x}`);

// }

//if6
// let num = -7;

// if (num > 0 && num % 2 == 0) {
//   console.log("Musbat juft");
// } else if (num > 0 && num % 2 == 1) {
//   console.log("Musbat toq");
// } else if (num < 0 && num % 2 == 0) {
//   console.log("Manfit juft");
// } else if (num < 0 && num % 2 != 0) {
//   console.log("Manfiy toq");
// }

//case 1
// let num = +prompt("Hafta kun raqamini kiriting");

// switch (num) {
//   case 1:
//     alert("Dushanba");
//     break;
//   case 2:
//     alert("Seshanba");
//     break;
//   case 3:
//     alert("Chorshanba");
//     break;
//   case 4:
//     alert("Payshanba");
//     break;
//   case 5:
//     alert("Juma");
//     break;
//   case 6:
//     alert("Shanba");
//     break;
//   case 7:
//     alert("Yakshanba");
//     break;
//   default:
//     alert("Bunday hafta kuni yo'q");
// }

//case 2

// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let amal = +prompt(
//   "Amal kiriting: 1-qo'shish,2-ayirish,3-bo'lish,4-ko'paytirish",
// );

// switch (amal) {
//   case 1:
//     console.log(`Natija: ${a + b}`);
//     break;
//   case 2:
//     console.log(`Natija: ${a - b}`);
//     break;
//   case 3:
//     console.log(`Natija: ${a / b}`);
//     break;
//   case 4:
//     console.log(`Natija: ${a * b}`);
//     break;
//   default:
//     console.log("Boshqa amal yo'q");
// }

//case 3

// let num = +prompt("20-69 ga yosh kiriting");

// if (num >= 20 && num <= 69) {
//   let on = Math.floor(num / 10);
//   let bir = Math.floor(num % 10);

//   let on = "";
//   let bir = "";
//   switch (on) {
//     case 2:
//       on = "Yigirma";
//       break;
//     case 3:
//       on = "O'ttiz";
//       break;
//     case 4:
//       on = "Qirq";
//       break;
//     case 5:
//       on = "Ellik";
//       break;
//     case 6:
//       on = "Oltmish";
//       break;
//     default:
//       alert("Qoidaga amal qiling !");
//   }
//   switch (bir) {
//     case 1:
//       bir = "bir";
//       break;
//     case 2:
//       bir = "ikki";
//       break;
//     case 3:
//       bir = "uch";
//       break;
//     case 4:
//       bir = "to'rt";
//       break;
//     case 5:
//       bir = "besh";
//       break;
//     case 6:
//       bir = "olti";
//       break;
//     case 7:
//       bir = "yetti";
//       break;
//     case 8:
//       bir = "sakkiz";
//       break;
//     case 9:
//       bir = "to'qqiz";
//       break;
//     default:
//       alert("Nimadir xato");
//   }
//   console.log(`${on} ${bir} yosh`);
// } else {
//   alert("Faqat 20 va 69 yosh oralig'ini kiriting");
// }

// Uyga vazifa \\

//if 1
// let num = +prompt("Son kiriting");

// (num>0)?(alert(`Natija: ${num+1}`)):alert(`Natija: ${num}`)

//if2
// let num = +prompt("Son kiriting");

// if (num > 0) {
//   console.log(`Natija: ${num + 1}`);
// } else if (num < 0) {
//   console.log(`Natija: ${num - 2}`);
// } else {
//   num = 10;
//   console.log(`Natija: ${num}`);
// }

//if3

// let a = +prompt("birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("Uchinchi sonni kiriting");

// let musbat = 0;
// if (a > 0) musbat++;
// if (b > 0) musbat++;
// if (c > 0) musbat++;

// console.log(`Natija: ${musbat}ta musbat son bor`);

//if4

// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");

// let max = (a>b && a) || b;
// console.log(`Natija: ${max}`);

//if5

// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");

// (a<b)?(alert("Birinchi son kichik")):(alert(`Ikkinchi son kichik`))

//if6

// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");

// let max = (a>b&&a)||b;
// let min = (a<b&&a)||b;

// console.log(`Natija: Katta (${max}) kichik(${min})`);

//if7

// let a = 19;
// let b = 12;
// let num = 0;
// if (a > b) {
//   num = a;
//   a = b;
//   b = num;
//   console.log(`Natija: A=${a} B=${b}`);
// } else {
//   console.log(`Natija: A=${a} B=${b}`);
// }

//if8

// let a = 10;
// let b = 10;
// let num = 0
// if (a != b) {
//     num = a+b
//   a = num;
//   b = num;
//   console.log(`Natija: A=${a} B=${b}`);
// } else {
//   a = 0;
//   b = 0;
//   console.log(`Natija: A=${a} B=${b}`);
// }

//if9

// let a = 19;
// let b = 10;

// let max = (a > b && a) || b;
// if (a != b) {
//   a = max;
//   b = max;
//   console.log(`Natija: A=${a} B=${b}`);
// } else {
//   a = 0;
//   b = 0;
//   console.log(`Natija: A=${a} B=${b}`);
// }

//if10
// let a = 10;
// let b = 4;
// let c = 30;

// let max = (a > b && a) || b;
// let min = (a < b && a) || b;

// if (c <= min) {
//   min = c;
//   console.log("Kchik: ", min);
// } else {
//   console.log(`Kichik: ${min}`);
// }

//if11
// let a = 10;
// let b = 4;
// let c = 30;

// let max = (a > b && a) || b;
// let min = (a < b && a) || b;

// if ((max==a && max==b (max-min))) {
//   console.log("O'rtacha: ", min);
// } else if (max>a && max!=b) {
//   console.log(`O'rtacha: ${c}`);
// }

//if11

// let a = 2;
// let b = 3;
// let c = 4;

//   if ((b >= a && c <= a) || (c >= a && b <= a))
//   {
//     console.log(a);

//   }
//   else if ((a >= b && c <= b) || (c >= b && a <= b))
//   {
//     console.log(b);

//   }
//   else if ((c >= a && b <= c) || (b >= c && a <= c))
//   {
//     console.log(c);

//   }

//if12

// let a = 12;
// let b = 6;
// let c = 54;

// let max = (a>b && a)||b;

// if ((b >= a && c <= a) || (c >= a && b <= a) && a!=max) {
//   console.log(a,max);
// } else if ((a >= b && c <= b) || (c >= b && a <= b) && b!=max) {
//   console.log(b,max);
// } else if ((c >= a && b <= c) || (b >= c && a <= c) && c!=max) {
//   console.log(c,max);
// }

//if13

// let a = 5;
// let b = 4;
// let c = 6;

// if (a < b && b < c) {
//   console.log(`Natija: A=${a * 2} B=${b * 2} C=${c * 2}`);
// } else {
//   console.log(`Natija: A=${a * -1} B=${b * -1} C=${c * -1}`);
// }

//if14

// let a = 5;
// let b = 4;
// let c = 6;

// if ((a < b && b < c) || (a>b&& b>c)) {
//   console.log(`Natija: A=${a * 2} B=${b * 2} C=${c * 2}`);
// } else {
//   console.log(`Natija: A=${a * -1} B=${b * -1} C=${c * -1}`);
// }

//if15

// let a = 6;
// let b = 6;
// let c = 6;
// let d = 6;

// if (a == b && b == c) {
//   console.log(`4-son`);
// } else if (a == b && b == d) {
//   console.log(`3-son`);
// } else if (a == c && c == d) {
//   console.log(`2-son`);
// } else if (b == c && c == d) {
//   console.log(`1-son`);
// } else if (a == b && b == c && c == d) {
//   console.log("Barchasi teng");
// } else {
//   console.log(`Hech qaysisi teng emas`);
// }

//if 16

// let x = 0;

// if (x <= 0) {
//   console.log(-x);
// } else if (0 < x && x < 2) {
//   console.log(x ** 2);
// } else if (x >= 2) {
//   console.log(4);
// }

//if17

// let yil = 2100;

// if ((yil % 4 === 0 && yil%100!==0)|| (yil%400===0)) {
//   console.log(`Kabisa yil va 366 kun bor`);
// } else{
//   console.log(`Kabisa yil emas va 365 kun bor`);
// }

//if18

// let num = 777;

// if (num > 1 && num < 1000) {
//   if (num < 100 && num % 2 == 0) {
//     console.log("Ikki xonali juft son");
//   } else if (num < 100 && num % 2 != 0) {
//     console.log("Ikki xonali toq son");
//   } else if (num >= 100 && num % 2 == 0) {
//     console.log("Uch xonali juft son");
//   } else if (num >= 100 && num % 2 != 0) {
//     console.log("Uch xonali toq son");
//   }
// } else {
//   console.log("Sonlar 1-999 oralig'ida bo'lishi kerak");
// }

//case 1
//.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo).
// let baho = 4;

// switch (baho) {
//   case 1:
//     console.log("Yomon");
//     break;
//   case 2:
//     console.log("Qoniqarsiz");
//     break;
//   case 3:
//     console.log("Qoniqarli");
//     break;
//   case 4:
//     console.log("Yaxshi");
//     break;
//   case 5:
//     console.log("A'lo");
//     break;
//   default:
//     console.log("xato");
// }

//case 2

// let oy = 3;

// switch (oy) {
//   case 1:
//     console.log("1-chi oy qish");
//     break;
//   case 2:
//     console.log("2-chi oy qish");
//     break;

//   case 3:
//     console.log("3-chi oy bahor");
//     break;
//   case 4:
//     console.log("4-chi oy bahor");
//     break;
//   case 5:
//     console.log("5-chi oy bahor");
//     break;

//   case 6:
//     console.log("6-chi oy yoz");
//     break;
//   case 7:
//     console.log("7-chi oy yoz");
//     break;
//   case 8:
//     console.log("8-chi oy yoz");
//     break;

//   case 9:
//     console.log("9-chi oy kuz");
//     break;
//   case 10:
//     console.log("10-chi oy kuz");
//     break;
//   case 11:
//     console.log("11-chi oy kuz");
//     break;

//   case 12:
//     console.log("12-chi oy qish");
//     break;
//   default:
//     console.log("1-12 oralig'ida son kiriting");
//     break;
// }

//case 3

// let oy = 5;

// switch (oy) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(31);
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(30);
//     break;

//   case 2:
//     console.log("28 yoki 29");
//     break;

//   default:
//     console.log("xato");
// }

//case 4

// let num = +prompt("Son kiriting");
// let olchov = +prompt(
//   "1-desimetr, 2-kilometr, 3-metr,4-millimeter, 5- santimetr. ",
// );

// switch (olchov) {
//   case 1:
//     console.log(`Natija:${num} desimetr ${num / 10} metr`);
//     break;
//   case 2:
//     console.log(`Natija:${num} kilometr ${num * 1000} metr`);
//     break;
//   case 3:
//     console.log(`Natija: Bizda faqat metrga o'tkaziladi,metr==metr`);
//     break;
//   case 4:
//     console.log(`Natiaj: ${num} millimetr ${num / 1000} metr`);
//     break;
//   case 5:
//     console.log(`Natija: ${num} santimetr ${num / 100} metr`);
//     break;
//   default:
//     console.log("Boshqa o'lchob birligi hozircha yo'q");
//     break;
// }

//case 5

// let num = +prompt("Son kiriting");
// let olchov = +prompt("1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5-sentner");

// switch (olchov) {
//   case 1:
//     console.log(
//       `Natija: Bizda faqat kilogrammga o'tkaziladi, kilogramm == kilogramm (${num} kg)`,
//     );
//     break;
//   case 2:
//     console.log(`Natija: ${num} milligramm ${num / 1000000} kilogramm`);
//     break;
//   case 3:
//     console.log(`Natija: ${num} gramm ${num / 1000} kilogramm`);
//     break;
//   case 4:
//     console.log(`Natija: ${num} tonna ${num * 1000} kilogramm`);
//     break;
//   case 5:
//     console.log(`Natija: ${num} sentner ${num * 100} kilogramm`);
//     break;
//   default:
//     console.log("Boshqa og'irlik o'lchov birligi hozircha yo'q");
//     break;
// }

//case 6

// let kun = 12;
// let oy = 4;
// if (kun !== 29 && oy !== 2 && kun >= 1 && kun <= 32 && oy >= 1 && oy <= 12) {
//   switch (oy) {
//     case 1:
//       console.log(`${kun}-yanvar`);
//       break;
//     case 2:
//       console.log(`${kun}-fevral`);
//       break;
//     case 3:
//       console.log(`${kun}-mart`);
//       break;
//     case 4:
//       console.log(`${kun}-aprel`);
//       break;
//     case 5:
//       console.log(`${kun}-may`);
//       break;
//     case 6:
//       console.log(`${kun}-iyun`);
//       break;
//     case 7:
//       console.log(`${kun}-iyul`);
//       break;
//     case 8:
//       console.log(`${kun}-avgust`);
//       break;
//     case 9:
//       console.log(`${kun}-sentyabr`);
//       break;
//     case 10:
//       console.log(`${kun}-oktyabr`);
//       break;
//     case 11:
//       console.log(`${kun}-noyabr`);
//       break;
//     case 12:
//       console.log(`${kun}-dekabr`);
//       break;
//     default:
//       console.log("Bunday oy mavjud emas");
//       break;
//   }
// } else {
//   console.log("xato");
// }

//case 7

// let kun = 12;
// let oy = 40;
// if (kun !== 28 && oy !== 2 && kun >= 1 && kun <= 32) {
//   switch (oy) {
//     case 1:
//       console.log(`${kun + 1}-yanvar`);
//       break;
//     case 2:
//       console.log(`${kun + 1}-fevral`);
//       break;
//     case 3:
//       console.log(`${kun + 1}-mart`);
//       break;
//     case 4:
//       console.log(`${kun + 1}-aprel`);
//       break;
//     case 5:
//       console.log(`${kun + 1}-may`);
//       break;
//     case 6:
//       console.log(`${kun + 1}-iyun`);
//       break;
//     case 7:
//       console.log(`${kun + 1}-iyul`);
//       break;
//     case 8:
//       console.log(`${kun + 1}-avgust`);
//       break;
//     case 9:
//       console.log(`${kun + 1}-sentyabr`);
//       break;
//     case 10:
//       console.log(`${kun + 1}-oktyabr`);
//       break;
//     case 11:
//       console.log(`${kun + 1}-noyabr`);
//       break;
//     case 12:
//       console.log(`${kun + 1}-dekabr`);
//       break;
//     default:
//       console.log("Bunday oy mavjud emas");
//       break;
//   }
// } else {
//   console.log("xato");
// }

//case 8

//("s"-shimol, "j"-janub, "q"-sharq,"g"-g'arb)
// 0-harakni davom ettir, 1-chapga buril,2-o`ngga buril.

// let y = "s";
// let h = 1;

// switch (y) {
//   case "s":
//     switch (h) {
//       case 0:
//         console.log("Shimolda");
//         break;
//       case 1:
//         console.log("G'arb");
//         break;
//       case 2:
//         console.log("Sharq");
//         break;
//       default:
//         console.log("Boshqa harakat yo'q");
//         break;
//     }
//     break;
//   case "j":
//     switch (h) {
//       case 0:
//         console.log("Janub");
//         break;
//       case 1:
//         console.log("Sharq");
//         break;
//       case 2:
//         console.log("G'arb");
//         break
//       default:
//         console.log("Boshqa harakat yo'q");
//         break;
//     }
//     break;
//   case "q":
//     switch (h) {
//       case 0:
//         console.log("sharq");
//         break;
//       case 1:
//         console.log("shimol");
//         break;
//       case 2:
//         console.log("Janub");
//         break;
//       default:
//         console.log("Boshqa harakat yo'q");
//         break;
//     }
//   case "g":
//     switch (h) {
//       case 0:
//         console.log("G'arb");
//         break;
//       case 1:
//         console.log("Janub");
//         break;
//       case 2:
//         console.log("Shimol");
//         break;
//       default:
//         console.log("Boshqa harakat yo'q");
//         break;
//     }
//     break;
//   default:
//     console.log("Boshqa yo'nalish yo'q yo'q");
//     break;
// }

//case 9

// O'yin kartasi turlari berilgan 1-g`isht, 2-olma, 3-chillak, 4-qarg`a. 10 lik kartadan katta kartalar quyidagi qiymatlarni o`zlashtirgan: 11-valet, 12-dama,13-qirol, 14-tuz. Ikkita butun son berilgan N-karta qiymati (6≤ N ≤14), M-kartaturi(1≤M ≤4) kiritilganda karta nomlarini (masalan: "olti qarg`a”) chiqaribberuvchi programma tuzilsin

// let N = 7;
// let M =3;

// let Nkarta = "";
// let Mkarta = "";

// if (6 <= N && N <= 14) {
//   switch (N) {
//     case 6:
//       Nkarta = "olti";
//       break;
//     case 7:
//       Nkarta = "yetti";
//       break;
//     case 8:
//       Nkarta = "sakkiz";
//       break;
//     case 9:
//       Nkarta = "to'qqiz";
//       break;
//     case 10:
//       Nkarta = "o'n";
//       break;
//     case 11:
//       Nkarta = "valet";
//       break;
//     case 12:
//       Nkarta = "dama";
//       break;
//     case 13:
//       Nkarta = "qirol";
//       break;
//     case 14:
//       Nkarta = "tuz";
//       break;
//   }
// }
//  if (M >= 1 && M <= 4) {
//   switch (M) {
//     case 1:
//       Mkarta = "g'isht";
//       break;
//     case 2:
//       Mkarta = "olma";
//       break;
//     case 3:
//       Mkarta = "chillak";
//       break;
//     case 4:
//       Mkarta = "qarg'a";
//       break;
//   }
//   console.log(`${Nkarta} ${Mkarta}`);
// } else {
//   console.log("Xato");
// }

//case 10

// let num = 25;

// let on = Math.floor(num / 10);
// let bir = num % 10;

// let on = "";
// let bir = "";
// if (num >= 10 && num <= 40) {
//   switch (on) {
//     case 1:
//       on = "o'n";
//       break;
//     case 2:
//       on = "yigirma";
//       break;
//     case 3:
//       on = "o'ttiz";
//       break;
//     case 4:
//       on = "qirq";
//       break;
//   }

//   switch (bir) {
//     case 1:
//       bir = "bir";
//       break;
//     case 2:
//       bir = "ikki";
//       break;
//     case 3:
//       bir = "uch";
//       break;
//     case 4:
//       bir = "to'rt";
//       break;
//     case 5:
//       bir = "besh";
//       break;
//     case 6:
//       bir = "olti";
//       break;
//     case 7:
//       bir = "yetti";
//       break;
//     case 8:
//       bir = "sakkiz";
//       break;
//     case 9:
//       bir = "to'qqiz";
//       break;
//   }
//   if(bir==0){
//     console.log(`${on}ta masala`);

//   }else{
//   console.log(`${on} ${bir}ta masala`);
//   }
// }

//case 11

// let son = +prompt("100 dan 999 gacha son kiriting:");

// if (son >= 100 && son <= 999) {
//   let yuz = Math.floor(son / 100);
//   let on = Math.floor((son % 100) / 10);
//   let bir = son % 10;

//   let yuzlik = "";
//   let onlik = "";
//   let birlik = "";

//   switch (yuz) {
//     case 1:
//       yuzlik = "bir yuz";
//       break;
//     case 2:
//       yuzlik = "ikki yuz";
//       break;
//     case 3:
//       yuzlik = "uch yuz";
//       break;
//     case 4:
//       yuzlik = "to'rt yuz";
//       break;
//     case 5:
//       yuzlik = "besh yuz";
//       break;
//     case 6:
//       yuzlik = "olti yuz";
//       break;
//     case 7:
//       yuzlik = "yetti yuz";
//       break;
//     case 8:
//       yuzlik = "sakkiz yuz";
//       break;
//     case 9:
//       yuzlik = "to'qqiz yuz";
//       break;
//   }

//   switch (on) {
//     case 1:
//       onlik = " o'n";
//       break;
//     case 2:
//       onlik = " yigirma";
//       break;
//     case 3:
//       onlik = " o'ttiz";
//       break;
//     case 4:
//       onlik = " qirq";
//       break;
//     case 5:
//       onlik = " ellik";
//       break;
//     case 6:
//       onlik = " oltmish";
//       break;
//     case 7:
//       onlik = " yetmish";
//       break;
//     case 8:
//       onlik = " sakson";
//       break;
//     case 9:
//       onlik = " to'qson";
//       break;
//     default:
//       onlik = "";
//       break;
//   }

//   switch (bir) {
//     case 1:
//       birlik = " bir";
//       break;
//     case 2:
//       birlik = " ikki";
//       break;
//     case 3:
//       birlik = " uch";
//       break;
//     case 4:
//       birlik = " to'rt";
//       break;
//     case 5:
//       birlik = " besh";
//       break;
//     case 6:
//       birlik = " olti";
//       break;
//     case 7:
//       birlik = " yetti";
//       break;
//     case 8:
//       birlik = " sakkiz";
//       break;
//     case 9:
//       birlik = " to'qqiz";
//       break;
//     default:
//       birlik = "";
//       break;
//   }

//   console.log(`${yuzlik}${onlik}${birlik}`);
// } else {
//   console.log("Faqat 100 dan 999 gacha bo'lgan son kiriting.");
// }

//case 12
// let yil = +prompt("Yilni kiriting (masalan, 1984 yoki undan keyingi):");

// let farq = yil - 1984;

// let rangIndex = Math.floor((((farq % 10) + 10) % 10) / 2);
// let hayvonIndex = ((farq % 12) + 12) % 12;

// let rang = "";
// let hayvon = "";

// switch (rangIndex) {
//   case 0:
//     rang = "Yashil";
//     break;
//   case 1:
//     rang = "Qizil";
//     break;
//   case 2:
//     rang = "Sariq";
//     break;
//   case 3:
//     rang = "Oq";
//     break;
//   case 4:
//     rang = "Qora";
//     break;
// }

// switch (hayvonIndex) {
//   case 0:
//     hayvon = "sichqon";
//     break;
//   case 1:
//     hayvon = "sigir";
//     break;
//   case 2:
//     hayvon = "yo'lbars";
//     break;
//   case 3:
//     hayvon = "quyon";
//     break;
//   case 4:
//     hayvon = "ajdar";
//     break;
//   case 5:
//     hayvon = "ilon";
//     break;
//   case 6:
//     hayvon = "ot";
//     break;
//   case 7:
//     hayvon = "qo'y";
//     break;
//   case 8:
//     hayvon = "maymun";
//     break;
//   case 9:
//     hayvon = "tovuq";
//     break;
//   case 10:
//     hayvon = "it";
//     break;
//   case 11:
//     hayvon = "to'ng'iz";
//     break;
// }

// console.log(`${rang} ${hayvon} yili`);
