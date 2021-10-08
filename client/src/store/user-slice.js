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
      state.tops.artists = action.payload.items
    }
  },
})

export const userActions = userSlice.actions
export default userSlice.reducer
