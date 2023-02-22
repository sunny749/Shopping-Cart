import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import Rating from './Rating'

export default function Filters() {
    const [rating,setRating]=useState(0)
  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check 
            inline
            label='Assending'
            name='group1'
            type='radio'
            id={'inline-1'}
            />
        </span>
        <span>
            <Form.Check 
                inline
                label='Descending'
                type='radio'
                name='group1'
                id={'inline-2'}
            ></Form.Check>
        </span>
        <span>
            <Form.Check
            inline
            label='Include Out of Stock'
            name='group1'
            type='checkbox'
            id={'inline-3'}
            />
        </span>
        <span>
            <Form.Check
            inline
            label='Fast Delivery Only'
            name='group1'
            type='checkbox'
            id={'inline-4'}
            />
        </span>
        <span>
            <label style={{paddingRight:10}}>Rating</label>
            <Rating rating={rating} onClick={(i)=>setRating(i+1)} style={{cursor:'pointer'}}/>
        </span>
        <Button variant='light' onClick={()=>setRating(0)}>Clear Filters</Button>
    </div>
  )
}
