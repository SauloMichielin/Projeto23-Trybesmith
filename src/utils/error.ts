const errorMap: {
  ERROR_200: number;
  ERROR_400: number;
  ERROR_404: number;
  ERROR_422: number;
} = {
  ERROR_200: 200,
  ERROR_400: 400,
  ERROR_404: 404,
  ERROR_422: 422,
};

type StatusCode = 'ERROR_200' | 'ERROR_400' | 'ERROR_404' | 'ERROR_422';

const mapError = (type: StatusCode) => errorMap[type] || 500;

export = {
  errorMap,
  mapError,
};