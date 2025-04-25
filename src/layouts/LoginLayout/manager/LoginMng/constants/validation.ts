import * as Yup from 'yup';

/**
 * Початкові значення для форми.
 * @constant {Object} initialValues
 * @property {string} email - Початкове значення для поля email.
 * @property {string} password - Початкове значення для поля паролю.
 * @property {string} confirm_password - Початкове значення для підтвердження паролю.
 */
export const initialValues = {
  email: '',
  password: '',
  confirm_password: '',
};

/**
 * Схема валідації для email.
 * @constant {Yup.StringSchema} validationEmailSchema
 * @description Перевіряє, що email має правильний формат і містить крапку після @.
 */
export const validationEmailSchema = Yup.string()
  .email('Введіть дійсну адресу електронної пошти')
  .matches(
    /^[^\s@]+@[^\s@.]+\.[^\s@]+$/,
    'Введіть дійсну адресу електронної пошти'
  )
  .required('Це поле обов’язкове');

/**
 * Схема валідації для паролю.
 * @constant {Yup.StringSchema} validationPasswordSchema
 * @description Перевіряє, що поле паролю не порожнє.
 */
export const validationPasswordSchema = Yup.string().required(
  'Це поле обов’язкове'
);

/**
 * Схема валідації для підтвердження паролю.
 * @constant {Yup.StringSchema} validationConfirmPasswordSchema
 * @description Перевіряє, що підтвердження паролю збігається з основним паролем.
 */
export const validationConfirmPasswordSchema = Yup.string()
  .oneOf([Yup.ref('password'), undefined], 'Паролі не співпадають')
  .required('Це поле обов’язкове');

/**
 * Загальна схема валідації для форми.
 * @constant {Yup.ObjectSchema} validationSchema
 * @description Об’єднує всі окремі схеми в одну загальну.
 */
export const validationSchema = Yup.object().shape({
  email: validationEmailSchema,
  password: validationPasswordSchema,
  confirm_password: validationConfirmPasswordSchema,
});
