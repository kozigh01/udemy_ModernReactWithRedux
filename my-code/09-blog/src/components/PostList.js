import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../actions';

import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
    // this.props.fetchPosts();
  }

  renderList = () => {
    return this.props.posts.map(p =>
      <div key={p.id} className="item">
        <i className="large middle aligned icon user"></i>
        <div className="content">
          <div className="description">
            <h2>{p.title}</h2>
            <p>{p.body}</p>
          </div>
          <UserHeader authorId={p.userId} />
        </div>
      </div>
    );
  };

  render = () => {
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    );
  };
}

const mapStateToProps = (state) => { return { posts: state.posts } };

export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(PostList);