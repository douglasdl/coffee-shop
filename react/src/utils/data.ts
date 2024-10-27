export interface ItemProps {
  name: string
  count: number
  price: number
}

export interface OrderProps {
  items: ItemProps[]
  itemsOrdered: number
  totalPrice: number
}

export const orderData: OrderProps = {
  items: [
    {
      name: 'coffee', 
      count: 0,
      price: 480
    },
    {
      name: 'tea',
      count: 0,
      price: 280
    },
    {
      name: 'milk',
      count: 0,
      price: 180
    },
    {
      name: 'coke',
      count: 0,
      price: 190
    },
    {
      name: 'beer',
      count: 0,
      price: 580
    }
  ],
  itemsOrdered: 0,
  totalPrice: 0
}