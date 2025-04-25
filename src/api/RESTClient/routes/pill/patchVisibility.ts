import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TPillVisibility } from 'api/RESTClient/types/TPills';

/**
 * Оновлює частину даних.
 *
 * @function patchPillVisibility
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TPillVisibility} payload - Об'єкт з оновленими даними.
 * @param {number} Pill_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TPillVisibility>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.Pills.patchVisibility({ Pill_id: 1 }, { is_hidden: true });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchPillVisibility {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPillVisibility>;
  TParams: {
    Pill_id: number;
  };
  TPayload: TPillVisibility;
}

export type TError = TAPIPatchPillVisibility['TError'];
export type TSuccess = TAPIPatchPillVisibility['TSuccess'];
export type TParams = TAPIPatchPillVisibility['TParams'];
export type TPayload = TAPIPatchPillVisibility['TPayload'];

export async function patchPillVisibility(
  this: BaseRESTClient,
  { Pill_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/Pills/${Pill_id}/hidden/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TPillVisibility,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
