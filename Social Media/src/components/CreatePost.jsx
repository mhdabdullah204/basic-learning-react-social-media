import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, postTitle, postBody, reactions, tags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="createPostElement create-Post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userIdElement" className="form-label"></label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          placeholder="Your User Id"
          id="userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postTitleElement" className="form-label"></label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          placeholder="Post title"
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postBodyElement" className="form-label"></label>
        <textarea
          rows="5"
          ref={postBodyElement}
          className="form-control"
          placeholder="Write Your Content"
          id="body"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactionsElement" className="form-label"></label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          placeholder="People Reacted"
          id="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tagsElement" className="form-label"></label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          placeholder="Enter your tags"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        post
      </button>
    </form>
  );
};

export default CreatePost;
