const coding = ['js', 'cpp', 'rb', 'py']

//NoName  of function bcs callback fn hai, naam kuch bhi kah skte
// coding.forEach( function (item) {
//     console.log(item);
// })

//ARROW Fn  *greet = () => {}
// coding.forEach( (item) => {
//     console.log(item);
// }  )

// function printMe(val){
//     console.log(val);
// }

// coding.forEach(printMe) //reference dena hai execute nhi karna hai

//aur bhi parameters bhi ate
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCode = [
    {
        langName: 'Javascript',
        ext: 'js'
    },
    {
        langName: 'Python',
        ext: 'py'
    },
    {
        langName: 'C',
        ext: 'c'
    }
]
//array ke item jo ki OBJ hai, uski 2 prop hai

myCode.forEach( (item) => {
    console.log(item.ext);
})