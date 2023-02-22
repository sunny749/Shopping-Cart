import React, { useState } from 'react'
import { Container, Navbar, Form, Dropdown, Badge, Button } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {CiSearch} from 'react-icons/ci'
import { CartState } from '../Context/Context'

export default function Header() {
    const [text,setText]=useState('')
    const {state,dispatch,search,setSearch}=CartState()
    const handleSearch=()=>{
        const newstate=state.products.filter(product=>product.name.toLowerCase().includes(text.toLowerCase()))
        setSearch(true)
        dispatch({type:'searchResults',payload:newstate})
    }

  return (
    <Navbar bg='dark' variant='dark' style={{height:80 ,position:'sticky',zIndex:10000 ,top:0}}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search' style={{display:'flex'}}>
                <Form.Control value={text} onChange={(e)=>setText(e.target.value)} style={{width:500}} placeholder='search a product' className='m-auto'/>
                <Button onClick={()=>handleSearch()}><CiSearch fontSize='26px'></CiSearch></Button>
            </Navbar.Text>
            <Dropdown align='end'>
                <Dropdown.Toggle variant='success' >
                    <FaShoppingCart color='white' fontSize='25px'/>
                    <Badge bg='success'>10</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minwidth:370}}>
                    <span style={{padding:10}}>Cart is Empty!</span>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Navbar>
  )
}
 