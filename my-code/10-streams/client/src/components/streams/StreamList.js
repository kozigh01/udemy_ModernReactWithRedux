import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import  {connect} from 'react-redux';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import {fetchStreams} from '../../actions';


class StreamList extends React.Component {
  componentDidMount = () => {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/show/${stream.id}`} className="ui button primary">Show</Link>
          <Link to={`/streams/edit/${stream.id}`} className="ui button secondary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      )
    }
  }

  renderStreams = () => {
    return (
      <Fragment>
        {this.props.streams.map((s) => {
          return (
            <div key={s.id} className="item">
              {this.renderAdmin(s)}
              <i className="large middle aligned icon camera" />
              <div className="content">
                {s.title}
                <div className="description">{s.description}</div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">Create Stream</Link>
        </div>
      );
    }
  }

  render = () => {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreams()}</div>
        {this.renderCreate()}
      </div>
    );  
  }
}

const mapStateToProps = (state) => ({ 
  streams: Object.values(state.streams), 
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn
});
export default connect(mapStateToProps, {fetchStreams})(StreamList);


// const StreamList = () => {
//   const dispatch = useDispatch();
//   const streams = useSelector(state => state.streams);
  
//   useEffect(() => {
//     dispatch(fetchStreams());
//     console.log(streams);
//   }, []);

//   return (
//     <div>{JSON.stringify(streams)}</div>
//   );
// };

// export default StreamList;
