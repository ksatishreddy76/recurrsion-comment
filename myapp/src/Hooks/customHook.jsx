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

      return { ...tree };
    }

    let latestNode = [];

    latestNode = tree.items.map((obj) => {
      return insertComment(obj, value, id);
    });

    return { ...tree, items: latestNode };
  };

  const updateComment = (tree, value, id) => {
    if (tree.id === id) {
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

    return { ...tree, items: latestNode };
  };

  const deleteComment = (tree, id) => {

    for (let i = 0; i < tree.items.length; i++) {
      let currentItem = tree.items[i]

      if (currentItem.id === id) {
        tree.items.splice(i, 1);

        return { ...tree }
      } else {
        deleteComment(currentItem, id)
      }
    }

    return { ...tree }
  }

  return { insertComment, updateComment, deleteComment };
};

export default CustomHook;
