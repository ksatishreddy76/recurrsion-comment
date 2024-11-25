import React from "react";

const CustomHook = () => {
  const insertComment = (tree, value, id) => {
    const newItem = {
      id: Math.floor(Math.random() * 1000), // Ensure a random ID
      title: value,
      items: [],
    };

    const newTree = {...tree};

    if (newTree.id === id) {
      newTree.items.push(newItem);
    }

    return newTree;
  };

  return {insertComment};
};

export default CustomHook;
