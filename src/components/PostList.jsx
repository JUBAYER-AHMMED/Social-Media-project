import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";

import WelcomeMessage from "./Welcomemessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const contextObj = useContext(PostListContext);
  const postList = contextObj.postList;
  const addInitialPosts = contextObj.addInitialPosts;

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(
          data.posts
        ); /* if the data is empty, the welcome message will be shown...   apply this :
        addInitialPosts([]);*/
        setFetching(false);
      });
  }, []);
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {/* if the api response is rejected,only then the welcome message will be shown... */}

      {!fetching &&
        postList.map((item) => <Post key={item.id} p={item}></Post>)}
    </>
  );
};

export default PostList;
