import {createSlice} from "@reduxjs/toolkit";
import {ProductState} from "@/types/product";

const initialState: ProductState = {

};

export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
    },
});

export const {

} = productSlice.actions;
export default productSlice.reducer;
