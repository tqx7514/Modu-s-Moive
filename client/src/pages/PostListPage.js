import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostListContainer from "../containers/posts/PostListContainer";
import PostPaginationContainer from "../containers/posts/PostPaginationContainer";

const PostListPage = () => {
  return (
    <div>
      <HeaderContainer />
      <PostListContainer />
      <PostPaginationContainer />
    </div>
  );
};

export default PostListPage;
