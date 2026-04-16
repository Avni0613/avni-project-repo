import { useContext } from 'react'
import { ThemeContext, UserContext, LangContext } from './context'

const App = () => {
  /*
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const { lang, setLang } = useContext(LangContext);  */

  return (
    <div>
      <p>Theme: {theme}</p>
      <p>User: {user.name}</p>
      <p>Lang: {lang}</p>
    </div>
  );
}

export default App;







