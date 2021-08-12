// TALLEST MOUNTAIN -------------------

//interface
interface Mountain {
    name:string;
    height:number;
}

//array of interface objects
let mountains:Mountain[] = [
{name:"Kilimanjaro", height:19341},
{name:"Everest", height:29029},
{name:"Denali", height:20310}

]

//function
const nameOfTallestMountain = (mtArry:Mountain[]) : string => {

    let result:Mountain = {name:"", height:1}
    mtArry.forEach(i => {
        if(i.height > result.height) {
            result = i;
        }
    });

    return result.name;
}

//result
let tallestMt = nameOfTallestMountain(mountains);
console.log(tallestMt);


//PRODUCTS -------------------

//interface
interface product {
    name:string;
    price:number
}

//array of interface objects
let shop: product[] = [
    {name: "Pop Tarts", price: 1.59},
    {name: "Baja Blast", price: 2.09},
    {name: "Gummi Worms", price: 1.75},
    {name: "Hotdog", price: 2.50}
]

//function
const calcAverageProductPrice = (productArry:product[]) : number => {

    let sum:number =0;
    for(let i =0; i < productArry.length; i++) {
        sum += productArry[i].price
    }
        
    var avg = sum / productArry.length;
    return avg;
        
}

//result
let avgPrice = calcAverageProductPrice(shop);
console.log(avgPrice);


//INVENTORY -------------------

//interface
interface inventoryItem {
    product:product,
    quantity:number
}

//array of interface objects
let inventory:inventoryItem[] = [
    {product: {name:"motor", price:10}, quantity:10},
    {product: {name:"sensor", price:12.50}, quantity:4},
    {product: {name:"LED", price:1}, quantity:20}
]

//function
const calcInventoryValue = (inventoryArry:inventoryItem[]) : number => {

    let sum:number=0;
    inventoryArry.forEach(i => {
        sum += i.product.price * i.quantity;
    });

    return sum;
}

let inventorySum:number = calcInventoryValue(inventory);
console.log(inventorySum);