import React, { Fragment, useState, useEffect } from 'react';

import wikipedia from '../apis/wikipedia';


const renderedResults = (results) => results.map(r => 
  <div key={r.pageid} className="item">
    <div className="right floated content">
      <a 
        href={`https://en.wikipedia.org?curid=${r.pageid}`}
        target="_blank" 
        className="ui button"
      >Go</a>
    </div>
    <div className="content">
      <div className="header">{r.title}</div>
      {/* <p dangerouslySetInnerHTML={{ __html: r.snippet }}></p> */}
      <p>{r.snippet}</p>
      <a href="http://"></a>
    </div>
  </div>
);

const Search = (props) => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   console.log('in useEffect: (2) every render');
  // });

  // useEffect(() => {
  //   console.log('in useEffect: (1) initial render only');
  // }, []);

  useEffect(() => {
    // method 1
    const search = async () => {
      if (!term) return; 

      const response = await wikipedia.get('', {
        params: {
          srsearch: term
        }
      });
      setResults(response.data.query.search);
    }
    if (term && !results.length) {
      search();
    } else {
      const timer = setTimeout(() => search(), 1000);

      return () => {
        clearTimeout(timer);
      }
    }
    // search();

    // // method 2
    // (async () => {
    //   await wikipedia.get('', {
    //     params: {
    //       srsearch: term
    //     }
    //   });
    // })();

    // // method 3
    // wikipedia.get('', {
    //   params: {
    //     srsearch: term
    //   }
    // })
    //   .then(resp => console.log(resp));

    // cancel previous timer, if it hasn't run before next call to this useEffect function
  }, [term]);


  return (
    <Fragment>
      <h2>Search Component</h2>
      <div className="ui segment">
        <form className="ui form">
          <div className="ui action input">
            <input
              type="search"
              name="term"
              id="term"
              placeholder="Enter Search Term..."
              value={term}
              onChange={e => setTerm(e.target.value)}
            />
            <button className="ui button">Search</button>
          </div>
        </form>
      </div>
      <div className="ui celled list">
        {renderedResults(results)}
      </div>
    </Fragment>
  );
}

export default Search;