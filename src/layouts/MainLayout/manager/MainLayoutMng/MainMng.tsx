import React, { createContext, PropsWithChildren, useContext } from 'react';

import { FormikProvider } from 'formik';
import { JSX } from 'react/jsx-runtime';

import { TMainMngSt } from './types';
import useInitialState from './useInitialState';

interface MainMngProps {
  children: React.ReactNode;
}

/**
 * Контекст для управління станом аутентифікації.
 * @constant {React.Context<TMainMngSt | null>}
 */
export const MainMngCtx = createContext<TMainMngSt | null>(null);

/**
 * Кастомний хук для доступу до контексту аутентифікації.
 * @throws {Error} Якщо хук використовується поза MainMngProvider.
 * @returns {TMainMngSt} Стан аутентифікації з Formik контекстом.
 */
export const useMainMng = (): TMainMngSt => {
  const context = useContext(MainMngCtx);
  if (!context) {
    throw new Error('useMainMng must be used within MainMngProvider');
  }
  return context;
};

/**
 * Провайдер для контексту управління аутентифікацією.
 * @component
 * @param {MainMngProps} props - Дочірні елементи, які отримають доступ до контексту.
 * @returns {JSX.Element} Провайдер, який обгортає дочірній елемент у контекст та FormikProvider.
 */
export default function MainMng({ children }: MainMngProps): JSX.Element {
  const value = useInitialState();

  return (
    <MainMngCtx.Provider value={value}>
      <FormikProvider value={value.formCtx}>{children}</FormikProvider>
    </MainMngCtx.Provider>
  );
}

/**
 * HOC для обгортання компонента у провайдер аутентифікації.
 * @function
 * @template P
 * @param {React.ComponentType<PropsWithChildren<P>>} Component - Компонент, який потрібно обгорнути.
 * @returns {React.FC<PropsWithChildren<P>>} Компонент, обгорнутий у MainMng.
 */
export function withMainMng<P>(
  Component: React.ComponentType<PropsWithChildren<P>>
): React.FC<PropsWithChildren<P>> {
  return (props: PropsWithChildren<P>) => {
    return (
      <MainMng>
        <Component {...props} />
      </MainMng>
    );
  };
}
