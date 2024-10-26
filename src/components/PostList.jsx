import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
const PostList = () => {
  const contextObj = useContext(PostListContext);
  const postList = contextObj.postList;

  if (postList.length === 0) {
    return <h1 className="text-center mt-5">Create Posts First!</h1>;
  }
  return (
    <>
      {postList.map((item) => (
        <Post key={item.id} p={item}></Post>
      ))}
    </>
  );
};

export default PostList;
