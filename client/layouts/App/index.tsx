import loadable from '@loadable/component';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Home = loadable(() => import('@pages/Home'));
// const Video = loadable(() => import('@components/Video'));
const Header = loadable(() => import('@layouts/Header'));
const Footer = loadable(() => import('@layouts/Footer'));
// const LogIn = loadable(() => import('@pages/LogIn'));
// const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
  </>
);

export default App;
