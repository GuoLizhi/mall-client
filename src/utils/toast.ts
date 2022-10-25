import { Toast } from 'vant';

export function showLoading(message = '加载中...') {
  Toast.loading({
    message,
    forbidClick: true,
    loadingType: 'spinner',
  });
}

export function hideLoading() {
  Toast.clear();
}
