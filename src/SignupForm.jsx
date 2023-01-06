/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { signup } from './action';

export default function SignupForm() {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isPasswordNotMatch, setIsPasswordNotMatch] = useState(false);

  const { signupStatus } = useSelector((state) => ({
    signupStatus: state.signupStatus,
  }));

  const onSubmit = async (data) => {
    const {
      name, email, password, confirmPassword,
    } = data;

    if (password !== confirmPassword) {
      setIsPasswordNotMatch(true);
      return;
    }

    await dispatch(signup({
      name, email, password, confirmPassword,
    }));
  };

  if (signupStatus === 'successful') {
    return (
      <SignupCompleted>
        <div>
          <h2>회원가입 완료</h2>
          <p>
            이태원 딕셔너리 회원이 되신것을 축하드립니다.
            <br />
            <br />
            지금 바로 로그인하시고 서비스를 이용해보세요!
          </p>
          <Link to="/login">
            <button type="button">
              로그인하기
            </button>
          </Link>
        </div>
      </SignupCompleted>
    );
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>SIGN UP</Title>
        <Inputs>
          <InputWrapper>
            <Label htmlFor="input-name">이름:</Label>
            <input
              id="input-name"
              type="text"
              name="name"
              error={(errors.name && errors.email && errors.password
                && errors.confirmPassword) || errors.name}
              {...register('name', {
                required: true,
                pattern: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{3,7}$/,
              })}
            />
            {errors.name
              ? (<ErrorMessage>이름을 다시 확인해 주세요</ErrorMessage>)
              : (<DefaultMessage>3~7자까지 한글만 사용 가능</DefaultMessage>)}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="input-email">아이디:</Label>
            <input
              id="input-email"
              type="text"
              name="email"
              error={(errors.name && errors.email && errors.password
                && errors.confirmPassword) || errors.email || signupStatus === 'failed'}
              {...register('email', {
                required: true,
                pattern: /^[a-z|0-9]{4,16}$/,
              })}
            />
            {errors.email
              ? (<ErrorMessage>아이디를 다시 확인해 주세요</ErrorMessage>)
              : signupStatus === 'fail'
                ? (<ErrorMessage>해당 아이디는 사용할 수 없습니다</ErrorMessage>)
                : (<DefaultMessage>영문소문자/숫자, 4~16자만 사용 가능</DefaultMessage>)}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="input-password">비밀번호:</Label>
            <input
              id="input-password"
              type="password"
              name="password"
              error={(errors.name && errors.email && errors.password
                && errors.confirmPassword) || errors.password}
              {...register('password', {
                required: true,
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
              })}
            />
            {errors.password
              ? (<ErrorMessage>비밀번호를 다시 확인해 주세요</ErrorMessage>)
              : (<DefaultMessage>8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 함</DefaultMessage>)}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="input-confirmPassword">비밀번호 확인:</Label>
            <input
              id="input-confirmPassword"
              type="password"
              name="confirmPassword"
              error={(errors.name && errors.email && errors.password
                && errors.confirmPassword) || errors.confirmPassword}
              {...register('confirmPassword', { required: true })}
            />
          </InputWrapper>
          {errors.confirmPassword
          && (<ErrorMessage>비밀번호를 다시 확인해 주세요</ErrorMessage>)}
          {isPasswordNotMatch
          && <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>}
        </Inputs>
        <button type="submit">회원가입</button>
      </form>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.h2`
  padding-block: 4px;
  border-bottom: 1px solid black;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

const Inputs = styled.div`
  min-width: 390px;
  margin-block: 60px;
  color: gray
`;

const InputWrapper = styled.div`
  & + & {
    margin-top: 24px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 700;
`;

const ErrorMessage = styled.p`
  margin-top: 8px;
  font-size: 15px;
  color: red;
`;

const DefaultMessage = styled.p`
  margin-top: 8px;
  font-size: 15px;
`;

const SignupCompleted = styled(Container)`
  h2 {
    margin-bottom: 16px;
    font-size: ${((props) => props.theme.size.h1)};
    font-weight: 700;
    text-align: center;
  }
  p {
    margin-bottom: 40px;
    font-size: ${((props) => props.theme.size.h5)};
    text-align: center;
  }
`;
