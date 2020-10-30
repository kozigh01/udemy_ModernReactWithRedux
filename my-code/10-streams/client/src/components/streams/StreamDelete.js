import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.id);
  }

  dismiss = () => history.push('/');
  onDelete = () => {
    this.props.deleteStream(this.props.id);
    this.dismiss();
  };

  renderActions = (
    <Fragment>
      <button className="ui button negative" onClick={this.onDelete}>Delete</button>
      <Link to="/" className="ui button">Cancel</Link>
    </Fragment>
  );

  renderContent = () => {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete stream with title: "${this.props.stream?.title}"?`
  }

  render = () => {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions}
        onDismiss={this.dismiss}
      ></Modal>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    id,
    stream: state.streams[id]
  }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);