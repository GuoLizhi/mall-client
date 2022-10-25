import axios, { AxiosRequestConfig } from 'axios';

export interface BaseHttpResponse<R> {
  code: number;
  data: R;
  msg: string;
}

axios.interceptors.request.use((config) => config);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get<T, R>(url: string, params: T, option?: any): Promise<BaseHttpResponse<R>> {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
        ...option,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post<T, R>(
  url: string,
  params: T,
  option?: AxiosRequestConfig,
): Promise<BaseHttpResponse<R>> {
  return new Promise((resolve, reject) => {
    axios
      // @ts-ignore
      .post(url, params, { 'Content-Type': 'application/json', ...option })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
