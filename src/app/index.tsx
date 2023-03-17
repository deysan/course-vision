import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import CoursePage from './layouts/CoursePage';
import CourseVision from './layouts/CourseVision';
import NotFound from './layouts/NotFound';
import RootLayout from './layouts/RootLayout';

import './style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <CourseVision />,
      },
      {
        path: ':courseId',
        element: <CoursePage />,
      },
      {
        path: ':courseId/:videoId',
        element: <CoursePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
