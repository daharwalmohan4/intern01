// src/components/CommentList.js
import React, { useEffect, useState } from 'react';

const CommentList = ({ setSelectedComment }) => {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [postIdFilter, setPostIdFilter] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data.slice(0, 100))); // Limit to the first 100 comments
  }, []);

  useEffect(() => {
    if (!postIdFilter) {
      setFilteredComments(comments);
    } else {
      setFilteredComments(
        comments.filter((comment) => comment.postId === Number(postIdFilter))
      );
    }
  }, [comments, postIdFilter]);

  return (
    <div className="comment-list">
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by postId"
          value={postIdFilter}
          onChange={(e) => setPostIdFilter(e.target.value)}
        />
      </div>
      <ul>
        {filteredComments.map((comment) => (
          <li
            key={comment.id}
            onClick={() => setSelectedComment(comment)}
            className="comment-item"
          >
            <div className="post-id">Post ID: {comment.postId}</div>
            <div className="comment-content">
              <p className="comment-title">{comment.name}</p>
              <p className="comment-body">{comment.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
