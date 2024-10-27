import { useState } from "react"
import { orderData } from "../utils/data";
import { Button } from "../components/button";
import { Bill } from "../components/bill";

export function Home() {
  const [order, setOrder] = useState(orderData);
  
  function handleOrderItem(itemName: string) {
    setOrder((prevOrder) => {
      const itemToUpdate = prevOrder.items.find((item) => item.name === itemName);
      if (!itemToUpdate) return prevOrder;
  
      const updatedItems = prevOrder.items.map((item) =>
        item.name === itemName ? { ...item, count: item.count + 1 } : item
      );
  
      const itemsOrdered = prevOrder.itemsOrdered + 1;
      const totalPrice = prevOrder.totalPrice + itemToUpdate.price;
  
      return {
        ...prevOrder,
        items: updatedItems,
        itemsOrdered,
        totalPrice,
      };
    });
  }

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-zinc-50 text-black text-xs">
       <div id="page-container" className="flex items-center justify-evenly h-full w-full">
        <div id="buttons-container" className="flex flex-col w-40 gap-4 p-4">
          {
            order.items.map((item)=> {
              return (
                <Button 
                  item={item.name}
                  price={item.price}
                  count={item.count}
                  orderItem={() => handleOrderItem(item.name)}
                />
              )
            })
          }
        </div>
        <Bill 
          itemsOrdered={order.itemsOrdered} 
          totalPrice={order.totalPrice} 
        />
      </div> 
    </div>
  )
}