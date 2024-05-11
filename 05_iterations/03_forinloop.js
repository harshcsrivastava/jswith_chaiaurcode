//ForIn Loops to iterate objects

const lang = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'ruby'
}
// forof not working so using forin, aur bhi kaam hota
// for (const key in lang) {
// //    console.log(key); ise key ata, for value use
//     // console.log(lang[key]);
//     console.log(`${key} Shortcut: ${lang[key]}`);
// }

//forin for array
const arr = ['js', 'cpp', 'rb', 'py']
for (const key in arr) {
    // console.log(key); index ya index kah do deta hai according to size 
}

//Array => forOf Loop, Obj => forIn Loop