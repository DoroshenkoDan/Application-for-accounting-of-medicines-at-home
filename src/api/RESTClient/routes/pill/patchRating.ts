import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TPillRating } from 'api/RESTClient/types/TPills';

/**
 * Оновлює частину даних.
 *
 * @function patchPillRating
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TPillRating} payload - Об'єкт з оновленими даними.
 * @param {number} Pill_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TPillRating>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.Pills.patchRating({ Pill_id: 1 }, { rating: 5 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchPillRating {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPillRating>;
  TParams: {
    Pill_id: number;
  };
  TPayload: TPillRating;
}

export type TError = TAPIPatchPillRating['TError'];
export type TSuccess = TAPIPatchPillRating['TSuccess'];
export type TParams = TAPIPatchPillRating['TParams'];
export type TPayload = TAPIPatchPillRating['TPayload'];

export async function patchPillRating(
  this: BaseRESTClient,
  { Pill_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/Pills/${Pill_id}/rating/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TPillRating,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
