import React from 'react'

export default function VideoDetail({ video }) {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id}`;

  return (
    <div >
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" frameBorder="0"></iframe>
      </div>
      <div className="ui segment">
        <h4>{video.title}</h4>
        <p>{video.description}</p>
      </div>
    </div>

  );
}