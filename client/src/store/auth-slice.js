import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken : localStorage.getItem('access_token'),
    refreshToken: localStorage.getItem('refresh_token'),
    expiresIn: localStorage.getItem('expires_in'),
    isTokenExpired: false
  },
  reducers: {
    signOut(state, action) {
      state.accessToken = null
      state.refreshToken = null
      state.expiresIn = null
    },
  }
})


export const authActions = authSlice.actions
export default authSlice.reducer