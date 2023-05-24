import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CardsState = {
  cards: number[];
};

const savedCards = localStorage.getItem("cards");
const initialCards = savedCards ? JSON.parse(savedCards) : [];
const initialState: CardsState = {
  cards: initialCards,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<number>) => {
      state.cards.push(action.payload);
    },
    sortCards: (state) => {
      state.cards.sort((a, b) => a - b);
    },
    removeCard: (state, action: PayloadAction<number>) => {
      state.cards.splice(action.payload, 1);
    },
  },
});

export const { addCard, sortCards, removeCard } = cardsSlice.actions;
export default cardsSlice.reducer;