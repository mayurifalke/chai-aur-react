import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

function PostList({ postData }) {
 const {deletePost} =  useContext(PostListContext);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(postData.id)}}>
        <MdDelete />
      </span>
      <div className="card-body">
        <h5 className="card-title">{postData.title}</h5>
        <p className="card-text">{postData.body}</p>
        {postData.ratings.map((item) => (
          <span key={item} className="badge text-bg-primary rating">{item}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          {`This Post has been reacted by ${postData.reactions} people`}
        </div>
      </div>
    </div>
  );
}

export default PostList;
