/**
 * const, let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能（意図しない再宣言が発生する可能性がある）
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書きが可能
// val2 = "let変数を上書き"
// console.log(val2);

// // let変数は再宣言不可能（意図しない再宣言を防ぐ）
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // // const変数は上書き不可
// // val3 = "const変数を上書き";

// // const変数は再宣言不可
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ちーまろ",
//   age: 36
// };
// val4.name = "chimaro";
// val4.address = "Tokyo"
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["doc", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "ちーまろ";
// const age = 36;
// // 仕様:「私の名前はちーまろです。年齢は36歳です。」
// // 従来の表記方法
// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);

// // テンプレート文字列を用いた表記方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// // 従来の関数
// // function func1(str) {
// //   return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// // const func2 = (str) => {
// //   return str;
// // }
// // 引数が1つの場合、かっこを省略可能
// // 戻り値が単一式の場合、return を省略可能
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ちーまろ",
//   age: 36
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`
// console.log(message2);

// const myProfile = ['ちーまろ', 36];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// // 配列のindexに従い値が設定される
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("ちーまろ");
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2, 9];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);  // スプレッド構文では値渡し

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // 単純に=でコピーすると参照渡しとなり、コピー先の値を変更した際にコピー元の値も変更される
// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfillterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "ちーまろ"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です。`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));
// 上記は下記と同じ意味（戻り値が単一式の場合、return を省略可能）
// nameArr.map((name) => {
//   console.log(name);
// });
// 第2引数でindexをとることが可能
// nameArr.map((name, i) => console.log(`${i}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const numArr2 = numArr.filter((num) => {
//   // 条件を記述する。一致した値が返却される
//   return num % 2 === 1;
// });
// console.log(numArr2);

// 仕様:自分の名前以外にさんを付ける
// const newNameArr = nameArr.map((name) => {
//   if (name === "ちーまろ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです"
// console.log(val1);

// const num = 1300;
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 50));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1または2はtrueです");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueです");
// }

const num = null;
const fee = num || "金額未設定です";
console.log(fee);
