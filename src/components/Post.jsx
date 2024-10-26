import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";

import { PostListContext } from "../store/post-list-store";
import Reactions from "./Reactions";
const Post = ({ p }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card post-card" style={{ width: "36rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {p.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(p.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{p.body}</p>

        {p.tags &&
          p.tags.map((tag) => (
            <span className="badge text-bg-primary hashtag" key={tag}>
              {tag}
            </span>
          ))}

        <Reactions />
      </div>
    </div>
  );
};

export default Post;
