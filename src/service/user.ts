import { Toast } from 'vant';
import getErrMsg from '@/utils/getErrMsg';
import { post } from './axios';
import * as api from './api';

export interface LoginRequestParams {
  username: string;
  password: string;
}

export interface LoginResponseParams {
  token: string;
}

export interface RegistRequestParams {
  username: string;
  nickname: string;
  password: string;
}

export interface RegistResponseParams {}

export async function login(params: LoginRequestParams) {
  try {
    const resp = await post<LoginRequestParams, LoginResponseParams>(api.LOGIN, params);
    Toast.success('登录成功');
    return resp.data;
  } catch (err) {
    const msg = getErrMsg(err);
    Toast(msg);
    return null;
  }
}

export async function regist(params: RegistRequestParams) {
  try {
    const resp = await post<RegistRequestParams, RegistResponseParams>(api.REGIST, params);
    return resp.data;
  } catch (err) {
    const msg = getErrMsg(err);
    Toast(msg);
    return null;
  }
}
