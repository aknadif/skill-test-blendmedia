import {
    configureStore,
    PreloadedState,
    combineReducers,
} from '@reduxjs/toolkit';

import userReducer from "@/store/user/user.reducer";
import productReducer from "@/store/product/product.reducer";

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });
};

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof store.getState>;
export default store;
