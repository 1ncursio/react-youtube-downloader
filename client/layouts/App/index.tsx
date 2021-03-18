import loadable from '@loadable/component';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Home = loadable(() => import('@pages/Home'));
const Video = loadable(() => import('@pages/Video'));
// const LogIn = loadable(() => import('@pages/LogIn'));
// const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => (
  <Switch>
    {/* <Route exact path="/">
      <Redirect to="/login" />
    </Route> */}
    <Route exact path="/" component={Home} />
    <Route exact path="/video" component={Video} />
    {/* <Route path="/signup" component={SignUp} /> */}
    {/* <Route path="/workspace/:workspace" component={Workspace} /> */}
  </Switch>
);

export default App;
