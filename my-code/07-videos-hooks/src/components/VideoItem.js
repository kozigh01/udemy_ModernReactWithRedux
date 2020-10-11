import React from 'react';

function VideoItem(props) {
  const {id, thumbnail, title} = props.video;

  return (
    <div 
      id={id} 
      className="item video-item" 
      onClick={() => props.onVideoSelected(props.video)}
    >
      <img src={thumbnail} alt={title} className="ui image" />
      <div className="content"  >
        <div className="header">{title}</div>
      </div>
    </div>
  );
}

export default VideoItem;