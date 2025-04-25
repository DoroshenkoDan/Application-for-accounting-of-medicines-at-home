import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Отримує дані за його ідентифікатором.
 *
 * @function getPillByCategoryId
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} category_id - Унікальний ідентифікатор.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TPill>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.categories.Pills.getById({ category_id: 17, Pill_id: 219 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetPillByCategoryId {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPill>;
  TParams: {
    category_id: number;
    Pill_id: number;
  };
}

export type TError = TAPIGetPillByCategoryId['TError'];
export type TSuccess = TAPIGetPillByCategoryId['TSuccess'];
export type TParams = TAPIGetPillByCategoryId['TParams'];

export async function getPillByCategoryId(
  this: BaseRESTClient,
  { category_id, Pill_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(
      `/categories/${category_id}/Pills/${Pill_id}/`,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TPill,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
