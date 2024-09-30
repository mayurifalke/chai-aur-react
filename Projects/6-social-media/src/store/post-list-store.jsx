import { Children, createContext, useReducer } from "react";

export const PostListContext = createContext({
  PostList: [],
  addPost: () => {},
  deletePost: () => {},
});


const default_val = [
  {
    id: 1,
    title: "Going to America with parents",
    body: "It is a first time in my life i am going to America with my parents, It's feel proud to me",
    reactions: 2,
    ratings:["America","Trip","Enjoy"],
    user_id: "user-1",
  },
  {
    id: 2,
    title: "Pass ho gaye Bhaiii",
    body: "4 saal Itni masti karne ke baad bhi pass ho gaye, Unbeliveable!!",
    reactions: 21,
    ratings:["Graduated","Unbelievable"],
    user_id: "user-12",
  },
];

function PostListReducer(currPostlist, action) {
  // console.log(currPostlist)
  let newPostlist = currPostlist;

  if(action.type === "DELETE_POST"){
    newPostlist = currPostlist.filter((post)=>post.id !== action.payload.postId)
  }else if(action.type === "ADD_POST"){
    newPostlist = [action.payload, ...currPostlist]
  }
  return newPostlist;
}


function PostListContextProvider({ children }) {
  const [PostList, dispatchPost] = useReducer(PostListReducer, default_val);

  function addPost(userId,title,description,reactions,tags) {
    console.log(userId,title,description,reactions,tags);

    const addAction = {
      type:"ADD_POST",
      payload:{
        id:Date.now(),
        title: title,
        body : description,
        reactions:reactions,
        ratings:tags,
        user_id:userId
      }
    }

    dispatchPost(addAction)
  }

  function deletePost(postId) {
    console.log(postId)
    const deleteAction = {
      type:"DELETE_POST",
      payload:{
        postId
      }
    }
    dispatchPost(deleteAction);
  }
 
  return (
    <PostListContext.Provider value={{ PostList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
}




export default PostListContextProvider;
