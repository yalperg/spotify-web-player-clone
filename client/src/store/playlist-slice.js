import { createSlice } from '@reduxjs/toolkit'

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    playlist: {},
  },
  reducers: {
    replacePlaylist(state, action) {
      state.playlist = action.payload
    },
    removePlaylist(state) {
      state.playlist = {}
    }
  },
})

export const playlistActions = playlistSlice.actions
export default playlistSlice.reducer
