const token = [
  import.meta.env.VITE_API_REQUEST_HEADER,
  import.meta.env.VITE_API_REQUEST_BODY,
  import.meta.env.VITE_API_REQUEST_SIGNATURE,
].join('.');

const options = {
  headers: { Authorization: `Bearer ${token}` },
};

const url = (courseId?: string) => import.meta.env.VITE_API_REQUEST_URL + (courseId || '');

const api = (id?: string) => fetch(url(id), options);

export default api;
