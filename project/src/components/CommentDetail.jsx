// src/components/CommentDetail.js
import React from 'react';

const CommentDetail = ({ selectedComment }) => {
  return (
    <div className="comment-detail">
      <h2>Selected Post</h2>
      <p>Title: {selectedComment.name}</p>
      <p>Body: {selectedComment.body}</p>
      <h2>Associated Comments</h2>
      <ul>
        {/* Display associated comments here */}
        {selectedComment.comments.map((comment) => (
          <li key={comment.id}>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Comment: {comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentDetail;
