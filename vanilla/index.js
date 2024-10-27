const order = {
  items: {
    coffee: {
      count: 0,
      price: 480
    },
    tea: {
      count: 0,
      price: 280
    },
    milk: {
      count: 0,
      price: 180
    },
    coke: {
      count: 0,
      price: 190
    },
    beer: {
      count: 0,
      price: 580
    }
  },
  itemsOrdered: 0,
  totalPrice: 0
}



function updateUI(order) {
  for(const item in order.items) {
    document.getElementById(`${item}-count`).innerText = order.items[item].count;
  }
  document.getElementById("count").innerText = order.itemsOrdered;
  document.getElementById("price").innerText = order.totalPrice;
}

function orderItem(item) {
  if(order.items[item]){
    order.items[item].count++;
    order.itemsOrdered++;
    order.totalPrice += order.items[item].price;
    updateUI(order);
  }
}