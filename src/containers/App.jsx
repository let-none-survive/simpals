import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import styled, { css, ThemeProvider } from 'styled-components';
import history from 'modules/history';
import theme, { headerHeight } from 'modules/theme';
import { utils } from 'styled-minimal';


import Home from 'routes/Home';
import CreationPage from 'routes/CreationPage';


import GlobalStyles from 'components/GlobalStyles';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  opacity: 1 !important;
  position: relative;
  transition: opacity 0.5s;
`;

const MainPrivate = ({ isAuthenticated }) =>
  isAuthenticated &&
  css`
    padding: ${utils.px(headerHeight)} 0 0;
  `;
const Main = styled.main`
  min-height: 100vh;

  ${MainPrivate};
`;

export class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <Main>
              <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/create" component={CreationPage} />
                <Route path="*" component={() => <Redirect to="/home" />} />
              </Switch>
            </Main>
            <GlobalStyles />
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}


export default hot(App);
