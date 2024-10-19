//  Difference between var , let , and const. 
// VAR IS GLOBAL SCOPE .
// var is function- scoped & allow re-declaration ,
// LET & CONST ARE BLOCK-SCOPED.
// let allow re-assigment but not re-declaration ,
//  while const does'nt allow re-assigment or re-declaration. 
                      // "VAR"
                    // var is global scope .
                  // var allow re-declearation.
// {
// var a = "hello";
// var a = "world";
// var a = " i'm new bee in web development";
// a = "help me out to figure out this new web world.";
// console.log(a);
// }
// document.write(a); value print block of code kay bahar kara saktay haen.
                //   practice
// if (1===1) {
//     var a = "hello";
//     console.log(a);
// }
// console.log(a);
                // practice
// for (var a= 1; a < 5;a++) {
//    document.write(a + "<br>");
// }
// console.log(a);

                       // let is block scope.
    // let allow us to re-assigmengt but not re-declaration.
// {
// let a = "hello";
//  a= "world";
// a= " i'm new bee in web development";
// a = "help me out to figure out this new web world.";
// console.log(a);
// document.write(a);
// }
// document.write(a); value print block of code kay bahar nahi kar saktay 
                        // practice
// if (1===1) {
//     let a = "hello";
//     console.log(a);
// }
// console.log(a);
                   // practice
// for (let a= 1; a<=5;a++) {
//        document.write(a + "<br>");
//         console.log(a);
//     }
    // console.log(a);
         // const does'nt allow us to re-assignment or re-declaration.
                          // const is block scope 
// {
// const a = "hello";
//  const x = "world";
// //  const a= " i'm new bee in web development";
// //  a = "help me out to figure out this new web world.";
// console.log(a);
// console.log(x);
// document.write(a,x);
//  }
//  document.write(a);
       // practice
// if (1===1) {
//     const a = "hello";
//     console.log(a);
// }
// console.log(a);
       //practice 
// for (const a= 5; a<=5; a++) {
//            document.write(a + "<br>");
//             console.log(a);
//         }
//         // console.log(a);