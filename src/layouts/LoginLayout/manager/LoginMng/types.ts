import { FormikContextType } from 'formik';

import { TCredentials } from 'api/RESTClient/types/TUsers';

/**
 * Стан управління аутентифікацією.
 * @interface TAuthMngSt
 * @property {FormikContextType<TCredentials>} formCtx - Контекст форми з даними користувача.
 */
export interface TLoginMngSt {
  formCtx: FormikContextType<TCredentials>;
}
