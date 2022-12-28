import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  jsonArray: [],
  selectedKeyword: null,
  selectedJsonArray: []
};


export const jsonArraySlice = createSlice({
  name: 'jsonArray',
  initialState,
  reducers: {
    setJsonArray: (state, data) => {
      state.jsonArray = data.payload
    },
    setSelectedKeyword: (state, data) => {
      state.selectedKeyword = data.payload
    },
    setSelectedJsonArray: (state, data) => {
      state.selectedJsonArray = data.payload
    }
  }
});

export const { setJsonArray, setSelectedKeyword, setSelectedJsonArray } = jsonArraySlice.actions;

export const selectArray = (state) => state.jsonArray.jsonArray;

export const selectedKeyword = (state) => state.jsonArray.selectedKeyword;

export const selectedJsonArray = (state) => state.jsonArray.selectedJsonArray;



export default jsonArraySlice.reducer;
