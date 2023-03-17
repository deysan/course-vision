const token = [
  import.meta.env.VITE_API_REQUEST_HEADER,
  import.meta.env.VITE_API_REQUEST_BODY,
  import.meta.env.VITE_API_REQUEST_SIGNATURE,
].join('.');

export const REQUEST_OPTIONS = {
  headers: { Authorization: `Bearer ${token}` },
};

export const URL = (courseId?: string) => import.meta.env.VITE_API_REQUEST_URL + (courseId || '');
