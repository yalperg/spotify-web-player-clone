import { configureStore } from '@reduxjs/toolkit'

import authSlice from 'store/auth-slice'
import userSlice from 'store/user-slice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice
  }
})

export default store