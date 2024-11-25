import React from "react";

const Comment = ({commentsData}) => {
  return commentsData.items.map((item) => (
    <div style={{marginLeft: "10px"}}>
      <div className="comment">
        <p>{item.title}</p>
        <div style={{display: "flex", gap: "10px"}}>
          <button>Reply</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <Comment commentsData={item} />
    </div>
  ));
};

export default Comment;
