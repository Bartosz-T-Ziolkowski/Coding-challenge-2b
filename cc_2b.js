// Coding Challenge 2b

// Code goes here

const itemName = "USB-C Cable";
let unitCost = 4.50;
let currentStock = 150;
let reorderLevel = 45;
let targetStock = 200;
let weeklyDemand = 25;
let supplierLeadTimeWeeks = 7;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) :0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

console.log(itemName);
console.log(weeksOfCover);
console.log(reorderNow);
console.log(reorderQuantity);
console.log(estimatedReorderCost.toFixed(2));