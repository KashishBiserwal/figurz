import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Men/menFilterReducer'
import marveldata from "../Marvel/MarvelData";  
import dcdata from "../DC/DcData";  

const MenFilterContext = createContext();

const initialState = {
    men_filter_products: [],
    all_men_products: [],
    sorting_value: "",
    filters:{
        text: '',
        category: 'All',
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}

export const MenFilterContextProvider = ({children}) => {
    const mensproducts = marveldata.concat(dcdata);
    const products = mensproducts.filter((item) => item.gender === 'men' )


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
        dispatch({type: 'LOAD_MEN_FILTER_PRODUCTS', payload: products})
    }, []) 

    return (
        <MenFilterContext.Provider value={{...state, sorting, updateFilterValue, clearFilters}}>
            {children}
        </MenFilterContext.Provider>
    )
}

export const useMenFilterContext = () => {
    return useContext(MenFilterContext);
}