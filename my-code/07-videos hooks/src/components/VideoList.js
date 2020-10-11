import React from 'react';

import VideoItem from './VideoItem';

function VideoList({ videos, onVideoSelected }) {
  if (!videos || videos.length === 0) {
    return '';
  }

  return (
    <div>
      <div className="ui segment">
        <div id="video-list" className='ui divided list'>
          {videos.map(v =>
            <VideoItem key={v.id} id={v.id} video={v} onVideoSelected={onVideoSelected} />
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoList;