import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";

function AllPostList() {

  const {PostList} =  useContext(PostListContext);   //array of abject   [{...},{...}]
  // console.log(PostList)
  return (
    <>
      {PostList.map((post)=>(<Post key={post.id} postData = {post}/>))}
     
    </>
  );
}

export default AllPostList;
