import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from "./slices/ProductSlice";
import singleProduct from "./slices/SingleProductSlice";
import auth from "./slices/AuthSlice";
import cart from './slices/CartSlice';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import OrderSlice from "./slices/OrderSlice";



const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['user']
}

const cartPersistConfig = {
  key:'cart',
  storage,
  whitelist:['cart','items']
}

const orderPersistConfige={
  key:'order',
  storage,
  whitelist:['orderItems','amount']
}

const Rootreducer = combineReducers({
    products,
    singleProduct,
    auth: persistReducer(authPersistConfig, auth),
    cart:persistReducer(cartPersistConfig,cart),
    order:persistReducer(orderPersistConfige,OrderSlice)
})

export const store = configureStore({
    reducer: Rootreducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor = persistStore(store);