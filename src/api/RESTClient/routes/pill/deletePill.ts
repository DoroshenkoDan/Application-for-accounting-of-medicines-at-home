import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Видаляє Таблеток за його ID.
 *
 * @function deletePill
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {number} Pill_id - Унікальний ідентифікатор Таблетока, який потрібно видалити.
 * @returns {Promise<TResponseSuccess<null>>} - Об'єкт успішної відповіді.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   await client.api.Pills.delete({ Pill_id: 1 });
 *   console.log('Таблеток успішно видалено');
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIDeletePill {
  TError: TResponseError;
  TSuccess: TResponseSuccess<null>;
  TParams: {
    Pill_id: number;
  };
}

export type TError = TAPIDeletePill['TError'];
export type TSuccess = TAPIDeletePill['TSuccess'];
export type TParams = TAPIDeletePill['TParams'];

export async function deletePill(
  this: BaseRESTClient,
  { Pill_id }: TParams,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.delete<TSuccess>(`/Pills/${Pill_id}/`, {
      ...config,
      signal,
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: null,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
