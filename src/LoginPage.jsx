import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';

export default function LoginPage() {
  const location = useLocation();
  const dispatch = useDispatch();

  //   useEffect(() => () => {
  //     dispatch(resetLoginStatus());
  //   }, []);

  return (
    <LoginForm location={location} />
  );
}
