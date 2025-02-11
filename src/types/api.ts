export type ApiResponse<T> = {
  status: boolean;
  statusCode: number;
  message: string;
  data?: T;
};

export type QueryResponse<T> = {
  data?: T;
  meta: MetaData;
};

export type MetaData = {
  total: number;
  page: number;
  last_page: number;
  limit: number;
};

export type ApiProps<T = undefined> = {
  id?: T;
  onMutate?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
};
