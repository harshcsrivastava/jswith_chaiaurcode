// const coding = ['js', 'cpp', 'rb', 'py']

// //inside a variable, kuch return nhi kiya
// const val = coding.forEach( (item) => {
//     return item //undefined
// })

const myNums = [1,2,3,4,5,6,7,8,9]

//filter bhi callback leta hai, Ye value return karta , for each nhi krta
// let newNums = myNums.filter( (num) => num >4)
// let newNums = myNums.filter( (num) => {
//    return num > 4 //eturn use krna  kyoki scope start kiya hai, arrow fn me bataya tha
// })

//OR

// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter( (bk) => {
//     if(bk.genre == 'Fiction'){
//         return bk
//     }
//   })

// OR
const userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre == 'History'
})

  console.log(userBooks);