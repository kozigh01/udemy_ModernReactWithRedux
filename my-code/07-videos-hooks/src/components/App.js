import './App.css';
import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [ selectedVideo, setSelectedVideo ] = useState(null);
  const [ videos, searchVideos ] = useVideos('cats');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  
  return (
    <div className="ui container">
      <h1>youtube Video Search</h1>
      <SearchBar onSearchBarSubmit={searchVideos} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelected={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;