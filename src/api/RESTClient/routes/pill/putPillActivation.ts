import { TPillActivation } from 'api/RESTClient/types/TPills';
import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';

/**
 * Оновлює активацію Таблетока.
 *
 * @function putPillActivation
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} Pill_id - Унікальний ідентифікатор Таблетока.
 * @param {TPillActivation} params - Об'єкт з оновленими даними Таблетока.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TPillActivation>>} - Оновлені дані Таблетока.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const activate = await client.api.Pills.putActivate({ Pill_id: 2 }, { is_active: true });
 *   console.log(activate);
 * } catch (error) {
 *   console.error(error);
 * }
 */
export interface TAPIPutPillActivation {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPillActivation>;
  TParams: {
    Pill_id: number;
  };
  TPayload: TPillActivation;
}

export type TError = TAPIPutPillActivation['TError'];
export type TSuccess = TAPIPutPillActivation['TSuccess'];
export type TParams = TAPIPutPillActivation['TParams'];
export type TPayload = TAPIPutPillActivation['TPayload'];

export async function putPillActivation(
  this: BaseRESTClient,
  { Pill_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/Pills/${Pill_id}/activate/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TPillActivation,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
