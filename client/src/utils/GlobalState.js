import React, { createContext, useReducer, useContext } from "react";
import {
    SET_SEARCH
} from "./Actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
switch (action.type) {
    case SET_SEARCH:
        return {
            ...state,
            userSearch: action.userSearch
        };
    case Default:
        return state;
    };
};

const StoreProvider = ({ value = [], ...props }) => {
    cosnt [state, dispatch] = useReducer(reducer, {
        userSearch: ""
    });

    return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };

