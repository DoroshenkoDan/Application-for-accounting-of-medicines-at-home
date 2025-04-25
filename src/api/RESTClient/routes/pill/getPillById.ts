import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Отримує дані Таблетока за його ідентифікатором.
 *
 * @function getPillById
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} Pill_id - Унікальний ідентифікатор Таблетока.
 * @returns {Promise<TResponseSuccess<TPill>>} - Об'єкт успішної відповіді з даними Таблетока.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.Pills.getById({ Pill_id: 1 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetPillById {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPill>;
  TParams: {
    Pill_id: number;
  };
}

export type TError = TAPIGetPillById['TError'];
export type TSuccess = TAPIGetPillById['TSuccess'];
export type TParams = TAPIGetPillById['TParams'];

export async function getPillById(
  this: BaseRESTClient,
  { Pill_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(`/Pills/${Pill_id}/`, {
      ...config,
      signal,
    });
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
