import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.id, formValues);    
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, 'title','description')}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return ({
    id,
    stream: state.streams[id]
  });
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);

// class StreamEdit extends React.Component {
//   componentDidMount = () => {
//     this.props.fetchStream(this.props.match.params.id);
//   };

//   render = () => {
//     console.log(this.props);
//     if (!this.props.stream) {
//       return <div>Loading...</div>
//     }
//     return (
//       <div>
//         StreamEdit
//         <p>Title: {this.props.stream?.title}</p>
//         <p>Description: {this.props.stream?.description}</p>
//       </div>
//     );
//   };
// }

// const mapStateToProps = (state, ownProps) => {
//   const id = ownProps.match.params.id;
//   return { stream: state.streams[id] };
// }

// export default connect(mapStateToProps, {fetchStream})(StreamEdit);