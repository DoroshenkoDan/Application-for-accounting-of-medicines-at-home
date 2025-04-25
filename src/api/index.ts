import RESTClient from './RESTClient/RESTClient';

const client = new RESTClient(
  `${String(process.env.REACT_APP_API_URL)}`, // базовий URL API
  'pillKey', // ключ для зберігання даних
  'v1', // версія API
  '/login' // базовий шлях для login endpoints
);

export default client;
