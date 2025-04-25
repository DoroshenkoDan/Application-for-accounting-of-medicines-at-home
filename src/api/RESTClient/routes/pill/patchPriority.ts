import { TPillPriority } from 'api/RESTClient/types/TPills';
import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Оновлює частину даних.
 *
 * @function patchPillPriority
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
 *   const { data } = await client.api.Pills.patchPriority({ Pill_id: 1 }, { priority: 100 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchPillPriority {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPillPriority>;
  TParams: {
    Pill_id: number;
  };
  TPayload: TPillPriority;
}

export type TError = TAPIPatchPillPriority['TError'];
export type TSuccess = TAPIPatchPillPriority['TSuccess'];
export type TParams = TAPIPatchPillPriority['TParams'];
export type TPayload = TAPIPatchPillPriority['TPayload'];

export async function patchPillPriority(
  this: BaseRESTClient,
  { Pill_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
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
