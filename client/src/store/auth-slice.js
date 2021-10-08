import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken : sessionStorage.getItem('access_token'),
    refreshToken: sessionStorage.getItem('refresh_token'),
    isTokenExpired: (Date.now() - sessionStorage.getItem('timestamp')) >= 3600000
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