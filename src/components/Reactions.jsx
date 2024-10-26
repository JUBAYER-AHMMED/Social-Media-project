import { useState } from "react";
import { AiFillLike } from "react-icons/ai";

const Reactions = () => {
  const [reactions, setReactions] = useState(0);

  const likeNumber = () => {
    setReactions(reactions + 1);
  };
  return (
    <div className="alert alert-success reactions" role="alert">
      This post has been reacted by {reactions} people!
      <AiFillLike className="like" onClick={likeNumber} />
    </div>
  );
};

export default Reactions;
