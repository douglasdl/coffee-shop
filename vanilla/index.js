let coffeCount = 0;
let teaCount = 0;
let milkCount = 0;
let cokeCount = 0;
let beerCount = 0;

let itemsOrdered = 0;
let totalPrice = 0;

function askCoffee() {
  coffeCount++;
  itemsOrdered++;
  totalPrice += 480;
  document.getElementById("coffee-count").innerText = coffeCount;
  document.getElementById("count").innerText = itemsOrdered;
  document.getElementById("price").innerText = totalPrice;
}

function askTea() {
  teaCount++;
  itemsOrdered++;
  totalPrice += 280;
  document.getElementById("tea-count").innerText = teaCount;
  document.getElementById("count").innerText = itemsOrdered;
  document.getElementById("price").innerText = totalPrice;
}

function askMilk() {
  milkCount++;
  itemsOrdered++;
  totalPrice += 180;
  document.getElementById("milk-count").innerText = milkCount;
  document.getElementById("count").innerText = itemsOrdered;
  document.getElementById("price").innerText = totalPrice;
}

function askCoke() {
  cokeCount++;
  itemsOrdered++;
  totalPrice += 190;
  document.getElementById("coke-count").innerText = cokeCount;
  document.getElementById("count").innerText = itemsOrdered;
  document.getElementById("price").innerText = totalPrice;
}

function askBeer() {
  beerCount++;
  itemsOrdered++;
  totalPrice += 580;
  document.getElementById("beer-count").innerText = beerCount;
  document.getElementById("count").innerText = itemsOrdered;
  document.getElementById("price").innerText = totalPrice;
}