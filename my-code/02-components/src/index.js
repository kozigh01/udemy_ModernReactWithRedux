import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          date="Today at 6:00PM" 
          text="blog 1" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Robin" 
          date="Today at 5:00PM" 
          text="blog 2" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <div>Some stuff</div>
        <CommentDetail 
          author="Alex" 
          date="Today at 7:00PM" 
          text="blog 3" 
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        Here's some stuff
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(< App />, document.querySelector('#root'));