// TALLEST MOUNTAIN -------------------
//array of interface objects
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
//function
var nameOfTallestMountain = function (mtArry) {
    var result = { name: "", height: 1 };
    mtArry.forEach(function (i) {
        if (i.height > result.height) {
            result = i;
        }
    });
    return result.name;
};
//result
var tallestMt = nameOfTallestMountain(mountains);
console.log(tallestMt);
//array of interface objects
var shop = [
    { name: "Pop Tarts", price: 1.59 },
    { name: "Baja Blast", price: 2.09 },
    { name: "Gummi Worms", price: 1.75 },
    { name: "Hotdog", price: 2.50 }
];
//function
var calcAverageProductPrice = function (productArry) {
    var sum = 0;
    for (var i = 0; i < productArry.length; i++) {
        sum += productArry[i].price;
    }
    var avg = sum / productArry.length;
    return avg;
};
//result
var avgPrice = calcAverageProductPrice(shop);
console.log(avgPrice);
//array of interface objects
var inventory = [
    { product: { name: "motor", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1 }, quantity: 20 }
];
//function
var calcInventoryValue = function (inventoryArry) {
    var sum = 0;
    inventoryArry.forEach(function (i) {
        sum += i.product.price * i.quantity;
    });
    return sum;
};
var inventorySum = calcInventoryValue(inventory);
console.log(inventorySum);
