import { Link } from 'react-router-dom';

import { Course } from '../services/types';
import { addOrderWebpExtension, formatTime } from '../utils';

type Props = {
  courseId: string;
  lessonId: string;
  lessons: Course['lessons'];
  setLesson: (item: Course['lessons'][0]) => void;
};

function ContentList(props: Props) {
  const { courseId, lessonId, lessons, setLesson } = props;

  return (
    <div className="content anim">
      {lessons.map(item => (
        <Link
          key={item.id}
          to={`/${courseId}/${item.id}`}
          className={`content-wrapper ${item.id === lessonId ? 'active' : ''} ${
            item?.status === 'locked' ? 'lock' : ''
          }`}
          onClick={e => {
            e.preventDefault();
            item?.status === 'unlocked' ? setLesson(item) : null;
          }}
        >
          <img
            className="content-img"
            src={addOrderWebpExtension(item.previewImageLink, item.order)}
          />
          <div className="content-content" title={item.status === 'locked' ? 'locked' : ''}>
            <div className="content-title">{item.title}</div>
            <div className="content-status">
              {item?.status === 'unlocked' ? (
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  shape-rendering="geometricPrecision"
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                  style={{ color: 'rgb(38, 203, 124)' }}
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 019.9-1"></path>
                </svg>
              ) : (
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  shape-rendering="geometricPrecision"
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                  style={{ color: 'rgb(234, 90, 148)' }}
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0110 0v4"></path>
                </svg>
              )}
              {formatTime(item.duration)}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ContentList;
