import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TPillPriority } from 'api/RESTClient/types/TPills';

/**
 * Оновлює пріоритет Таблетока.
 *
 * @function putPillPriority
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TPillPriority} payload - Об'єкт з оновленими даними.
 * @param {number} Pill_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TPillPriority>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.Pills.putPriority({ Pill_id: 1 }, { priority: 100 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutPillPriority {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPillPriority>;
  TParams: {
    Pill_id: number;
  };
  TPayload: TPillPriority;
}

export type TError = TAPIPutPillPriority['TError'];
export type TSuccess = TAPIPutPillPriority['TSuccess'];
export type TParams = TAPIPutPillPriority['TParams'];
export type TPayload = TAPIPutPillPriority['TPayload'];

export async function putPillPriority(
  this: BaseRESTClient,
  { Pill_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/Pills/${Pill_id}/priority/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TPillPriority,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
