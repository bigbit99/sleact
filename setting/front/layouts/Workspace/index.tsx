import React, { FC, useCallback } from 'react';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';
import axios from 'axios';
import { Redirect, Route, Switch } from 'react-router';
import {
  Header,
  RightMenu,
  ProfileImg,
  LogOutButton,
  WorkspaceWrapper,
  Workspaces,
  Channels,
  WorkspaceName,
  MenuScroll,
  WorkspaceModal,
  Chats,
  AddButton,
  WorkspaceButton,
} from '@layouts/Workspace/styles';
import gravatar from 'gravatar';
import loadable from '@loadable/component';
const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

const Workspace: FC = ({ children }) => {
  //FC안에 children들어있음... 다른 컴포넌트 안에 넣은 것이 children이 된다.. !
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher);
  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false);
      });
  }, []);

  if (!data) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Header>
        <RightMenu>
          <span>
            <ProfileImg src={gravatar.url(data.email, { s: '28px', d: 'retro' })} alt={data.nickName} />
          </span>
        </RightMenu>
      </Header>
      <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
      <WorkspaceWrapper>
        <Workspaces>하하</Workspaces>
        <Channels>
          <WorkspaceName>sleact</WorkspaceName>
          <MenuScroll>메뉴스크롤</MenuScroll>
        </Channels>
        <Chats>
          <Switch>
            <Route path="/workspace/channel" component={Channel} />
            <Route path="/workspace/directmessage" component={DirectMessage} />
          </Switch>
        </Chats>
      </WorkspaceWrapper>
    </div>
  );
};

export default Workspace;
