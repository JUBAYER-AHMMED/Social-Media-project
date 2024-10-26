import { createContext, useReducer, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const reducer = (CurrPostList, action) => {
  let NewList;
  if (action.type === "ADD") {
    NewList = [action.payload, ...CurrPostList];
  } else if (action.type === "DELETE") {
    NewList = CurrPostList.filter(
      (EachObj) => EachObj.id !== action.payload.id
    );
  }

  return NewList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducer, []);

  const addPost = (userId, title, body, tags) => {
    let NewId = postList.length > 0 ? postList[postList.length - 1].id + 1 : 1;
    let newObject = {
      type: "ADD",
      payload: {
        id: NewId,
        userId: userId,
        title: title,
        body: body,
        tags: tags,
      },
    };
    dispatchPostList(newObject);
  };
  const deletePost = (ID) => {
    dispatchPostList({
      type: "DELETE",
      payload: {
        id: ID,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
