import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

function CreatePost() {

 const {addPost} =  useContext(PostListContext);
 const userIdElement =  useRef();
 const titleElement =  useRef();
 const descriptionElement =  useRef();
 const reactionsElement =  useRef();
 const tagsElement =  useRef();

 function handleClick(){
  const userId = userIdElement.current.value;
  const title = titleElement.current.value;
  const description = descriptionElement.current.value;
  const reactions = reactionsElement.current.value;
  const tags = tagsElement.current.value.split(" "); 

  userIdElement.current.value = "";
  titleElement.current.value = "";
  descriptionElement.current.value = "";
  reactionsElement.current.value = "";
  tagsElement.current.value = "";

  addPost(userId,title,description,reactions,tags);
 }

  return (
    <form className="post-form" onSubmit={handleClick}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          placeholder="Enter your id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          type="text"
          ref={titleElement}
          placeholder="Enter your post's title"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Description
        </label>
        <input
          type="text"
          ref={descriptionElement}
          placeholder="Enter your post's Description"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          placeholder="Enter Reactions of Post"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tagsElement}
          placeholder="Enter tags separting by space"
          className="form-control"
        />
      </div>
    
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreatePost;
