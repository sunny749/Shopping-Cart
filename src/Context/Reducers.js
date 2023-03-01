export function reducer(state,action){
    switch(action.type){
        case 'ADD_TO_CART':return{...state,cart:[...state.cart,{...action.payload,qty:1}]}
        case 'REMOVE_FROM_CART':return{...state,cart:state.cart.filter(c=>c.id!==action.payload.id)}
        case 'addnewproducts':return {...state,products:[...state.products,...action.payload]}
        case 'searchResults':return {...state,products:action.payload}
        case 'CHANGE_CART_QTY':return {...state,cart:state.cart.filter(c=>c.id===action.payload.id?(c.qty=action.payload.qty):c.qty)}
        case 'ASSENDING_THE_PRODUCTS':return {...state,products:state.products.sort((a,b)=>b.price-a.price)}
        default:return state
    }
}

export function productReducer(state,action){
    switch(action.type){
        case 'SORT_BY_PRICE':return {...state,sort:action.payload}
        case 'FILTER_BY_STOCK':return {...state,byStock:!state.byStock}
        case 'FILTER_BY_DELIVERY':return {...state,byFastDelivery:!state.byFastDelivery}
        case 'FILTER_BY_RATING':return {...state,byRating:action.payload}
        case 'FILTER_BY_SEARCH':return {...state,searchQuery:action.payload}
        case 'CLEAR_FILTERS':return {byStock:false,
            byFastDelivery:false,
            byRating:0,
            searchQuery:''}
        default:return state
    }
}