import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TPillRequest } from 'api/RESTClient/types/TPills';
import { TPill } from 'types/TPill';

/**
 * Реєструє новий Таблеток в системі.
 *
 * @function registerPill
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TPillRequest} params - Дані для реєстрації Таблетока.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TPill>>} - Об'єкт успішної відповіді з даними нового Таблетока.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.Pills.register({ category_id: number; Pill_type: number; ... });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIRegisterPill {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPill>;
  TPayload: TPillRequest;
}

export type TError = TAPIRegisterPill['TError'];
export type TSuccess = TAPIRegisterPill['TSuccess'];
export type TPayload = TAPIRegisterPill['TPayload'];

export async function registerPill(
  this: BaseRESTClient,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.post<TSuccess>('/Pills/', payload, {
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
