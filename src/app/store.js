import { configureStore } from '@reduxjs/toolkit';
// import authSlice from '../reducers/authSlice';
import auctionSlice from '../reducers/auctionSlice';

export const store = configureStore({
    reducer: auctionSlice
})
