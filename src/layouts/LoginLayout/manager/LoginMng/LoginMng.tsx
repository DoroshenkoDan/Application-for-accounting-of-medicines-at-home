import React, { createContext, PropsWithChildren, useContext } from 'react';

import { FormikProvider } from 'formik';
import { JSX } from 'react/jsx-runtime';

import { TLoginMngSt } from './types';
import useInitialState from './useInitialState';

interface LoginMngProps {
  children: React.ReactNode;
}

/**
 * Контекст для управління станом аутентифікації.
 * @constant {React.Context<TLoginMngSt | null>}
 */
export const LoginMngCtx = createContext<TLoginMngSt | null>(null);

/**
 * Кастомний хук для доступу до контексту аутентифікації.
 * @throws {Error} Якщо хук використовується поза LoginMngProvider.
 * @returns {TLoginMngSt} Стан аутентифікації з Formik контекстом.
 */
export const useLoginMng = (): TLoginMngSt => {
  const context = useContext(LoginMngCtx);
  if (!context) {
    throw new Error('useLoginMng must be used within LoginMngProvider');
  }
  return context;
};

/**
 * Провайдер для контексту управління аутентифікацією.
 * @component
 * @param {LoginMngProps} props - Дочірні елементи, які отримають доступ до контексту.
 * @returns {JSX.Element} Провайдер, який обгортає дочірній елемент у контекст та FormikProvider.
 */
export default function LoginMng({ children }: LoginMngProps): JSX.Element {
  const value = useInitialState();

  return (
    <LoginMngCtx.Provider value={value}>
      <FormikProvider value={value.formCtx}>{children}</FormikProvider>
    </LoginMngCtx.Provider>
  );
}

/**
 * HOC для обгортання компонента у провайдер аутентифікації.
 * @function
 * @template P
 * @param {React.ComponentType<PropsWithChildren<P>>} Component - Компонент, який потрібно обгорнути.
 * @returns {React.FC<PropsWithChildren<P>>} Компонент, обгорнутий у LoginMng.
 */
export function withLoginMng<P>(
  Component: React.ComponentType<PropsWithChildren<P>>
): React.FC<PropsWithChildren<P>> {
  return (props: PropsWithChildren<P>) => {
    return (
      <LoginMng>
        <Component {...props} />
      </LoginMng>
    );
  };
}
