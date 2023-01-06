/* eslint-disable react/no-unknown-property */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './action';

export default function LoginForm({ location }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { accessToken, name, loginStatus } = useSelector((state) => ({
    accessToken: state.accessToken,
    name: state.name,
    loginStatus: state.loginStatus,
  }));

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [, setAccessInfo] = useLocalStorage(
    'accessInformation',
    { accessToken: '', name: '', role: '' },
  );

  const onSubmit = async (data) => {
    const { email, password } = data;

    dispatch(login({ email, password }));

    // const { accessToken, name, role } = await userStore.login({ userName, password });

    if (loginStatus === 'successful') {
      setAccessInfo({ accessToken, name });

      navigate('/');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>USER LOGIN</h2>
        <Inputs>
          <input
            id="input-email"
            type="text"
            name="email"
            placeholder="이메일"
            error={(errors.email && errors.password)
              || errors.email || loginStatus === 'fail'}
            {...register('email', { required: true })}
          />
          <input
            id="input-password"
            type="password"
            name="password"
            placeholder="비밀번호"
            error={(errors.email && errors.password)
              || errors.password || loginStatus === 'fail'}
            {...register('password', { required: true })}
          />
        </Inputs>
        <Error>
          {errors.email && errors.password && <p>이메일과 비밀번호를 입력해 주세요</p>}
          {errors.email && !errors.password && (<p>이메일을 입력해 주세요</p>)}
          {!errors.email && errors.password && (<p>비밀번호를 입력해 주세요</p>)}
          {loginStatus === 'fail' && (<p>이메일 혹은 비밀번호가 맞지 않습니다</p>)}
        </Error>
        <button type="submit">로그인하기</button>
        <Link to="/signup">회원가입</Link>
      </form>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  a {
    display: block;
    margin-top: 60px;
    text-align: center;
  }
`;

const Inputs = styled.div`
  #input-email {
    margin-top: 60px;
  }
`;

const Error = styled.div`
  height: 60px;
  
  p {
    padding-top: 20px;
    
    font-size: 15px;
    color: red;
  }
`;
