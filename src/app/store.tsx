import { createContext, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useAsyncEffect } from './hooks/useAsyncEffect';
import api from './services/api';
import { validateCourseApi, validateCoursesApi } from './services/contracts';
import { Course, Courses } from './services/types';

type Context = {
  course: Course | null;
  courses: Courses[] | null;
  error: any;
  isLoading: boolean;
};

const initialContext = { course: null, courses: null, error: null, isLoading: false };

const Context = createContext<Context>(initialContext);

function ContextProvider({ children }: { children: React.ReactElement }) {
  const { pathname } = useLocation();
  const { courseId } = useParams();

  const {
    result: courses,
    error: errorCourses,
    isLoading: isLoadingCourses,
  } = useAsyncEffect(
    pathname === '/'
      ? () =>
          api()
            .then(res => res.json())
            .then(data => validateCoursesApi.parse(data.courses))
      : () => Promise.resolve(),
    () => Promise.resolve(),
    [pathname],
  );

  const {
    result: course,
    error: errorCourse,
    isLoading: isLoadingCourse,
  } = useAsyncEffect(
    courseId
      ? () =>
          api(courseId)
            .then(res => res.json())
            .then(data => validateCourseApi.parse(data))
      : () => Promise.resolve(),
    () => Promise.resolve(),
    [courseId],
  );

  const contextValue = useMemo(
    () => ({
      course,
      courses,
      error: errorCourses || errorCourse,
      isLoading: isLoadingCourses || isLoadingCourse,
    }),
    [courses, errorCourses, errorCourse, isLoadingCourses, isLoadingCourse],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
