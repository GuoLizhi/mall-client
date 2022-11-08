export default function getErrMsg(err: any) {
  return err?.message || '系统异常，请稍后重试';
}
