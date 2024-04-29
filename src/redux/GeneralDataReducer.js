import {createSlice} from '@reduxjs/toolkit';

/* Saving User Register Data */
const initialState = {
  /* Sign Up Data */
  ReducerName: '',
  ReducerEmailReg: '',
  ReducerPassReg: '',

  /* Sign In Data */
  ReducerEmailLog: '',
  ReducerPassLog: '',

  /* Token */
  ReducerUserId: '',
  ReducerUserCart: '',
};

export const counterSlice = createSlice({
  name: 'GeneralData',
  initialState,
  reducers: {
    /* Set Sign Up Data */
    setUserName: (state, action) => {
      state.ReducerName = action.payload;
    },
    setEmailReg: (state, action) => {
      state.ReducerEmailReg = action.payload;
    },
    setPassReg: (state, action) => {
      state.ReducerPassReg = action.payload;
    },

    /* Set Sign In Data */
    setEmailLog: (state, action) => {
      state.ReducerEmailLog = action.payload;
    },
    setPassLog: (state, action) => {
      state.ReducerPassLog = action.payload;
    },

    /* Set API User Id Response */
    setUserId: (state, action) => {
      state.ReducerUserId = action.payload;
    },
    /* Set API User Cart Id Response */
    setUserCart: (state, action) => {
      state.ReducerUserCart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserName,
  setEmailReg,
  setPassReg,
  setEmailLog,
  setPassLog,
  setUserId,
  setUserCart,
} = counterSlice.actions;

export default counterSlice.reducer;
