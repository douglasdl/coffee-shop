const itemCounts = {
  coffee: 0,
  tea: 0,
  milk: 0,
  coke: 0,
  beer: 0
}

let itemsOrdered = 0;
let totalPrice = 0;

const prices = {
  coffee: 480,
  tea: 280,
  milk: 180,
  coke: 190,
  beer: 580
}

function updateUI() {
  document.getElementById("coffee-count").innerText = itemCounts.coffee;
  document.getElementById("tea-count").innerText = itemCounts.tea;
  document.getElementById("milk-count").innerText = itemCounts.milk;
  document.getElementById("coke-count").innerText = itemCounts.coke;
  document.getElementById("beer-count").innerText = itemCounts.beer;

  document.getElementById("count").innerText = itemsOrdered;
  document.getElementById("price").innerText = totalPrice;
}

function orderItem(item) {
  itemCounts[item]++
  itemsOrdered++;
  totalPrice += prices[item];
  updateUI();
}