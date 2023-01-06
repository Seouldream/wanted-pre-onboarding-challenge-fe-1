import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetSignupStatus } from './action';
import SignupForm from './SignupForm';

export default function SignupPage() {
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(resetSignupStatus());
  }, []);
  return (
    <SignupForm />
  );
}
