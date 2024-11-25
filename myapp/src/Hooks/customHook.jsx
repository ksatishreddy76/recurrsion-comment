import React from "react";

const CustomHook = () => {
  const insertComment = (tree, value, id) => {
    const newItem = {
      id: Math.floor(Math.random(3) * 1000),
      title: value,
      items: [],
    };

    if (tree.id === id) {
      tree.items.push(newItem);

      return {...tree};
    }

    let latestNode = [];

    latestNode = tree.items.map((obj) => {
      return insertComment(obj, value, id);
    });

    return {...tree, items: latestNode};
  };

  const updateComment = (tree, value, id) => {
    if (tree.id === id) {
      console.log("id", id);
      return {
        ...tree,
        title: value,
      };
    }

    let latestNode = [];

    latestNode = tree.items.map((obj) => {
      return updateComment(obj, value, id);
    });

    console.log("latestNode", latestNode);

    return {...tree, items: latestNode};
  };

  return {insertComment, updateComment};
};

export default CustomHook;
