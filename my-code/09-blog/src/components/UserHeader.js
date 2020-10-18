import React from 'react';
import { connect } from 'react-redux';
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    // now handled by the fetchPostsAndUsers action creator
    // this.props.fetchUser(this.props.authorId);
  }

  render() {
    return (
      <h3>{this.props.authorId}: {this.props.user?.name}</h3>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(u => u.id === ownProps.authorId);
  return { user };
};

export default connect(mapStateToProps)(UserHeader);
// export default connect(mapStateToProps, { fetchUser })(UserHeader);


// Using functional component with hooks
// const UserHeader = (props) => {
//   const user = useSelector(state => state.users.find(user => user.id === props.authorId));
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchUser(props.authorId));
//   }, [props.authorId, dispatch]);

//   return (
//     <div className="header">{props.authorId}: {user?.name}</div>
//   );
// };

// export default UserHeader;