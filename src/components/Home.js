// import { useCallback, useEffect, useRef } from 'react'
import { CartState } from '../Context/Context'
// import { faker } from '@faker-js/faker'
import SingleProduct from './SingleProduct'
import './Styles.css' 
import Filters from './Filters'

export default function Home() {
  const {state,productState}=CartState()
  const trnasformProducts=()=>{
    let sortedProducts=state.products
    if(productState.sort){
      sortedProducts=sortedProducts.sort((a,b)=>{
        if(productState.sort==='lowToHigh'){
          return a.price-b.price
        }
        else return b.price-a.price
      })
    }
    if(!productState.byStock){
      sortedProducts=sortedProducts.filter(c=>c.inStock)
    }
    if(productState.byFastDelivery){
      sortedProducts=sortedProducts.filter(c=>c.fastDelivery)
    }
    if(productState.byRating){
      sortedProducts=sortedProducts.filter(c=>c.ratings>=productState.byRating)
    }
    if(productState.searchQuery){
      sortedProducts=sortedProducts.filter(c=>c.name.toLowerCase().includes(productState.searchQuery.toLowerCase()))
    }
    return sortedProducts
  }
  // const observer=useRef()
  // const lastProduct=useCallback(node=>{
  //   if(observer.current){
  //     observer.current.disconnect()
  //   }
    // observer.current=new IntersectionObserver(entries=>{
    //   if(!entries[0].isIntersecting)return
    //   // if(search)return
    //   if(entries[0].isIntersecting){
    //     let newproducts=[...Array(6)].map(()=>{
    //       return{
    //         id:faker.datatype.uuid(),
    //         name:faker.commerce.productName(),
    //         price:faker.commerce.price(),
    //         image:faker.image.image(),
    //         inStock:faker.helpers.arrayElement([0,3,5,6,7]),
    //         fastDelivery:faker.datatype.boolean(),
    //         ratings:faker.helpers.arrayElement([1,2,3,4,5]),
    //       }
    //     })
  //       dispatch({type:'addnewproducts',payload:newproducts})
  //     }
  //   })
  //   if(node){observer.current.observe(node)}
  // })

  return (
    <div className='home'>
      <Filters/>
      <div className='productContainer'>
          {trnasformProducts().map((product,index)=>{
            return <SingleProduct key={product.id} product={product}></SingleProduct>
          })}
      </div>
    </div>
  
  )
}
