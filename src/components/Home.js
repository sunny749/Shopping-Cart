import { useCallback, useEffect, useRef } from 'react'
import { CartState } from '../Context/Context'
import { faker } from '@faker-js/faker'
import SingleProduct from './SingleProduct'
import './Styles.css' 
import Filters from './Filters'

export default function Home() {
  // useEffect(()=>{
  //   axios({
  //     method:'GET',
  //     url:'https://fakestoreapi.com/products',
  //     params:{page:2}}).then(res=>console.log(res))
  // },[])
  const {state,dispatch,search}=CartState()
  // console.log(state)
  const observer=useRef()
  const lastProduct=useCallback(node=>{
    if(observer.current){
      observer.current.disconnect()
    }
    observer.current=new IntersectionObserver(entries=>{
      if(!entries[0].isIntersecting)return
      if(search)return
      if(entries[0].isIntersecting){
        let newproducts=[...Array(6)].map(()=>{
          return{
            id:faker.datatype.uuid(),
            name:faker.commerce.productName(),
            price:faker.commerce.price(),
            image:faker.image.image(),
            inStock:faker.helpers.arrayElement([0,3,5,6,7]),
            fastDelivery:faker.datatype.boolean(),
            ratings:faker.helpers.arrayElement([1,2,3,4,5]),
          }
        })
        dispatch({type:'addnewproducts',payload:newproducts})
      }
    })
    if(node){observer.current.observe(node)}
  })

  return (
    <div className='home'>
      <Filters/>
      <div className='productContainer'>
          {state.products.map((product,index)=>{
            if(state.products.length===index+1){
            // return <div ref={lastProduct} key={product.id}>{product.name}</div>}
            // else{return <div key={product.id}>{product.name}</div>}
            return <SingleProduct ref={lastProduct} key={product.id} product={product}></SingleProduct>}
            else return <SingleProduct key={product.id} product={product}></SingleProduct>
          })}
      </div>
    </div>
  
  )
}
