import React from 'react';
import CommentDetailComponent from './CommentDetailComponent';
import ApprovalCardComponent from './ApprovalCardComponent';

const App = () => {
  const comments = [
    {
      img:'https://i.pinimg.com/474x/eb/70/e9/eb70e9e6fd9accc5ed937bcbd867dc41.jpg',
      author: 'Sam',
      day:'Today at 4:45PM ',
      content: 'Nice blog post',
    },
    {
      img:'https://i.pinimg.com/474x/e7/db/2d/e7db2d38a7fec0a0f77feeef76eb9033.jpg',
      author: 'Alex',
      day:'Today at 2:45AM ',
      content: 'I like the subject',
    },
    {
      img:'https://i.pinimg.com/474x/2e/59/31/2e59314d05b1d991c55578e79f5382b5.jpg',
      author: 'Jane',
      day:'Yesterday at 5:45PM ',
      content: 'I like the writing',
    },
  ];

  return (
    <div>
      <ApprovalCardComponent>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCardComponent>
      
      {comments.map((comment, index) => (
        <ApprovalCardComponent key={index}>
          <CommentDetailComponent comment={comment} />
        </ApprovalCardComponent>
      ))}
    </div>
  );
};

export default App;
