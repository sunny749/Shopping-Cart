export function reducer(state,action){
    switch(action.type){
        case 'addnewproducts':return {...state,products:[...state.products,...action.payload]}
        case 'searchResults':return {...state,products:action.payload}
        default:return state
    }
}