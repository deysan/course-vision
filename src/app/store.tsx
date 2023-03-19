import { createContext, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useAsyncEffect } from './hooks/useAsyncEffect';
import api from './services/api';
import { validateCourseApi, validateCoursesApi } from './services/contracts';
import { Course, Courses } from './services/types';
import throttle from 'lodash.throttle';

type Context = {
  course: Course | null;
  courses: Courses[] | null;
  error: any;
  isLoading: boolean;
  progressTime: Record<string, number>;
  setProgressTime: React.Dispatch<React.SetStateAction<Record<string, number>>>;
};

const initialContext = {
  course: null,
  courses: null,
  error: null,
  isLoading: false,
  progressTime: {},
  setProgressTime: () => {},
};

const Context = createContext<Context>(initialContext);

function ContextProvider({ children }: { children: React.ReactElement }) {
  const { pathname } = useLocation();
  const { courseId } = useParams();

  const isMounted = useRef(false);

  const [progressTime, setProgressTime] = useState<Record<string, number>>({});

  console.log('progressTime', progressTime);

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
            .then(result => ({
              ...result,
              lessons: [...result.lessons].sort((a, b) => a.order - b.order),
            }))
      : () => Promise.resolve(),
    () => Promise.resolve(),
    [courseId],
  );

  const saveProgress = useRef(
    throttle((data: Record<string, number>) => {
      console.log('EFFECT');
      try {
        localStorage.setItem('progressTime', JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    }, 1000),
  );

  useEffect(() => {
    try {
      const progressData = localStorage.getItem('progressTime');
      console.log('progressData', progressData);

      if (progressData === null) {
        return undefined;
      }

      return setProgressTime(JSON.parse(progressData));
    } catch (error) {
      return undefined;
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      saveProgress.current(progressTime);
    }

    isMounted.current = true;
  }, [progressTime]);

  const contextValue = useMemo(
    () => ({
      course,
      courses,
      error: errorCourses || errorCourse,
      isLoading: isLoadingCourses || isLoadingCourse,
      progressTime,
      setProgressTime,
    }),
    [
      courses,
      errorCourses,
      errorCourse,
      isLoadingCourses,
      isLoadingCourse,
      progressTime,
      setProgressTime,
    ],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
