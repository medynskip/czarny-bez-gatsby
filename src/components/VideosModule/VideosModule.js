import { useQuery } from "@tanstack/react-query";
import React, { useState} from "react";

import { getMusicVideos } from "../../fetchers/fetchers";
import Portal from "../Portal/Portal";

import * as styles from './VideosModule.module.scss';

const VideosModule = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoDetail, setVideoDetail] = useState(null);

  const { data, isLoading}  = useQuery({
    queryKey: ['videos'],
    queryFn: getMusicVideos
  });

  const handleClick = (videoData) => {
    setVideoDetail(videoData);
    document.body.style.overflow = 'hidden';
    setShowModal(true);
  };

  const handleClose = () => {
    document.body.style.overflow = 'unset';
    setShowModal(false);
    setVideoDetail(null);
  };

  return (
    <>
      <div id="teledyski">
        <h3>Nasze teledyski</h3>
        {!isLoading && data.data.videos ? (
          <>
            {data.data.videos.map((video) => {
              return (
                <div className={styles.videoRow} key={video.id}>
                  <iframe
                    src={video.source}
                    title={video.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                  />
                  <div className={styles.videoDescription}>
                    <h4>{video.title}</h4>
                    <p className={styles.videoText}>
                      {video.lead}
                    </p>
                    <span 
                      onClick={() => {
                        handleClick(video);
                      }} 
                    >
                      Więcej...
                    </span>
                  </div>
                </div>
              );
            })} 
          </>
        ) : null}

      </div>
      <Portal
        mountPoint={
          typeof window !== 'undefined'
            ? window.document.getElementById('video_modal')
            : null
        }>
        {showModal && videoDetail ? (
          <div className={styles.modalContainer}>
            <div>
              <div className={styles.modalVideo}>
                <iframe
                  src={videoDetail.source}
                  title={videoDetail.title}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                />
              </div>
              <div className={styles.modalDescription}>
                <h4>{videoDetail.title}</h4>
                <p className={styles.modalText}>
                  {videoDetail.description}
                </p>
              </div>
              <span onClick={handleClose}>X</span>
            </div>
          </div>
        ) : null}
      </Portal>
    </>
  );
};

export default VideosModule;