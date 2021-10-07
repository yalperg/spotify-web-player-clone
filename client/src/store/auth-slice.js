import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken : localStorage.getItem('access_token'),
    refreshToken: localStorage.getItem('refresh_token'),
    isTokenExpired: (Date.now() - localStorage.getItem('timestamp')) >= 3600000
  },
  reducers: {
    signOut(state, action) {
      state.accessToken = null
      state.refreshToken = null
    },
  }
})


export const authActions = authSlice.actions
export default authSlice.reducer