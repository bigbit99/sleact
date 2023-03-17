import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp')); //코드스플리팅 알아서 해줌...
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace/:workspace" component={Workspace} />
      {/* 🔥라우터 주소설계(라우트 파라미터) - /workspace/:workspace 부분은 사용자가 자유롭게 주소를 바꿀 수 있는 부분 */}
    </Switch>
  );
};

export default App;
