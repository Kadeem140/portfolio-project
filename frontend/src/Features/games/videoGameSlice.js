import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiKey from "../../utils/apiKey";

const url = `https://rawg.io/api/games?key=${apiKey}&dates=2022-01-01,2023-09-26&ordering=-added`

const initialState = {
    gamesArray: [ ],
    isLoading: false,
    errMsg: "",
}

export const videogamesFetch = createAsyncThunk(
    "games/videogamesFetch",// action tyoe
    async () => {
        const response = await axios.get(url);
        if(!response.ok) {
            return Promise.reject("Unable to fetch, status: " + response.status);
        }
        const data = await response.json();
        return data
        // .then(data => {
        //     // console.log(data, "API get call data")
        //     nextGameListUrl = data.next ? data.next : null;
        //     gamesArray.push(data.data.results)
        // })
        // .catch( err => {
        //     console.log(err)
        // })
    }                        //payload creator
)

const gameSlice = createSlice({
    name: "games",
    initialState,
    reducers: {},
    extraReducers: {
        [videogamesFetch.pending] : (state) => {
            state.isLoading = true;
        },
        [videogamesFetch.fulfilled] : (state, action) => {
            state.isLoading = false;
            state.gamesArray = action.payload;
        },
        [videogamesFetch.rejected] : (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : "Fetch failed";
        }
    }
});

export const gameReducer = gameSlice.reducer;