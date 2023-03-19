import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Courses } from '../services/types';
import { addWebpExtension, formatDate } from '../utils';
import VideoPlayer from './VideoPlayer';

type Props = {
  course: Courses;
};

function CourseItem({ course }: Props) {
  const [isHover, setHover] = useState(false);

  return (
    <Link
      to={course.id}
      className="video anim"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="video-rating">{course.rating}★</div>
      <div className="video-wrapper">
        <VideoPlayer
          src={course.meta.courseVideoPreview?.link || ''}
          poster={addWebpExtension(course.previewImageLink)}
          autoPlay={isHover}
          loop
          muted
        />
      </div>
      <div className="video-tag">
        {course.tags.map(tag => (
          <span key={tag}>{`#${tag}`}</span>
        ))}
      </div>
      <h3 className="video-name">{course.title}</h3>
      {course.meta.skills?.length ? (
        <ul className="video-desc">
          {course.meta.skills?.map((skill, index) => (
            <li key={index as React.Key}>{skill}</li>
          ))}
        </ul>
      ) : null}
      <div className="video-view">
        Lessons {course.lessonsCount}
        <span className="separate video-separate"></span>
        {formatDate(course.launchDate)}
      </div>
    </Link>
  );
}

export default CourseItem;
