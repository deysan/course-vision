import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import CourseItem from './layouts/course-item';
import CourseVision from './layouts/course-vision';
import NotFound from './layouts/not-found';
import RootLayout from './layouts/root-layout';

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
        element: <CourseItem />,
      },
      {
        path: ':courseId/:itemId',
        element: <CourseItem />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
