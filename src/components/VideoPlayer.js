import React from 'react';
import './api.css';

const VideoPlayer = ({index, thumbnail, video}) => {
const style = {
  };

  return (
    <div className="videos">
     { video && <video src={video} loop autoPlay muted controls preload style ={style}>
      Your browser does not support the video tag.
      </video>}
    </div>
  );
};

export default VideoPlayer;
