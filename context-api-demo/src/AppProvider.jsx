import { useState } from 'react';
import { ThemeContext, UserContext, LangContext } from './context';

//2. create reducer function 
function reducer() {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light",
            }
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
            }
        case "SET_LANG":
            return {
                ...state,
                lang: action.payload,
            }
    }
}

const AppProvider = ({ children }) => {

    //  Updated with reducer
    //1. create common state object

    const initialStates = {
        theme: "light",
        user: { name: "Guest" },
        lang: "en"
    }
    /*
const [theme, setTheme] = useState("light");
const [user, setUser] = useState({ name: "guest" });
const [lang, setLang] = useState("en");
*/

    // 3. create single state object 
    const { state, dispatch } = useContext(ThemeContext);
    const { theme, user, lang } = state,

    /* const toggleTheme = () => {
         setTheme((prev) => prev === "light" ? "dark" : "light");
     };*/


    return (
        // instead of passing seperate state and its handler or setter we are passing common state  and dispatch 
        <ThemeContext.Provider value={{ state, dispatch }}>
            <UserContext.Provider value={{ state, dispatch }}>
                <LangContext.Provider value={{ state, dispatch }}>
                    {children}
                </LangContext.Provider>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
};

export default AppProvider;
