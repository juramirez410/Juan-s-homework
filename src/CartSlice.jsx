import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    countOfItems: 0
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
        state.countOfItems++;
    },
    removeItem: (state, action) => {
        const item = state.items.find(item => item.name === action.payload);
        state.items = state.items.filter(item => item.name !== action.payload);
        state.countOfItems -= item.quantity;
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            state.countOfItems = state.countOfItems - itemToUpdate.quantity + quantity;
            itemToUpdate.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
