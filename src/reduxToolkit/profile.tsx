import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface StateProps {
    isSingIn: boolean;
    login: string;
    password: string;
    nikename: string;
    about: string
}

export interface LoginPassword {
    login: string;
    password: string;
    confirmPassword: string;
  }

const initialState: StateProps = {
    isSingIn: false,
    login: "",
    password: "",
    nikename: "",
    about: ""
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
        signOut: (state: StateProps) => {
            localStorage.removeItem('accessToken');
            state.isSingIn = false
            state.nikename = ""
            state.about = ""
        },
        signIn: (state: StateProps) => {
            localStorage.setItem('accessToken', "eyJ1c2VyX2lkIjoxLCJleHAiOjE1ODEzNTcwMzl9")
            state.isSingIn = true
            state.nikename = "Анна"
            state.about = "упс"

        },
    },
  })

  export const {signOut, signIn} = profile.actions
  export default profile.reducer