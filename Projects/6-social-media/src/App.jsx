import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import AllPostList from "./components/AllPostsList";
import { useState } from "react";
import PostListContextProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState('Home')

  return (
    <PostListContextProvider>
    <div className="allContent">
      <Sidebar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab}/>
      <div className="mainContent">
        <Header />
        {selectedTab === 'Home' ? <AllPostList/> : <CreatePost/>}
        <Footer />
      </div>
    </div>
    </PostListContextProvider>
  );
}

export default App;
