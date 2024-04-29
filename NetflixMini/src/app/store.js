import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../feature/movies/moviesSlice'
export const store = configureStore({
  reducer: {
    movie:movieReducer
  },
})
