import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import ContentList from '../components/ContentList';
import VideoPlayer from '../components/VideoPlayer';
import { Course } from '../services/types';
import { Context } from '../store';
import { addOrderWebpExtension, formatDate, formatTime } from '../utils';
import throttle from 'lodash.throttle';

function CoursePage() {
  const { courseId, videoId } = useParams();

  const { course, progressTime, setProgressTime } = useContext(Context);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [lesson, setLesson] = useState<Course['lessons'][0] | undefined>(course?.lessons[0]);

  const handleProgress = useRef(
    throttle((lessonId?: string) => {
      const currentTime = videoRef?.current?.currentTime;

      if (lessonId && currentTime) {
        console.log('currentTime', currentTime);
        setProgressTime(prev => ({ ...prev, [lessonId]: currentTime }));
      }
    }, 1000),
  );

  useEffect(() => {
    if (videoId) {
      const _lesson = course?.lessons.find(lesson => lesson.id === videoId);

      if (_lesson) {
        setLesson(_lesson);
        return;
      }
    }

    setLesson(course?.lessons[0]);
  }, [course, videoId]);

  useEffect(() => {
    if (lesson?.id && progressTime[lesson.id] && videoRef?.current) {
      videoRef.current.currentTime = progressTime[lesson.id];
    }
  }, [lesson?.id]);

  return (
    <>
      <div className="main-header anim">
        {lesson?.title}{' '}
        {lesson?.status === 'locked' ? (
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            shape-rendering="geometricPrecision"
            viewBox="0 0 24 24"
            height="20"
            width="20"
            style={{ color: 'rgb(234, 90, 148)' }}
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0110 0v4"></path>
          </svg>
        ) : null}
      </div>
      <div className="stream-area">
        <div className="video-stream">
          <VideoPlayer
            videoRef={videoRef}
            src={lesson?.link || ''}
            className="video-js vjs-default-skin anim"
            width="640px"
            height="267px"
            controls
            preload="none"
            poster={
              lesson?.previewImageLink &&
              addOrderWebpExtension(lesson.previewImageLink, lesson?.order)
            }
            onTimeUpdate={() => handleProgress.current(lesson?.id)}
          />

          <div className="video-detail">
            <div className="video-content">
              <div className="video-p-wrapper anim">
                <div className="video-p-detail">
                  <div className="video-p-name">
                    {course?.rating} ★{' '}
                    {course?.tags.map(tag => (
                      <React.Fragment key={tag}>{tag}</React.Fragment>
                    ))}
                  </div>
                  <div className="video-p-sub">{formatDate(course?.launchDate || '')}</div>
                </div>
              </div>

              <div className="video-p-title anim">{course?.title}</div>
              <div className="video-p-subtitle anim">{course?.description}</div>
              <div className="video-p-title anim">Skills</div>
              <ul className="video-p-subtitle anim">
                {course?.meta.skills?.map((skill, index) => (
                  <li key={index as React.Key}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="chat-stream">
          <div className="chat-vid__title anim">Course content</div>

          {courseId && course?.lessons.length ? (
            <ContentList courseId={courseId} lessonId={lesson?.id || ''} lessons={course.lessons} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default CoursePage;
