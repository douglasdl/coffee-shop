interface ButtonProps {
  item: string
  price: number
  count: number 
  orderItem: (item: string) => void
}

export function Button({ item, price, count, orderItem }: ButtonProps) {
  return (
    <button 
      id="coffee"  
      className="relative flex items-center justify-between py-1 px-2 rounded-md border border-zinc-300 hover:cursor-pointer"
      onClick={() => orderItem(item)}>
      <span>
        {item}
      </span>
      <span>
        {price} yen
      </span>
      <div id="coffee-count" className="absolute -right-2 -top-2 flex items-center justify-center p-1 bg-red-400 rounded-full text-white w-4 h-4">
        {count}
      </div>
    </button>
  )
}