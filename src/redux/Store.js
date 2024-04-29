import {configureStore} from '@reduxjs/toolkit';
import GeneralDataReducer from './GeneralDataReducer';

/* Register Reducer which will save data of user register */
export const store = configureStore({
  reducer: {
    GeneralData: GeneralDataReducer,
  },
});
