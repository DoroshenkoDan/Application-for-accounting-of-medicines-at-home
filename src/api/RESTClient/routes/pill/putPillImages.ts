import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import { TResponseError, TResponseSuccess } from 'api/RESTClient/types';
import { TPillImages, TPillImagesResponse } from 'api/RESTClient/types/TPills';

/**
 * Оновлює зображення Таблетока.
 *
 * @function putPillImages
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TPillImages} payload - Об'єкт з оновленими даними.
 * @param {number} Pill_id - Унікальний ідентифікатор.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @returns {Promise<TResponseSuccess<TPillImagesResponse>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.Pills.putImages({ Pill_id: 1 }, { image: '', uploaded_images: [''] });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIPutApprovalPill {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TPillImagesResponse>;
  TParams: {
    Pill_id: number;
  };
  TPayload: TPillImages;
}

export type TError = TAPIPutApprovalPill['TError'];
export type TSuccess = TAPIPutApprovalPill['TSuccess'];
export type TParams = TAPIPutApprovalPill['TParams'];
export type TPayload = TAPIPutApprovalPill['TPayload'];

export async function putPillImages(
  this: BaseRESTClient,
  { Pill_id }: TParams,
  payload: TPayload,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.put<TSuccess>(
      `/Pills/${Pill_id}/images/`,
      payload,
      {
        ...config,
        signal,
      }
    );
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TPillImagesResponse,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
