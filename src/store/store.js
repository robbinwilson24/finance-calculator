import {configureStore} from "@reduxjs/toolkit";
import changesReducer from "./changes"

export default configureStore({

    reducer: {

        amount: changesReducer,

    },
});