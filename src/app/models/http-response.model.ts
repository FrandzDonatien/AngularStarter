export class HttpResponseModel<T>{
  status: number | undefined;
  message: string  | undefined;
  data: T | undefined;
}