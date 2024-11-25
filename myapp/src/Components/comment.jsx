import React, { useState } from "react";

const Comment = ({ commentsData, handleAddComment, handleUpdateComment, handleDeleteComment }) => {
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newValue, setNewValue] = useState("");

  const [addReply, setAddReply] = useState(false);
  const [replyId, setReplyId] = useState(null);
  const [reply, setReply] = useState("");

  const cancelClick = () => {
    setEdit(false);
    setNewValue("");
    setEditId(null);
    setAddReply(false);
    setReplyId(null);
    setReply("");
  };

  return commentsData.items.map((item) => (
    <div style={{ marginLeft: "10px" }}>
      <div className="comment">
        {edit && editId === item.id ? (
          <input value={newValue} onChange={(e) => setNewValue(e.target.value)} />
        ) : (
          <p>{item.title}</p>
        )}
        {edit && editId === item.id ? (
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => {
                handleUpdateComment(newValue, item.id);
                cancelClick();
              }}
            >
              Save
            </button>
            <button onClick={cancelClick}>Cancel</button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => {
                setAddReply(true);
                setReplyId(item.id);
              }}
            >
              Reply
            </button>
            <button
              onClick={() => {
                setEdit(true);
                setNewValue(item.title);
                setEditId(item.id);
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDeleteComment(item.id)}>Delete</button>
          </div>
        )}

        {item.id === replyId && addReply ? (
          <div>
            {" "}
            <input
              value={reply}
              onChange={(e) => {
                setReply(e.target.value);
              }}
            />
            <button
              onClick={() => {
                handleAddComment(reply, item.id);
                cancelClick();
              }}
            >
              Comment
            </button>
            <button onClick={cancelClick}>Cancel</button>
          </div>
        ) : (
          ""
        )}
      </div>
      <Comment
        commentsData={item}
        handleAddComment={handleAddComment}
        handleUpdateComment={handleUpdateComment}
        handleDeleteComment={handleDeleteComment}
      />
    </div>
  ));
};

export default Comment;
