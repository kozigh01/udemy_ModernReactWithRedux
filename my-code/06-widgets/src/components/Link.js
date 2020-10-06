import React from 'react';

const Link = ({ path, text }) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    window.history.pushState({}, '', path);

    const navEvent = new PopStateEvent('popstate', {path});
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={path} className="item" onClick={onClick}>{text}</a>
  );
};

export default Link;