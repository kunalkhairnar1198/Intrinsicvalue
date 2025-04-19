import {API_BASE_URL as BASE} from '@env';

export const API_BASE_URL = BASE;
export const API_HEADERS = {
  'Content-Type': 'application/json',
};

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export const HTTP_ERROR_MESSAGES = {
  [HTTP_STATUS_CODES.BAD_REQUEST]: 'Bad request',
  [HTTP_STATUS_CODES.UNAUTHORIZED]: 'Unauthorized',
  [HTTP_STATUS_CODES.NOT_FOUND]: 'Not found',
  [HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR]: 'Internal server error',
};

export const API_ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your internet connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'The resource you requested was not found.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
  BAD_REQUEST: 'Bad request.',
  UNKNOWN_ERROR: 'Unknown error.',
};
