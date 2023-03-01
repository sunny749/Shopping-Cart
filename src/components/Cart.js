import React, { useEffect, useState } from 'react'
import { Image , Button,Row, Col, ListGroup, Form} from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { CartState } from '../Context/Context'
import Rating from './Rating'

export default function Cart() {
  const [total,setTotal]=useState(0)
  const {state:{cart},dispatch}=CartState()
  useEffect(()=>{
    setTotal(cart.reduce((a,c)=>a+Number(c.price)*c.qty,0))
  },[cart])
  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
           {cart.map(prod=>(
            <ListGroup.Item key={prod.id}>
              <Row>
              <Col md={2}>
                <Image src={prod.image} alt={prod.name} fluid rounded></Image>
              </Col>
              <Col md={2}>
                {prod.name}
              </Col>
              <Col md={2}>{prod.price}</Col>
              <Col md={2}>
                <Rating rating={prod.ratings}></Rating>
              </Col>
              <Col md={2}>
                <Form.Control as='select' value={prod.qty} 
                onChange={(e)=>dispatch({type:'CHANGE_CART_QTY',payload:{id:prod.id,qty:e.target.value}})}
                >
                {[...Array(prod.inStock).keys()].map(x=>(
                  <option key={x+1}>{x+1}</option>
                ))}
                </Form.Control>
              </Col>
              <Col md={2}>
                  <Button
                  type='button'
                  variant='light'
                  onClick={()=>{
                    dispatch({
                      type:'REMOVE_FROM_CART',
                      payload:prod
                    })
                  }}
                  >
                    <AiFillDelete fontSize='20px'></AiFillDelete>
                  </Button>
              </Col>
              </Row>
            </ListGroup.Item>
           ))}
        </ListGroup>
      </div>
      <div className='filters summery'>
        <span className='title'>Subtotal ({cart.length}) items</span>
        <span style={{fontWeight:700,fontSize:20}}>Total: ₹{total}</span>
        <Button type='button' disabled={cart.length===0}>Proceed to Checkout</Button>
      </div>
    </div>
  )
}
