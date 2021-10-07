import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState: {
    playlists: [
      { 
        id: uuidv4(),
        image:
          'https://mosaic.scdn.co/300/ab67616d0000b27358f56b0881afac1122cbe6d6ab67616d0000b273c08beb27a550b2a3490a6c0aab67616d0000b273c433b69d7e211be799b57208ab67616d0000b273e0c0ee2c48da2b1c95c9dd4c',
        title: 'Sanattır ya bu',
        creator: 'Yunus Alper Göl',
      },
      { 
        id: uuidv4(),
        image:
          'https://mosaic.scdn.co/300/ab67616d0000b27301a6c108568abc1ab2fc9387ab67616d0000b273173aaf15871c9e33bf0edcb7ab67616d0000b273bbac03fb189f5261108b2053ab67616d0000b273de9850fe13514f407bbd39c6',
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