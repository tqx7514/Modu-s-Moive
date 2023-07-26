import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostListContainer from "../containers/posts/PostListContainer";
import PostPaginationContainer from "../containers/posts/PostPaginationContainer";
import Footer from "../components/common/Footer";

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostListContainer />
      <PostPaginationContainer />
      <Footer />
    </div>
  );
};

export default PostListPage;
