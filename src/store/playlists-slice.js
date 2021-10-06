import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState: {
    playlists: [
      { 
        id: uuidv4(),
        image:
          'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
        title: 'Sanattır ya bu',
        creator: 'Yunus Alper Göl',
      },
      { 
        id: uuidv4(),
        image:
          'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
        title: 'Radyo 90',
        creator: 'Yunus Alper Göl',
      },
      {
        id: uuidv4(),
        image:
          'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
        title: 'Random bullshit go ama türkçe',
        creator: 'Yunus Alper Göl',
      },
      {
        id: uuidv4(),
        image:
          'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
        title: 'Epic',
        creator: 'Yunus Alper Göl',
      },
      {
        id: uuidv4(),
        image:
          'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
        title: 'Deutsche',
        creator: 'Yunus Alper Göl',
      },
      {
        id: uuidv4(),
        image:
          'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
        title: 'You just activated my trap list',
        creator: 'Yunus Alper Göl',
      },
      {
        id: uuidv4(),
        image:
          'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
        title: 'Playlist 7',
        creator: 'Yunus Alper Göl',
      },
      {
        id: uuidv4(),
        image:
          'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
        title: 'Playlist 8',
        creator: 'Yunus Alper Göl',
      },
      {
        id: uuidv4(),
        image:
          'https://i.scdn.co/image/ab67706c0000da84fff52ad2733848cd17182f37',
        title: 'Playlist 9',
        creator: 'Yunus Alper Göl',
      },
    ],
  },
  reducers: {}
})


export const playlistsActions = playlistsSlice.actions
export default playlistsSlice.reducer