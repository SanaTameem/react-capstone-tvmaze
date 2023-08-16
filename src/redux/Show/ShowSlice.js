import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShow = createAsyncThunk('show/fetchShows', async () => {
  const response = await axios.get('https://api.tvmaze.com/shows');
  return response.data.map((item) => ({
    id: item.id,
    name: item.name,
    url: item.url,
    language: item.language,
    runtime: item.runtime,
    averageRunTime: item.averageRuntime,
    started: item.premiered,
    ended: item.ended,
    time: item.schedule.time,
    day: item.schedule.days,
    rating: item.rating.average,
    popularity: item.weight,
    image: item.image.original,
    summary: item.summary,
    genres: item.genres,
  }));
});

const initialState = {
  shows: [],
  isLoading: false,
  error: null,
};

const showsSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShow.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchShow.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shows = action.payload;
    });
    builder.addCase(fetchShow.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default showsSlice.reducer;
