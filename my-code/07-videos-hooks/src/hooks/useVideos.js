import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';


const useVideos = (defaultSearchTerm) => {
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async term => {
    const response = await youtube.get('search', { params: { q: term }});

    const videos = response.data.items.map(i => ({
      id: i.id.videoId,
      title: i.snippet.title,
      description: i.snippet.description,
      thumbnail: i.snippet.thumbnails.medium.url,
    }));
    setVideos(videos);
  }

  return [videos, search];
};

export default useVideos;