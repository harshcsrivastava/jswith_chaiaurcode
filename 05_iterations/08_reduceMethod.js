// accumulator - default value 0
// current value - array element

const num = [1,2,3]

// const total = num.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval ${currval}`);
//     return acc + currval
// }, 0)
// ?OR
// const total = num.reduce( (acc, currval) => acc+currval, 0)
// console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const sumTotal = shoppingCart.reduce( (acc,price) => acc + price,0) //obj return kar rha

const sumTotal = shoppingCart.reduce( (acc, item) => acc + item.price,0) //obj return kar rha

//Practical me conditions lagayenge ki strings nhi aye

console.log("SumTotal: " +sumTotal);