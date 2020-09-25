import './App.css';
import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], searchTerm: '', selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get('search', { params: { q: term }});

    const videos = response.data.items.map(i => ({
      id: i.id.videoId,
      title: i.snippet.title,
      description: i.snippet.description,
      thumbnail: i.snippet.thumbnails.medium.url,
    }));
    this.setState({ videos, selectedVideo: videos[0] });
  }

  onVideoSelected = (video) => {
    this.setState({ selectedVideo: video });
    console.log('Seleted video from the App: ', video);
  }

  componentDidMount() {
    this.onTermSubmit('cats');
  }

  render() {
    return (
      <div className="ui container">
        <h1>youtube Video Search</h1>
        <SearchBar onSearchBarSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;