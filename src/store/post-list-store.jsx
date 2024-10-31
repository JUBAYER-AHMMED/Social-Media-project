import { createContext, useReducer, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  getReactions: () => {},
  addInitialPosts: () => {},
});

const reducer = (CurrPostList, action) => {
  let NewList;
  if (action.type === "ADD") {
    NewList = [action.payload, ...CurrPostList];
  } else if (action.type === "DELETE") {
    NewList = CurrPostList.filter(
      (EachObj) => EachObj.id !== action.payload.id
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    NewList = CurrPostList.length === 0 ? action.payload.posts : CurrPostList;
  }

  return NewList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducer, []);

  let reactions;
  const getReactions = (react) => {
    reactions = react;
  };
  const addPost = (userId, title, body, tags) => {
    let NewId = postList.length > 0 ? postList[postList.length - 1].id + 1 : 1;

    let newObject = {
      type: "ADD",
      payload: {
        id: NewId,
        userId: userId,
        title: title,
        body: body,
        reactions: reactions,
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

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, getReactions, addInitialPosts }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
