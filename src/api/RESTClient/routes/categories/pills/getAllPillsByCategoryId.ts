import { AxiosRequestConfig } from 'axios';

import BaseRESTClient from 'api/BaseRESTClient';
import {
  TListMeta,
  TResponseError,
  TResponseSuccess,
} from 'api/RESTClient/types';

/**
 * Отримує дані за його ідентифікатором.
 *
 * @function getAllPillsByCategoryId
 * @this {BaseRESTClient} - Екземпляр REST-клієнта для виконання запиту.
 * @param {TListMeta<TPill>} [params] - Параметри для запиту, такі як `page`, `pageSize`, `sorting`, `filters`.
 * @param {number} category_id - Унікальний ідентифікатор.
 * @param {AbortSignal} - Сигнал для можливості скасування запиту.
 * @param {AxiosRequestConfig} [config] - Додаткові налаштування для запиту.
 * @returns {Promise<TResponseSuccess<TListPills>>} - Об'єкт успішної відповіді з даними.
 * @throws {TResponseError} - Об'єкт помилки, що містить повідомлення та статус-код.
 *
 * @example
 * try {
 *   const { data } = await client.api.categories.Pills.getAll({ category_id: 1 });
 *   console.log(data);
 * } catch (error) {
 *   console.error(error);
 * }
 */

export interface TAPIGetAllPillsByCategoryId {
  TError: TResponseError;
  TSuccess: TResponseSuccess<TListPills>;
  TParams: {
    category_id: number;
  };
}

export type TError = TAPIGetAllPillsByCategoryId['TError'];
export type TSuccess = TAPIGetAllPillsByCategoryId['TSuccess'];
export type TParams = TAPIGetAllPillsByCategoryId['TParams'];

export async function getAllPillsByCategoryId(
  this: BaseRESTClient,
  { category_id }: TParams,
  params?: TListMeta<TPill>,
  { signal }: { signal?: AbortSignal } = {},
  config?: AxiosRequestConfig
): Promise<TSuccess> {
  try {
    const response = await this.client.get<TSuccess>(
      `/categories/${category_id}/Pills/`,
      {
        ...config,
        signal,
        params,
        paramsSerializer: {
          indexes: null,
        },
      }
    );
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
