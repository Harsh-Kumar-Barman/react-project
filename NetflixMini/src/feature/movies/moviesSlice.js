// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// const initialState = {
//   movie1:[],
//   movie2:[],
//   movie3:[],
//   movie4:[],
//   loading:false,
//   error:null
// }

// const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
// const url = "https://api.themoviedb.org/3";
// const imgUrl = "https://image.tmdb.org/t/p/original";
// const upcoming = "upcoming";
// const nowPlaying = "now_playing";
// const popular = "popular";
// const topRated = "top_rated";

// const fetchUserById = createAsyncThunk('moviess',()=>{
//     const movies1=async()=>{
//         const res=await fetch(`${url}/movie/${upcoming}?api_key=${apiKey}`);
//         const data=await res.json();
//         movie1(data);
//     }
//     const movies2=async()=>{
//         const res=await fetch(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
//         const data=await res.json();
//         movie2(data);
//     }
//     const movies3=async()=>{
//         const res=await fetch(`${url}/movie/${popular}?api_key=${apiKey}`);
//         const data=await res.json();
//         movie3(data);
//     }
//     const movies4=async()=>{
//         const res=await fetch(`${url}/movie/${topRated}?api_key=${apiKey}`);
//         const data=await res.json();
//         movie4(data);
//     }
//     movies1();
//     movies2();
//     movies3();
//     movies4();
// }
//   )


// export const moviesSlice = createSlice({
//   name: 'counter',
//   initialState,
// })

// export default moviesSlice.reducer


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    movies: {
        upcoming: [],
        nowPlaying: [],
        popular: [],
        topRated: [],
    },
    loading: false,
    error: null,
};

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";

export const fetchMovies = createAsyncThunk(
    'movies',
    async (_, { rejectWithValue }) => {
        try {
            const endpoints = ['upcoming', 'now_playing', 'popular', 'top_rated'];
            const responses = await Promise.all(
                endpoints.map(endpoint => fetch(`${url}/movie/${endpoint}?api_key=${apiKey}`).then(res => res.json()))
            );
            return {
                upcoming: responses[0].results,
                nowPlaying: responses[1].results,
                popular: responses[2].results,
                topRated: responses[3].results,
            };
        } catch (error) {
            console.error("Error fetching data:", error);
            return rejectWithValue(error.toString());
        }
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default moviesSlice.reducer;
