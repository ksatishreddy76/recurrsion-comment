import React, { useState } from "react";
import "./App.css";
import Comment from "./Components/comment";
import CustomHook from "./Hooks/customHook";

function App() {
  const { insertComment, updateComment, deleteComment } = CustomHook();

  const [comment, setComment] = useState("");

  const initialData = {
    id: 1,
    items: [],
  };

  const [commentsData, setCommentsData] = useState(initialData);

  const id = commentsData.id;

  const handleAddComment = (comment, id) => {
    const finalStructure = insertComment(commentsData, comment, id);
    setCommentsData(finalStructure);
  };

  const handleUpdateComment = (comment, id) => {
    const finalStructure = updateComment(commentsData, comment, id);
    setCommentsData(finalStructure);
  };

  const handleDeleteComment = (id) => {
    const finalStructure = deleteComment(commentsData, id);
    setCommentsData(finalStructure);
  };

  return (
    <div className="App">
      <h1>Comment Recurrsion Method</h1>
      <br />
      <input
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <br />
      <button onClick={() => handleAddComment(comment, id)}>Comment</button>
      <Comment
        commentsData={commentsData}
        handleAddComment={handleAddComment}
        handleUpdateComment={handleUpdateComment}
        handleDeleteComment={handleDeleteComment}
      />
    </div>
  );
}

export default App;
