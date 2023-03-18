import React, { createRef, useEffect } from 'react';

import Hls, { HlsConfig } from 'hls.js';

type Props = {
  src: string;
  videoRef?: React.RefObject<HTMLVideoElement>;
  hlsConfig?: HlsConfig;
} & React.VideoHTMLAttributes<HTMLVideoElement>;

const VideoPlayer = (props: Props) => {
  const { src, videoRef = createRef<HTMLVideoElement>(), hlsConfig, autoPlay } = props;

  useEffect(() => {
    let hls: Hls;

    function _initPlayer() {
      if (hls != null) {
        hls.destroy();
      }

      const newHls = new Hls({
        enableWorker: false,
        ...hlsConfig,
      });

      if (videoRef.current != null) {
        newHls.attachMedia(videoRef.current);
      }

      newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
        newHls.loadSource(src);

        newHls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoPlay) {
            videoRef?.current
              ?.play()
              .catch(() =>
                console.log('Unable to autoplay prior to user interaction with the dom.'),
              );
          }
        });
      });

      newHls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              newHls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              newHls.recoverMediaError();
              break;
            default:
              _initPlayer();
              break;
          }
        }
      });

      hls = newHls;
    }

    if (Hls.isSupported()) {
      _initPlayer();
    }

    return () => {
      if (hls != null) {
        hls.destroy();
      }
    };
  }, [autoPlay, hlsConfig, videoRef, src]);

  if (Hls.isSupported()) return <video ref={videoRef} {...props} />;

  return <video ref={videoRef} autoPlay={autoPlay} {...props} />;
};

export default VideoPlayer;
