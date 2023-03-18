import { useContext } from 'react';

import CourseItem from '../components/CourseItem';
import { Context } from '../store';

function CourseVision() {
  const { courses } = useContext(Context);

  console.log('courses', courses);

  return (
    <>
      <div className="main-header anim">Discover</div>
      <div className="videos">
        {courses?.length
          ? courses.map(course => <CourseItem course={course} key={course.id} />)
          : null}
      </div>
    </>
  );
}

export default CourseVision;
