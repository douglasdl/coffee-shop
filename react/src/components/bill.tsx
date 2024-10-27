interface BillProps {
  itemsOrdered: number
  totalPrice: number
}

export function Bill({ itemsOrdered, totalPrice }: BillProps) {
  return (
    <div id="bill" className="flex flex-col bg-zinc-100 shadow-xl rounded-md p-4 w-40 gap-4">
      <header className="border-b border-b-zinc-300 pb-2 mb-2">
        <span>Your bill</span>
      </header>
      <div id="items-ordered" className="flex items-center justify-start gap-2">
        Items ordered: 
        <span id="count" className="text-right">{itemsOrdered}</span>
      </div>
      <div id="total-price" className="flex items-center justify-start gap-2">
        Total Price: 
        <span id="price" className="text-right w-1/5">{totalPrice}</span> 
        <span>yen</span>
      </div>
    </div>
  )
}