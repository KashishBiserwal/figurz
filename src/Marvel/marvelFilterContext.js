import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Marvel/marvelFilterReducer'
import products from "../Marvel/MarvelData";  

const MarvelFilterContext = createContext();

const initialState = {
    marvel_filter_products: [],
    all_marvel_products: [],
    sorting_value: "lowest",
    filters:{
        text: '',
        category: '',
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}

export const MarvelFilterContextProvider = ({children}) => {


    const [state, dispatch] = useReducer(reducer, initialState)

    const sorting = () => {
        dispatch({type: 'GET_SORT_VALUE'});
    };

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        console.log('filters value updated');
        return dispatch({type: 'UPDATE_FILTERS_VALUE', payload:{name, value}});
    };

    const clearFilters = () => {
        dispatch({type: 'CLEAR_FILTERS'})
    }

    useEffect(()=>{
        dispatch({type: "SORTING_PRODUCTS", payload: products})
    }, [ state.sorting_value, state.filters]) 
    
    useEffect(()=>{
        dispatch({type: 'FILTER_PRODUCTS'})
    }, [ state.filters]) 
    

    useEffect(()=>{
        dispatch({type: 'LOAD_MARVEL_FILTER_PRODUCTS', payload: products})
    }, []) 

    return (
        <MarvelFilterContext.Provider value={{...state, sorting, updateFilterValue, clearFilters}}>
            {children}
        </MarvelFilterContext.Provider>
    )
}

export const useMarvelFilterContext = () => {
    return useContext(MarvelFilterContext);
}