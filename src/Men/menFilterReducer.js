const menFilterReducer = (state, action) => {
    switch(action.type){

        case "LOAD_MEN_FILTER_PRODUCTS":

            let priceArr = action.payload.map((item) => item.price)
            let maxPrice = Math.max(...priceArr);
            let minPrice = Math.min(...priceArr)

            return {
                ...state,
                men_filter_products: [...action.payload],
                all_men_products: [...action.payload],
                filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice, minPrice: minPrice},
            }
        
        case "GET_SORT_VALUE":
            let userSortValue = document.getElementById("sort")
            let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            return {
                ...state,
                sorting_value: sort_value,
            }
        
        case "SORTING_PRODUCTS":
            let newSortData;
            let tempSortProduct = action.payload;

            
            if(state.sorting_value === "highest"){
                const sortingProducts = (a, b)=>{
                    return b.price - a.price;
                }
                newSortData = tempSortProduct.sort(sortingProducts)
            }
            if(state.sorting_value === "a-z"){
                newSortData = tempSortProduct.sort((a,b) => {
                    return a.name.localeCompare(b.name);
                })
            }
            if(state.sorting_value === "z-a"){
                newSortData = tempSortProduct.sort((a,b) => {
                    return b.name.localeCompare(a.name);
                })
            }
            if(state.sorting_value === "lowest"){
                const sortingProducts = (a,b)=>{
                    return a.price - b.price;
                }
                newSortData = tempSortProduct.sort(sortingProducts)
            }

            return {
                ...state,
                men_filter_products: newSortData,
            }
        
        case "UPDATE_FILTERS_VALUE" :
            const {name, value} = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }
 
        case 'FILTER_PRODUCTS':
            let {all_men_products} = state;
            let tempFilterProduct = [...all_men_products];
            const {text, category, price} = state.filters;
            if(text) {
                tempFilterProduct = tempFilterProduct.filter((item) => {
                    return item.name.toLowerCase().includes(text)
                })
            }
            if(category != 'All') {
                tempFilterProduct = tempFilterProduct.filter((item) => {
                    return item.category === category;
                })
            }
            if(price === 0) {
                tempFilterProduct = tempFilterProduct.filter((item) => item.price === price)
            } else {
                tempFilterProduct = tempFilterProduct.filter((item) => item.price <= price)
            }
            return {
                ...state,
                men_filter_products: tempFilterProduct,
            }

        case 'CLEAR_FILTERS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    category: 'All',
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.minPrice,
                }
            }

        default: 
            return state;
    }
}

export default menFilterReducer;