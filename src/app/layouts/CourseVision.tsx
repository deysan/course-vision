import { useContext } from 'react';

import { Context } from '../store';
import { addWebpExtension, formatTime } from '../utils';

function CourseVision() {
  const { courses, error, isLoading } = useContext(Context);

  console.log('store', courses?.[0]);

  return (
    <>
      <div className="main-header anim">Discover</div>
      <div className="videos">
        {courses?.length
          ? courses.map(course => (
              <div className="video anim" key={course.id}>
                <div className="video-time">{course.rating}★</div>
                <div className="video-wrapper">
                  <video muted poster={addWebpExtension(course.previewImageLink)}>
                    <source
                      src="https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761"
                      type="video/mp4"
                    />
                  </video>
                  {/* <div className="author-img__wrapper video-author">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-check"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img
                      className="author-img"
                      src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    />
                  </div> */}
                </div>
                <div className="video-by">{course.tags.map(tag => tag)}</div>
                <div className="video-name">{course.title}</div>
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
            ))
          : null}
      </div>
    </>
  );
}

export default CourseVision;
