import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TPillApproval } from 'api/RESTClient/types/TPills';

/**
 * Оновлює схвалення Таблетока
 *
 * @function putPillApproval
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TPillApproval} payload - Об'єкт з оновленими даними.
 * @param {number} Pill_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TPillApproval>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.Pills.putApproved({ Pill_id: 1 }, { is_approved: true });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutPillApproval {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPillApproval>;
  TParams: {
    Pill_id: number;
  };
  TPayload: TPillApproval;
}

export type TError = TAPIPutPillApproval['TError'];
export type TSuccess = TAPIPutPillApproval['TSuccess'];
export type TParams = TAPIPutPillApproval['TParams'];
export type TPayload = TAPIPutPillApproval['TPayload'];

export async function putPillApproval(
  this: BaseRESTClient,
  { Pill_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/Pills/${Pill_id}/approved/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TPillApproval,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
