import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = ({ setSelectedTab }) => {
  const { addPost } = useContext(PostListContext);

  const useridElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();

  const handlePost = (event) => {
    event.preventDefault();
    const userid = useridElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userid, title, body, tags);
    setSelectedTab("Home");
  };

  return (
    <form className="create-post" onSubmit={handlePost}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User id here
        </label>
        <input
          type="text"
          ref={useridElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="What's on your mind ?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={bodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="What's on your mind ?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
