// function sum(a,b){
//     console.log('a + b = ', a+b);
// }
// sum(3,4);
// ----------------------------------------------------------
// function profile(firstName, middleName,lastName,age){
//     var fullname = firstName + ' ' + middleName + ' ' + lastName;

//     var profile = 'Tôi tên là: ' + lastName + '.' + ' Tên đầy đủ là ' + fullname + '.' + ' Năm nay tôi ' + age + ' tuổi.';

//     console.log(profile);
// }

// profile('Đặng','Ngọc','Hải','20');
// ----------------------------------------------------------
// function getFullName(firstName, middleName,lastName){
//     return firstName + ' ' + middleName + ' ' + lastName;
// }

// function gioiThieu(fullName,age){
//     var description = 'Tôi tên là: ' + fullName +' Năm nay tôi ' + age + ' tuổi.';
//     return description;
// }

// console.log(gioiThieu(getFullName('Đặng' , 'Ngọc' , 'Hải.'),20));
// ----------------------------------------------------------
// function getFullName(firstName,lastName, middleName){
//     var middle;
//     if(middleName){
//         middle=middleName + ' ';
//     }else{
//         middle=' ';
//     }
//     return firstName + ' ' + middleName + lastName;
// }

// function gioiThieu(fullName,age){
//     var description = 'Tôi tên là: ' + fullName +' Năm nay tôi ' + age + ' tuổi.';
//     return description;
// }
var a=(a,b)=>a+b;
a(1,2);
// console.log(gioiThieu(getFullName('Đặng' , 'Hải.' , 'Ngọc '),20));
// ----------------------------------------------------------
// function getFullName(firstName,lastName, middleName){
//     var middle;
//     if(middleName){
//         middle=middleName + ' ';
//     }else{
//         middle=' ';
//     }
//     return firstName + ' ' + middleName + lastName;
// }

// var gioiThieu (fullName,age = 20) => 
// ----------------------------------------------------------

// const math = (num1,num2,type) =>{
//     switch(type){
//         case'sum':{
//             return num1+num2;
//         }
//         case'minus':{
//             return num1-num2;
//         }
//         case'times':{
//             return num1*num2;
//         }
//         case'div':{
//             return num1/num2;
//         }
//     }
// }
// console.log('Tính tổng: '+ math(4,6,'sum'));
// console.log('Tính hiệu: '+ math(4,6,'minus'));
// console.log('Tính tích: '+ math(4,6,'times'));
// console.log('Tính thương: '+math(4,6,'div'));

//viết arrow func trả về tính n giai thừa
// const math = (num1) =>{
//     temp=1;
//     for(n=1;n<=num1;++n){
//         temp*=n;
//     }
//     return temp;
// }
// console.log('Giai thua: '+math(5));
// ----------------------------------------------------------
// var firstName;
// var middleName;
// var lastName;
// var age;


// firstName= 'Đặng'
// middleName= 'Ngọc'
// lastName= 'Hải'
// age = '20'

// var fullname = firstName + ' ' + middleName + ' ' + lastName;
// console.log(fullname);

// var profile = `tôi tên là: ${lastName}. Tên đầy đủ là ${fullname}. Năm nay tôi ${age} tuổi.`
// console.log(profile);
// ----------------------------------------------------------
var object = {
    starDate: '',
    teacher: {},
    student: [{
        name: 'Phuong',
        age: 28
    }]
}

// object.starDate = '28/11/2023';
// object.teacher.fullName = 'Trinh Dinh Phuong';
// object.teacher.age = 29;

// // object.student.push = ['Hai','Thai','Thinh'];
//     object.student.push({
//         name: 'Hai',
//         age: 20
//     });
//     object.student.push({
//         name: 'Thinh',
//         age: 21
//     });

// object.student.pop();

// console.log('Thong tin Sinh vien:', object.student);
// ----------------------------------------------------------
// for(i =0; i<= object.student.length - 1; ++i) {
//     console.log('<<<<< >>>>> ', object.student[i].name);
// }
// ----------------------------------------------------------
// let i =0;
// while(i < object.student.length) {
//     console.log('<<<<< >>>>> ', object.student[i].name);
//     i++;
// }
// ----------------------------------------------------------
// object.student.forEach((student,index) => {
//     console.log(`<<<<< ${index +1} >>>>>`,student.name);
// })

// object.student.map((student,index) => {
//     console.log(`<<<<< ${index +1} >>>>>`,student.name);
// })

// var university = [
//     [
//       {
//         name: 'phuong',
//         description: 'trinh phuong',
//       },
//       {
//         name: 'thai',
//         description: 'van thai',
//       }
//     ],
//     [
//       {
//         name: 'phuong',
//         description: 'hoang phuong',
//       },
//       {
//         name: 'hai',
//         description: 'hoang hai',
//       }
//     ],
//     [
//       {
//         name: 'hung',
//         description: 'hoang hung',
//       },
//       {
//         name: 'thinh',
//         description: 'van thinh',
//       }
//     ],
//   ]



//   console.log('Danh sach ten sinh vien: ');
//   university.map((description,index) => {
//         console.log(`<<<<< ${index +1} >>>>>`,description);
//     })
// ----------------------------------------------------------
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let tong = 0;
arr1.map((num) => {
    tong += num;
})
console.log('tong: ',tong);

const arr2 = [arr1, arr1, arr1];
    
const arr3 = [arr2, arr2, arr2]
console.log('arr3: ', arr3);
arr3.forEach(ba => {
    ba.forEach(hai => {
        hai.forEach(mot => {
            tong += mot;
        })
    })
})
console.log(tong);
// ----------------------------------------------------------
let tich = 1;
console.log('arr3: ', arr3);
arr3.forEach(ba => {
    ba.forEach(hai => {
        hai.forEach(mot => {
            if( mot != 0){
                tich *= mot;
            }
        })
    })
})

console.log(tich);