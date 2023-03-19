import qs from 'qs';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CourseItem from '../components/CourseItem';
import Pagination from '../components/Pagination';
import { Context } from '../store';
import { paginate } from '../utils';

const PAGE_SIZE = 10;

function CourseVision() {
  const { courses } = useContext(Context);

  const { search } = useLocation();

  const containerRef = useRef<HTMLDivElement>(null);

  const searchParams = qs.parse(search || '', {
    ignoreQueryPrefix: true,
  });

  const [currentPage, setCurrentPage] = useState<number>(
    searchParams?.page ? Number(searchParams.page) : 1,
  );

  const coursesFiltered = courses?.length ? paginate(courses, currentPage, PAGE_SIZE) : [];

  const handlePageChange = useCallback((pageIndex: number) => {
    setCurrentPage(pageIndex);
  }, []);

  useEffect(() => {
    if (containerRef?.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <div ref={containerRef}>
      <div className="main-header anim">Discover</div>
      {courses?.length ? (
        <>
          <div className="videos">
            {coursesFiltered.map(course => (
              <CourseItem course={course} key={course.id} />
            ))}
          </div>

          <Pagination
            itemsCount={courses?.length}
            pageSize={PAGE_SIZE}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      ) : null}
    </div>
  );
}

export default CourseVision;
