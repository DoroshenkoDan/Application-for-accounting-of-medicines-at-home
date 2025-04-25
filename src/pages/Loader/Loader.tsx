import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import client from 'api/index';

import s from './Loader.module.scss';

export default function Loader() {
  const isLogin = client.AM.token;
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (isLogin) {
        navigate('/aid');
      } else {
        navigate('/sign-in');
      }
    }, 3000); // 3 секунди

    // Очищення таймера при розмонтуванні компонента
    return () => clearTimeout(redirectTimer);
  }, [isLogin, navigate]);
  return (
    <main className={s.Loader}>
      <p>Loading</p>
    </main>
  );
}
