import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {},
    playlists: [],
    tops: {
      artists: [],
      tracks: []
    }
  },
  reducers: {
    replaceUser(state, action) {
      state.info = action.payload
    },
    replacePlaylists(state, action) {
      state.playlists = action.payload.items
    },
    replaceTops(state, action) {
      const type = action.payload.type
      state.tops[type] = action.payload.data.items
    }
  },
})

export const userActions = userSlice.actions
export default userSlice.reducer
