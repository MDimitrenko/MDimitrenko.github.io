import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface StateProps {
  isSingIn: boolean;
  isAdmin: boolean;
  login: string;
  password: string;
  nikename: string;
  about: string;
}

export interface LoginPassword {
  login: string;
  password: string;
  confirmPassword: string;
}

const initialState: StateProps = {
  isSingIn: false,
  isAdmin: false,
  login: localStorage.getItem('login'),
  password: '',
  nikename: '',
  about: '',
};

// export const signIn = createAsyncThunk(
//     'signIn',
//     async (data, thunk) => {
//         localStorage.setItem('accessToken', "eyJ1c2VyX2lkIjoxLCJleHAiOjE1ODEzNTcwMzl9")
//     }
// )

export const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state: StateProps, action: { payload: { login: string; } }) => {
        const { login } = action.payload;
        state.isSingIn = true;
        if (login === 'admin') {
            state.isAdmin = true;
            state.nikename = 'Admin';
            state.about = 'admin';
        }
        else {
            state.isAdmin = false;
            state.nikename = 'Анна';
            state.about = 'упс';
        }
    },
    signOut: (state: StateProps) => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('login');
      state.isSingIn = false;
      state.isAdmin = false;
      state.nikename = '';
      state.about = '';
    },
    signIn: (state: StateProps, action: { payload: { login: string; password: string } }) => {
      const { login, password } = action.payload;
      localStorage.setItem('login', login);
      // В этом примере, если логин равен "admin" и пароль верен, устанавливаем isAdmin в true
      if (login === 'admin' && password === 'adminadmin') {
        localStorage.setItem(
          'accessToken',
          'eyJ1c2VyX2lkIjoxLCJleHAiOjE5ODEzNTcwMzksImlzX2FkbWluIjp0cnVlLCJhbGciOiJIUzI1NiJ9.e30.daVpCqDsosxUUdc9xp8BH3tyh7200iXSArZ_qXK4PVs'
        );
        state.isSingIn = true;
        state.isAdmin = true;
        state.login = login;
        state.nikename = 'Admin';
        state.about = 'admin';
      } else {
        localStorage.setItem(
          'accessToken',
          'eyJ1c2VyX2lkIjoxLCJleHAiOjE1ODEzNTcwMzksImlzX2FkbWluIjpmYWxzZSwiYWxnIjoiSFMyNTYifQ.e30.SBr1rsjVTNPMB6mh6GpuamZ9Gq62BKfVuDEIf-jRbjk'
        );
        state.isSingIn = true;
        state.isAdmin = false;
        state.login = login;
        state.nikename = 'Анна';
        state.about = 'упс';
      }
    },
  },
});

export const { signOut, signIn, setProfile } = profile.actions;
export default profile.reducer;
