import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { loadUser } from './redux/actions/auth';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Theme/GlobalTheme';
import { lightTheme, darkTheme } from './components/Theme/Theme';
import store from './redux/store';
import { authPages } from './routes/AuthRoutes';
import setAuthToken from './utils/token/setAuthToken';
import { Provider } from 'react-redux';
import { Toggler } from './utils/default/Toggler';
import ThemeToggle from './components/Theme/ThemeToggle';
const Index = lazy(() => import('./pages/public/Index'));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [theme, themeToggler, mountedComponent] = Toggler();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <Suspense fallback="Loading...">
            <ThemeToggle theme={theme} toggleTheme={themeToggler} />
            <Switch>
              {authPages}
              <Route component={Index} />
            </Switch>
          </Suspense>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
