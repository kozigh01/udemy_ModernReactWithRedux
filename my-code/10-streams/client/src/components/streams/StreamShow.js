import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';


class StreamShow extends React.Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.id);
  };

  render = () => {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        StreamShow
        <p>Title: {this.props.stream?.title}</p>
        <p>Description: {this.props.stream?.description}</p>
      </div>
    );
  };
}

const mapStateToProp = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return { id, stream: state.streams[id] };
};

export default connect(mapStateToProp, {fetchStream})(StreamShow);