function CoursePage() {
  return (
    <>
      <div className="main-header anim">Course Item</div>
      <div className="stream-area">
        <div className="video-stream">
          <video
            id="my_video_1"
            className="video-js vjs-default-skin anim"
            width="640px"
            height="267px"
            controls
            preload="none"
            poster="https://images.unsplash.com/photo-1476801071117-fbc157ae3f01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&w=1000&q=80"
            data-setup='{ "aspectRatio":"940:620", "playbackRates": [1, 1.5, 2] }'
          >
            <source
              src="https://player.vimeo.com/external/390402719.sd.mp4?s=20cfdb066c4253047562b65bd4e411b86a004bc5&profile_id=139&oauth2_token_id=57447761"
              type="video/mp4"
            />
            <source
              src="https://player.vimeo.com/external/390402719.sd.mp4?s=20cfdb066c4253047562b65bd4e411b86a004bc5&profile_id=139&oauth2_token_id=57447761"
              type="video/webm"
            />
          </video>
          <div className="video-detail">
            <div className="video-content">
              <div className="video-p-wrapper anim">
                <div className="author-img__wrapper video-author video-p">
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
                </div>
                <div className="video-p-detail">
                  <div className="video-p-name">Andy William</div>
                  <div className="video-p-sub">1,980,893 subscribers</div>
                </div>
                <div className="button-wrapper">
                  <button className="like">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.435 2.582a1.933 1.933 0 00-1.93-.503L3.408 6.759a1.92 1.92 0 00-1.384 1.522c-.142.75.355 1.704 1.003 2.102l5.033 3.094a1.304 1.304 0 001.61-.194l5.763-5.799a.734.734 0 011.06 0c.29.292.29.765 0 1.067l-5.773 5.8c-.428.43-.508 1.1-.193 1.62l3.075 5.083c.36.604.98.946 1.66.946.08 0 .17 0 .251-.01.78-.1 1.4-.634 1.63-1.39l4.773-16.075c.21-.685.02-1.43-.48-1.943z" />
                    </svg>
                    Share
                  </button>
                  <button className="like red">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.85 2.5c.63 0 1.26.09 1.86.29 3.69 1.2 5.02 5.25 3.91 8.79a12.728 12.728 0 01-3.01 4.81 38.456 38.456 0 01-6.33 4.96l-.25.15-.26-.16a38.093 38.093 0 01-6.37-4.96 12.933 12.933 0 01-3.01-4.8c-1.13-3.54.2-7.59 3.93-8.81.29-.1.59-.17.89-.21h.12c.28-.04.56-.06.84-.06h.11c.63.02 1.24.13 1.83.33h.06c.04.02.07.04.09.06.22.07.43.15.63.26l.38.17c.092.05.195.125.284.19.056.04.107.077.146.1l.05.03c.085.05.175.102.25.16a6.263 6.263 0 013.85-1.3zm2.66 7.2c.41-.01.76-.34.79-.76v-.12a3.3 3.3 0 00-2.11-3.16.8.8 0 00-1.01.5c-.14.42.08.88.5 1.03.64.24 1.07.87 1.07 1.57v.03a.86.86 0 00.19.62c.14.17.35.27.57.29z"
                      />
                    </svg>
                    Liked
                  </button>
                </div>
              </div>
              <div className="video-p-title anim">Basic how to ride your Skateboard</div>
              <div className="video-p-subtitle anim">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum tempora
                consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis earum
                velit accusantium maiores qui sit quas, laborum voluptatibus vero quidem tempore
                facilis voluptate tempora deserunt!{' '}
              </div>
              <div className="video-p-subtitle anim">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum qui
                dolorum fugiat eius accusantium repellendus illum tempora consequuntur. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
        <div className="chat-stream">
          <div className="chat-vid__title anim">Course content</div>
          <div className="chat-vid anim">
            <div className="chat-vid__wrapper">
              <img
                className="chat-vid__img"
                src="https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg"
              />
              <div className="chat-vid__content">
                <div className="chat-vid__name">Prepare for your first skateboard jump</div>
                <div className="chat-vid__by">Jordan Wise</div>
                <div className="chat-vid__info">
                  125.908 views <span className="seperate"></span>2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="chat-vid anim">
            <div className="chat-vid__wrapper">
              <img
                className="chat-vid__img"
                src="https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg"
              />
              <div className="chat-vid__content">
                <div className="chat-vid__name">Prepare for your first skateboard jump</div>
                <div className="chat-vid__by">Jordan Wise</div>
                <div className="chat-vid__info">
                  125.908 views <span className="seperate"></span>2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="chat-vid anim">
            <div className="chat-vid__wrapper">
              <img
                className="chat-vid__img"
                src="https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg"
              />
              <div className="chat-vid__content">
                <div className="chat-vid__name">Prepare for your first skateboard jump</div>
                <div className="chat-vid__by">Jordan Wise</div>
                <div className="chat-vid__info">
                  125.908 views <span className="seperate"></span>2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="chat-vid anim">
            <div className="chat-vid__wrapper">
              <img
                className="chat-vid__img"
                src="https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg"
              />
              <div className="chat-vid__content">
                <div className="chat-vid__name">Prepare for your first skateboard jump</div>
                <div className="chat-vid__by">Jordan Wise</div>
                <div className="chat-vid__info">
                  125.908 views <span className="seperate"></span>2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="chat-vid anim">
            <div className="chat-vid__wrapper">
              <img
                className="chat-vid__img"
                src="https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg"
              />
              <div className="chat-vid__content">
                <div className="chat-vid__name">Prepare for your first skateboard jump</div>
                <div className="chat-vid__by">Jordan Wise</div>
                <div className="chat-vid__info">
                  125.908 views <span className="seperate"></span>2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="chat-vid anim">
            <div className="chat-vid__wrapper">
              <img
                className="chat-vid__img"
                src="https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg"
              />
              <div className="chat-vid__content">
                <div className="chat-vid__name">Prepare for your first skateboard jump</div>
                <div className="chat-vid__by">Jordan Wise</div>
                <div className="chat-vid__info">
                  125.908 views <span className="seperate"></span>2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="chat-vid anim">
            <div className="chat-vid__wrapper">
              <img
                className="chat-vid__img"
                src="https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg"
              />
              <div className="chat-vid__content">
                <div className="chat-vid__name">Prepare for your first skateboard jump</div>
                <div className="chat-vid__by">Jordan Wise</div>
                <div className="chat-vid__info">
                  125.908 views <span className="seperate"></span>2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="chat-vid anim">
            <div className="chat-vid__wrapper">
              <img
                className="chat-vid__img"
                src="https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg"
              />
              <div className="chat-vid__content">
                <div className="chat-vid__name">Prepare for your first skateboard jump</div>
                <div className="chat-vid__by">Jordan Wise</div>
                <div className="chat-vid__info">
                  125.908 views <span className="seperate"></span>2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="chat-vid anim">
            <div className="chat-vid__wrapper">
              <img
                className="chat-vid__img"
                src="https://iamaround.it/wp-content/uploads/2015/02/pexels-photo-4663818.jpeg"
              />
              <div className="chat-vid__content">
                <div className="chat-vid__name">Prepare for your first skateboard jump</div>
                <div className="chat-vid__by">Jordan Wise</div>
                <div className="chat-vid__info">
                  125.908 views <span className="seperate"></span>2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="chat-vid__button anim">See All related videos (32)</div>
        </div>
      </div>
    </>
  );
}

export default CoursePage;
