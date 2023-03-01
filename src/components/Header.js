import { Container, Navbar, Form, Dropdown, Badge, Button } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../Context/Context'
import { AiFillDelete } from 'react-icons/ai'

export default function Header() {
    const {state,dispatch,productState:{searchQuery},productDispatch}=CartState()
    // const handleSearch=()=>{
    //     const newstate=state.products.filter(product=>product.name.toLowerCase().includes(text.toLowerCase()))
    //     // setSearch(true)
    //     dispatch({type:'searchResults',payload:newstate})
    // }

  return (
    <Navbar bg='dark' variant='dark' style={{height:80 ,position:'sticky',zIndex:10000 ,top:0}}>
        <Container>
            <Navbar.Brand>
                <Link to='/' onClick={()=>productDispatch({type:'FILTER_BY_SEARCH',payload:''})}>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search' style={{display:'flex'}}>
                <Form.Control value={searchQuery} onChange={(e)=>productDispatch({type:'FILTER_BY_SEARCH',payload:e.target.value})} style={{width:500}} placeholder='search a product' className='m-auto'/>
                {/* <Button onClick={()=>handleSearch()}><CiSearch fontSize='26px'></CiSearch></Button> */}
            </Navbar.Text>
            <Dropdown align='end'>
                <Dropdown.Toggle variant='success' >
                    <FaShoppingCart color='white' fontSize='25px'/>
                    <Badge bg='success'>{state.cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minwidth:370}}>
                    {state.cart.length>0?(
                        <>
                        {
                            state.cart.map(prod=>(
                                <span className='cartItem' key={prod.id}>
                                      <img className='cartItemImg' src={prod.image} alt={prod.name} />
                                      <div className='cartItemDetail'>
                                        <span>{prod.name}</span>
                                        <span>₹{prod.price.split('.')[0]}</span>
                                      </div>
                                      <AiFillDelete fontSize='20px' style={{cursor:'pointer'}} onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:prod})}/>
                                </span>
                            ))
                        }
                        <Link to='/cart'>
                            <Button style={{width:'95%',margin:'0 10px'}}>Go To Cart</Button>
                        </Link>
                        </>
                    )
                    :(<span style={{padding:10}}>Cart is Empty!</span>)}
                    
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Navbar>
  )
}
 