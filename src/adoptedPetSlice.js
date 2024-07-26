import { createSlice } from '@reduxjs/toolkit';

const adoptedPetSlice = createSlice({
  name: 'adopted',
  initialState: {
    value: null
  },
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { adopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
