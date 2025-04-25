import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TPillPartialUpdate } from 'api/RESTClient/types/TPills';
import { TPill } from 'types/TPill';

/**
 * Оновлює частину даних Таблетока.
 *
 * @function patchPill
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
 *   const updatedPill = await client.api.Pills.patch({ Pill_id: 2 }, {
 *     category_id: 2,
 *     Pill_type: 1,
 *   });
 *   console.log(updatedPill.data);
 * } catch (error) {
 *   console.error(error);
 * }
 */
export interface TAPIPatchPill {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPill>;
  TParams: {
    Pill_id: number;
  };
  TPayload: TPillPartialUpdate;
}

export type TError = TAPIPatchPill['TError'];
export type TSuccess = TAPIPatchPill['TSuccess'];
export type TParams = TAPIPatchPill['TParams'];
export type TPayload = TAPIPatchPill['TPayload'];

export async function patchPill(
  this: BaseRESTClient,
  { Pill_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
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
