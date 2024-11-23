export * from './deposits';
export * from './orders';

export enum AmountType {
  BASE = 'BASE',
  QUOTE = 'QUOTE',
}

export type ApiData<Type> = {
  error: undefined;
  data: Type;
};

export type ApiError = { error: string; data: undefined };

export type ApiResponse<Type> = ApiData<Type> | ApiError;
