import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {},
    playlists: []
  },
  reducers: {
    replaceUser(state, action) {
      state.info = action.payload
    },
    replacePlaylists(state, action) {
      state.playlists = action.payload.items
    }
  },
})

export const userActions = userSlice.actions
export default userSlice.reducer
