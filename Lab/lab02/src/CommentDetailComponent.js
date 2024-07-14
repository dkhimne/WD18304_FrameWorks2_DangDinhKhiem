import React from "react";

const CommentDetailComponent = ({ comment }) => {
  return (
    <div className="comment d-flex align-items-start mb-4">
      {comment.img && (
        <img
          src={comment.img}
          alt="Avatar"
          className="img-fluid mr-3 rounded-circle"
          style={{ width: "100px", height: "100px", objectFit: "cover" ,marginRight: '7px' }}
        />
      )}
      <div className="mt-3" >
        <div className="input-group" >
          <b style={{ marginRight: '5px' }}>{comment.author}</b>
          <p className="text-secondary mb-0">{comment.day}</p>
        </div>
        <p>{comment.content}</p>
      </div>
    </div>
  );
};

export default CommentDetailComponent;
