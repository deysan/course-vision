import { useRef, useState } from 'react';

import { Courses } from '../services/types';
import { addWebpExtension } from '../utils';
import VideoPlayer from './VideoPlayer';

type Props = {
  course: Courses;
};

function CourseItem(props: Props) {
  const { course } = props;

  const videoRef = useRef<HTMLVideoElement>(null);

  const [isHover, setHover] = useState(false);

  return (
    <div
      className="video anim"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="video-time">{course.rating}★</div>
      <div className="video-wrapper">
        <VideoPlayer
          src={course.meta.courseVideoPreview?.link || ''}
          poster={addWebpExtension(course.previewImageLink)}
          autoPlay={isHover}
          loop={true}
          muted
        />
      </div>
      <div className="video-by">{course.tags.map(tag => tag)}</div>
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
        <span className="seperate video-seperate"></span>
        {new Intl.DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(Date.parse(course.launchDate))}
      </div>
    </div>
  );
}

export default CourseItem;
