import React, {useState} from "react";
import "./App.css";
import Comment from "./Components/comment";
import CustomHook from "./Hooks/customHook";

function App() {
  const {insertComment} = CustomHook();

  const [comment, setComment] = useState("");

  const initialData = {
    id: 1,
    items: [
      {
        id: 11,
        title: "Home",
        items: [],
      },
      {
        id: 12,
        title: "Home",
        items: [
          {
            id: 111,
            title: "Home",
            items: [
              {
                id: 1111,
                title: "Home",
                items: [],
              },
            ],
          },
        ],
      },
    ],
  };

  const [commentsData, setCommentsData] = useState(initialData);

  const id = commentsData.id;

  const handleAddComment = (commentsData, comment, id) => {
    const finalStructure = insertComment(commentsData, comment, id);
    console.log("finalStructure", finalStructure);
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
      <button onClick={() => handleAddComment(commentsData, comment, id)}>Comment</button>
      <Comment commentsData={commentsData} />
    </div>
  );
}

export default App;
