import { createSlice } from '@reduxjs/toolkiet'

const initialState = {
    theme: "light",
    user: { name: "Guest" },
    lang: "en"
}

const Appslice = createSlice({


    name: "app",
})