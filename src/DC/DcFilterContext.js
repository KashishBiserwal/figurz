import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../DC/DcFilterReducer'
import products from "../DC/DcData";  

const DcFilterContext = createContext();

const initialState = {
    dc_filter_products: [],
    all_dc_products: [],
    sorting_value: "",
    filters:{
        text: '',
        category: 'All',
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}

export const DcFilterContextProvider = ({children}) => {


    const [state, dispatch] = useReducer(reducer, initialState)

    const sorting = () => {
        dispatch({type: 'GET_SORT_VALUE'});
    };

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
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
        dispatch({type: 'LOAD_DC_FILTER_PRODUCTS', payload: products})
    }, []) 

    return (
        <DcFilterContext.Provider value={{...state, sorting, updateFilterValue, clearFilters}}>
            {children}
        </DcFilterContext.Provider>
    )
}

export const useDcFilterContext = () => {
    return useContext(DcFilterContext);
}