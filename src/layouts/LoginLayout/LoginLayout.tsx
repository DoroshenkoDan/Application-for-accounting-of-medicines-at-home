import { Outlet } from 'react-router-dom';

import s from './LoginLayout.module.scss';

export default function LoginLayout() {
  return (
    <section className={s.LoginLayout}>
      <div className={s.inner}>
        <Outlet />
      </div>
    </section>
  );
}
