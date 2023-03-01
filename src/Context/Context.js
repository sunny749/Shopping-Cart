import { createContext, useContext, useReducer } from 'react'
import {faker} from '@faker-js/faker'
import { reducer } from './Reducers'
import {productReducer} from './Reducers'

export const Cart = createContext()
faker.seed(123)
export default function Context({children}) {
    // const [search,setSearch]=useState(false)
    const products=[...Array(40)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.image(),
        inStock:faker.helpers.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1,2,3,4,5]),
    }))
    const [state,dispatch]=useReducer(reducer,{products:products,cart:[]})
    const [productState,productDispatch]=useReducer(productReducer,{
        byStock:false,
        byFastDelivery:false,
        byRating:0,
        searchQuery:''
    })
  return (
    <Cart.Provider value={{state,dispatch,productState,productDispatch}} >
        {children}
    </Cart.Provider>
  )
}
export const CartState=()=>{
    return useContext(Cart)
  }
