import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";

interface Character {
  id: number;
  name: string;
  // other properties
}

interface CharactersState {
  entities: Character[];
  selectedCharacter: Character | null;
  isLoading: boolean;
  // other state properties
}

const initialState: CharactersState = {
  entities: [],
  selectedCharacter: null,
  isLoading: false,
  // other initial state
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    loadCharactersStart(state) {
      state.isLoading = true;
    },
    loadCharactersSuccess(state, action: PayloadAction<Character[]>) {
      state.isLoading = false;
      state.entities = action.payload;
    },
    selectCharacter(state, action: PayloadAction<number>) {
      state.selectedCharacter = state.entities.find(
        (character) => character.id === action.payload
      );
    },
    // other reducers for pagination, search, etc.
  },
});

export const {
  loadCharactersStart,
  loadCharactersSuccess,
  selectCharacter,
  // other action creators
} = charactersSlice.actions;

export default charactersSlice.reducer;

export const fetchCharacters = (): AppThunk => (dispatch) => {
  // fetch characters, then dispatch loadCharactersSuccess
};