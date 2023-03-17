import useInput from '@hooks/useInput';
import React, { useCallback, useState, VFC } from 'react';
import axios from 'axios';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from './styles';
import { Link, Redirect } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import Loading from '@components/Loading';

const SignUp = () => {
  const { data, error, mutate } = useSWR('/api/users', fetcher);
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  //useCallback을 써주어야 성능 최적화가 됨

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [setPasswordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!mismatchError) {
        console.log('서버로 회원가입하기');
        setSignUpError('');
        setSignUpSuccess(false); //🔥비동기 요청 전 setState들을 초기화 해주는 것이 좋다. 요청을 연달아 보낼 때 첫번째 요청의 결과가 다음 요청에 남아있는 문제를 방지해줌
        axios
          .post('/api/users', {
            email,
            nickname,
            password,
          })
          .then((response) => {
            console.log(response);
            setSignUpSuccess(true);
          }) //🔥성공하는 경우
          .catch((error) => {
            console.log(error);
            setSignUpError(error.response.data); //에러났을 때 에러메시지 출력 , error났을 때 응답(response)의 data
          }) //🔥실패하는 경우
          .finally(() => {}); //🔥성공하든 실패하든 공통적으로 하고 싶은 경우
      }
    },
    [email, nickname, password, passwordCheck, mismatchError],
  );

  if (data === undefined) {
    return <Loading />;
  }

  if (data) {
    return <Redirect to="/workspace/sleact/channel/일반" />;
  }
  //🔥🔥🔥return은 항상 hooks보다 아래에 있어야 함!!!🔥🔥🔥
  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to="/login">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
