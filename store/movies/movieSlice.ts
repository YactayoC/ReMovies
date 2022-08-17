import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TMovie } from 'interfaces/movies';

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movieSelected: {
      uid: 0,
      title: '',
      description: '',
      hero: '',
      poster: '',
    },
    movieSelectedDetails: {
      uid: 0,
      title: '',
      mini_description: '',
      description: '',
      hero: '',
      poster: '',
      vote: 0,
      release_date: '',
      budget: 0,
      revenue: 0,
      genres: [{}],
      runtime: '',
      production_companies: [{}],
    },
  },
  reducers: {
    onSelectMovie: (state, action: PayloadAction<TMovie>) => {
      state.movieSelected = {
        uid: action.payload.uid!,
        title: action.payload.title!,
        description: action.payload.description!,
        hero: action.payload.hero!,
        poster: action.payload.poster!,
      };
    },
  },
});

export const { onSelectMovie } = movieSlice.actions;
