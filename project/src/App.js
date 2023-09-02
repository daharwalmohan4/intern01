// src/App.js
import React, { useState } from 'react';
import './App.css';
import CommentList from './components/CommentList';
import CommentDetail from './components/CommentDetail';

function App() {
  const [selectedComment, setSelectedComment] = useState(null);

  return (
    <div className="App">
      <div className="left-panel">
        <CommentList setSelectedComment={setSelectedComment} />
      </div>
      <div className="right-panel">
        {selectedComment ? (
          <CommentDetail selectedComment={selectedComment} />
        ) : (
          <p>Select a post to view its comments</p>
        )}
      </div>
    </div>
  );
}

export default App;
