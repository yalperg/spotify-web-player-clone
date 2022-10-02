import { configureStore } from '@reduxjs/toolkit';

import authSlice from 'store/auth-slice';
import userSlice from 'store/user-slice';
import profileSlice from 'store/profile-slice';
import searchSlice from 'store/search-slice';
import playlistSlice from 'store/playlist-slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    profile: profileSlice,
    search: searchSlice,
    playlist: playlistSlice,
  },
});

export default store;
