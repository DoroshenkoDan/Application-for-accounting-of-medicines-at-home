import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TPillPremiumLevel } from 'api/RESTClient/types/TPills';

/**
 * Оновлює частину даних.
 *
 * @function patchPillPremiumLevel
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TPillPremiumLevel} payload - Об'єкт з оновленими даними.
 * @param {number} Pill_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TPillPremiumLevel>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.Pills.patchPremiumLevel({ Pill_id: 1 }, { premium_level: 0 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPatchPillPremiumLevel {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPillPremiumLevel>;
  TParams: {
    Pill_id: number;
  };
  TPayload: TPillPremiumLevel;
}

export type TError = TAPIPatchPillPremiumLevel['TError'];
export type TSuccess = TAPIPatchPillPremiumLevel['TSuccess'];
export type TParams = TAPIPatchPillPremiumLevel['TParams'];
export type TPayload = TAPIPatchPillPremiumLevel['TPayload'];

export async function patchPillPremiumLevel(
  this: BaseRESTClient,
  { Pill_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.patch<TSuccess>(
      `/Pills/${Pill_id}/premium_level/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TPillPremiumLevel,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
