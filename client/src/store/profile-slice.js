import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    info: {},
    playlists: [],
  },
  reducers: {
    replaceProfile(state, action) {
      state.info = action.payload
    },
    replaceProfilePlaylists(state, action) {
      state.playlists = action.payload.items
    },
    removeProfileData(state) {
      state.info = {}
      state.playlists = {}
    }
  },
})

export const profileActions = profileSlice.actions
export default profileSlice.reducer
