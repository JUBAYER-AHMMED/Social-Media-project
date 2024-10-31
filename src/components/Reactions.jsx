import { useContext, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { PostListContext } from "../store/post-list-store";

const Reactions = () => {
  const [reactions, setReactions] = useState(0);

  const { getReactions } = useContext(PostListContext);

  const likeNumber = () => {
    setReactions(reactions + 1);
    getReactions(reactions);
  };

  return (
    <div className="alert alert-success reactions" role="alert">
      This post has been reacted by {reactions} people!
      <AiFillLike className="like" onClick={likeNumber} />
    </div>
  );
};

export default Reactions;
