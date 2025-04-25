import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TPillUpdate } from 'api/RESTClient/types/TPills';
import { TPill } from 'types/TPill';

/**
 * Оновлює дані Таблетока.
 *
 * @function putPill
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {number} Pill_id - Унікальний ідентифікатор Таблетока.
 * @param {TPillUpdate} params - Об'єкт з оновленими даними Таблетока.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TPill>>} - Оновлені дані Таблетока.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.Pills.put({ Pill_id: 2 }, { category_id: 1, Pill_type: 2, name: 'Luxury Pill', capacity: 4, ....All });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutPill {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPill>;
  TParams: {
    Pill_id: number;
  };
  TPayload: TPillUpdate;
}

export type TError = TAPIPutPill['TError'];
export type TSuccess = TAPIPutPill['TSuccess'];
export type TParams = TAPIPutPill['TParams'];
export type TPayload = TAPIPutPill['TPayload'];

export async function putPill(
  this: BaseRESTClient,
  { Pill_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/Pills/${Pill_id}/`,
      payload,
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
