const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc - ${acc}, currval - ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr , 0)

// console.log(myTotal);


const shoppingCart = [
    {
        item: "js Course",
        price: 2999
    },
    {
        item: "py Course",
        price: 999
    },
    {
        item: "mobile dev Course",
        price: 5999
    },
    {
        item: "data science Course",
        price: 12999
    },
];

const pricetopay = shoppingCart.reduce( (acc,item) => acc + item.price , 0)

console.log(pricetopay);