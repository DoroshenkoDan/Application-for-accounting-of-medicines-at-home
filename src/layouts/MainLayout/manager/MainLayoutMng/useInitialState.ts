import { useFormik } from 'formik';

import { initialValues, validationSchema } from './constants';
import { TLoginMngSt } from './types';

import { TCredentials } from 'api/RESTClient/types/TUsers';

/**
 * Хук для ініціалізації стану форми аутентифікації.
 * @returns {TAuthMngSt} Стан форми, включаючи Formik контекст.
 */
export default function useInitialState(): TLoginMngSt {
  const formik = useFormik<TCredentials>({
    initialValues,
    validationSchema,
    onSubmit: (values) => console.log('Success:', values),
  });

  return {
    formCtx: formik,
  };
}
