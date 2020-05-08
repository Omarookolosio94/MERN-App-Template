import React, { lazy, Suspense, useEffect, useState, useRef } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { loadUser } from './redux/actions/auth';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Theme/GlobalTheme';
import { lightTheme, darkTheme } from './utils/default/Theme';
import store from './redux/store';
import { authPages } from './routes/AuthRoutes';
import setAuthToken from './utils/token/setAuthToken';
import { Provider } from 'react-redux';
import { Toggler } from './utils/default/Toggler';
import Sidenav from './components/navigation/sidenav/Sidenav';
import { useOnClickOutside } from './hooks';
import { Wrapper, NavWrapper, MainWrapper } from './components/Fixed/Styled';
import Topnav from './components/navigation/topnav/Topnav';

const Index = lazy(() => import('./pages/public/Index'));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [theme, themeToggler, mountedComponent] = Toggler();
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Suspense fallback="Loading...">
            <Wrapper>
              <NavWrapper
                ref={node}
                open={open}
                theme={theme}
                onMouseEnter={() => setOpen(!open)}
              >
                <Sidenav open={open} setOpen={setOpen} theme={theme} />
              </NavWrapper>
              <MainWrapper>
                <Topnav theme={theme} themeToggler={themeToggler} />
                <Switch>
                  {authPages}
                  <Route component={Index} />
                </Switch>
              </MainWrapper>
            </Wrapper>
          </Suspense>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
