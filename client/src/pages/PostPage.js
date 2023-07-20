import HeaderContainer from "../containers/common/HeaderContainer";
import PostCommentListContainer from "../containers/post/PostCommentListContainer";
import PostViewerContainer from "../containers/post/PostViewerContainer";

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      <PostCommentListContainer />
    </>
  );
};

export default PostPage;
