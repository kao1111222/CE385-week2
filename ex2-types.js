    // ประกาศตัวแปรครอบคลุม 6 ชนิดข้อมูล
const myString = "สวัสดีครับ";
const myNum = 191;
const myBooleen = true;
let myUndefined;
const myNull = null;
const myArray = [4, 5, 6];


console.log(`ค่า : ${myString} | ชนิด: ${typeof myString}`);
console.log(`ค่า : ${myNum} | ชนิด: ${typeof myNum}`);
console.log(`ค่า : ${myBooleen} | ชนิด: ${typeof myBooleen}`);
console.log(`ค่า : ${myUndefined} | ชนิด: ${typeof myUndefined}`);
console.log(`ค่า : ${myNull} | ชนิด: ${typeof myNull}`);
console.log(`ค่า : ${myArray} | ชนิด: ${typeof myArray}`);
console.log("");

    //ตอบคำถาม
console.log(`4) typeof null ได้ผลเป็น : ${typeof myNull} (ไม่ถูกต้องตรงตามจริง เป็นบั๊กเก่าแก่ของภาษา)`);
console.log(`5) ตัวแปรที่ประกาศแต่ยังไม่ใส่ค่า มีชนิดเป็น : ${typeof myUndefined}`);

const makeNaN = Number("abc"); // สร้าง NaN
console.log(`6) typeof NaN ได้ผลเป็น : ${typeof makeNaN}`);
console.log(`ตรวจสอบว่าเป็น NaN หรือไม่ด้วย Number.isNaN(x) : ${Number.isNaN(makeNaN)}`);
console.log("");

    //การแปลงชนิด
const inputAge = "20";
const inputScore = "85.5";

    //แปลง String เป็น Number ก่อนที่จะนำไปคำนวณบวก 5
const agetoNum = Number(inputAge);
console.log(`ผลบวกอายุ (20 + 5) : ${agetoNum + 5}`)


    // แปลงเป็นตัวเลขและแสดงทศนิยม 1 ตำแหน่ง
const scoretoNum = Number(inputScore);
console.log(`คะแนนแบบทศนิยม 1 ตำแหน่ง : ${scoretoNum.toFixed(1)}`);

console.log(`inputAge === 20 Result : ${inputAge === 20}`) // เป็น false เพราะ "20" (string) ไม้ใช่ 20 (number)
console.log(`Number(inputAge) === 20 Result : ${Number(inputAge) === 20}`) // เป็น true เพราะแปลงชนิดข้อมูล string เป็น number 

