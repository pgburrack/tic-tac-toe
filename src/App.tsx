import Game from './components/Game';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/themes';
import useDarkMode, { Mode } from './components/useDarkMode';
import DarkModeToggle from 'react-dark-mode-toggle';

const Header = styled.header`
  display: flex;
  padding: 0 1rem;
  justify-content: flex-end;
`;

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === Mode.Light ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header>
        <DarkModeToggle
          onChange={toggleTheme}
          checked={theme === Mode.Dark}
          size={80}
        />
      </Header>
      <Game />
    </ThemeProvider>
  );
}

export default App;
