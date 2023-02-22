import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'

const SingleProduct=React.forwardRef((props,ref)=>{
    // if(ref){
    // return(
    //     <div ref={ref}>{props.product.name}</div>
    // )}
    // else{return <div>{props.product.name}</div>}
    if(ref){
        return(
            <div ref={ref} className='products'>
                <Card>
                    <Card.Body>
                    <Card.Img variant='top' alt={props.product.name} src={props.product.image}/>
                    <Card.Title>{props.product.name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom:10}}>
                        <span>₹{props.product.price.split('.')[0]}</span>
                        {props.product.fastDelivery?(<div>Fast Delivery</div>):(<div>4 days Delivery</div>)}
                        <Rating rating={props.product.ratings}/>
                    </Card.Subtitle>
                    <Button variant='danger'>Remove from cart</Button>
                    <Button disabled={!props.product.inStock}>
                            {!props.product.inStock?'Out of stock':'Add to cart'}
                    </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }else{
        return(
            <div className='products'>
                    <Card>
                        <Card.Body>
                        <Card.Img variant='top' alt={props.product.name} src={props.product.image}/>
                        <Card.Title>{props.product.name}</Card.Title>
                        <Card.Subtitle style={{paddingBottom:10}}>
                            <span>₹{props.product.price.split('.')[0]}</span>
                            {props.product.fastDelivery?(<div>Fast Delivery</div>):(<div>4 days Delivery</div>)}
                            <Rating rating={props.product.ratings}/>
                        </Card.Subtitle>
                        <Button variant='danger'>Remove from cart</Button>
                        <Button disabled={!props.product.inStock}>
                                {!props.product.inStock?'Out of stock':'Add to cart'}
                        </Button>
                        </Card.Body>
                    </Card>
            </div>
        )
    }
})
export default SingleProduct
