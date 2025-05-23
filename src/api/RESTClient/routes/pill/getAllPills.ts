import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import {
  TListMeta,
  TResponseError,
  TResponseSuccess,
} from 'api/RESTClient/types';

/**
 * Отримує список усіх Таблетоків із сервера.
 *
 * @function getAllPills
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TListMeta<TPill>} [params] - Параметри для запиту, такі як `page`, `pageSize`, `sorting`, `filters`.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TListPills>>} - Об'єкт із списком Таблетоків, що містить `count`, `next`, `previous`, `page`, `pageSize`, `results`.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.Pills.getAll();
 *   console.log(data.results);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetAllPills {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TListPills>;
}
export type TError = TAPIGetAllPills['TError'];
export type TSuccess = TAPIGetAllPills['TSuccess'];

export async function getAllPills(
  this: BaseRESTClient,
  params?: TListMeta<TPill>,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>('/Pills/', {
      ...config,
      signal,
      params,
      paramsSerializer: {
        indexes: null,
      },
    });
    return {
      message: response.statusText,
      status: 'OK',
      data: response.data as unknown as TListPills,
    };
  } catch (error: any | TError) {
    throw {
      message: error.message,
      status: 'Error',
      errors: error.response?.data || {},
    };
  }
}
