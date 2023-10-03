import { createSlice } from '@reduxjs/toolkit';

interface Profile {
  name: string;
  about: string;
}
export interface StateProps {
  token: string;
  isInit: boolean;
  profile: Profile;
}
const initialState: StateProps = {
  token: null,
  isInit: false,
  profile: null,
};

const initSlice = createSlice({
  name: 'initSlice',
  initialState,
  reducers: {
    setToken: (state = initialState, action) => {
      state.token = action.payload;
    },
    clearToken: (state = initialState) => {
      state.token = null;
      state.profile = null;
    },
    setInit: (state = initialState, action) => {
      state.isInit = action.payload;
    },
    changeProfile: (state = initialState, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setToken, clearToken, setInit, changeProfile } = initSlice.actions;
export default initSlice.reducer;
